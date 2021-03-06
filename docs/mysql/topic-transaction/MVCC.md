---
title: MVCC
date: 2021-03-05
last-update: 2021-03-05
keywords:
 - MySQL 
 - 事务
 - MVCC
---


## MVCC概述

### MVCC是什么
Multi-Versioning Concurrency Control 多版本并发控制，主要是为了提高数据库的并发性能。

简单来说，多版本并发控制是在不同的事务中，可以看到符合其应该看到的版本的数据。

### MVCC解决哪些并发问题

MVCC用来解决读—写冲突的无锁并发控制，就是为事务分配单向增长的时间戳。为每个数据修改保存一个版本，版本与事务时间戳相关联。

这里读写中的`读`指的是快照读，而不是当前读。

- **快照读**
    
    它读取的数据库记录，都是当前最新的版本，会对当前读取的数据进行加锁，防止其他事务修改数据。是悲观锁的一种操作。
    * select lock in share mode (共享锁)
    * select for update (排他锁)
    * update (排他锁)
    * insert (排他锁)
    * delete (排他锁)
    * 串行化事务隔离级别
- **当前读**
    
    读取当前应该读取的数据版本，即当前事务开始前的数据，可能是历史数据。
    * 不加锁的select操作（注：事务级别不是串行化）


## InnoDB中MVCC的实现

InnoDB是一个支持多版本存储引擎。它保存有关更改行的旧版本的信息，以支持并发性和回滚等事务特性。

InnoDB实现MVCC原理主要是**版本链**，**undo日志** ，**Read View**。

- **版本链**

InnoDB数据库中的每行数据，除了我们肉眼看见的数据，还有几个隐藏字段，分别是db_trx_id、db_roll_pointer、db_row_id。

* **db_trx_id**

    6byte，最近修改(修改/插入)事务ID：记录创建这条记录/最后一次修改该记录的事务ID。

* **db_roll_pointer**

    7byte，回滚指针，指向这条记录的上一个版本（存储于rollback segment里）

* **db_row_id**

    6byte，隐含的自增ID（隐藏主键），如果数据表没有主键，InnoDB会自动以db_row_id产生一个聚簇索引。

* **1bit删除位**
    
    一个删除flag隐藏字段, 记录被更新或删除并不代表真的删除，而是删除flag变了。

`db_row_id`是数据库默认为该行记录生成的唯一隐式主键，`db_trx_id`是当前操作该记录的事务ID，而`db_roll_pointer`是一个回滚指针，用于配合undo日志，指向上一个旧版本。

每次对数据库记录进行改动，都会记录一条undo日志，每条undo日志也都有一个roll_pointer属性（INSERT操作对应的undo日志没有该属性，因为该记录并没有更早的版本），可以将这些undo日志都连起来，串成一个链表。

对该记录每次更新后，都会将旧值放到一条undo日志中，就算是该记录的一个旧版本，随着更新次数的增多，所有的版本都会被roll_pointer属性连接成一个链表，我们把这个链表称之为版本链，版本链的头节点就是当前记录最新的值。另外，每个版本中还包含生成该版本时对应的事务id，这个信息很重要，在根据ReadView判断版本可见性的时候会用到。

- **Undo log**

    Undo log 主要用于记录数据被修改之前的日志，在表信息修改之前先会把数据拷贝到undo log里。当事务进行回滚时可以通过undo log 里的日志进行数据还原。
    
    * Undo log 的用途
    
    保证事务进行rollback时的原子性和一致性，当事务进行回滚的时候可以用undo log的数据进行恢复。
    
    用于MVCC快照读的数据，在MVCC多版本控制中，通过读取undo log的历史版本数据可以实现不同事务版本号都拥有自己独立的快照数据版本。
    
    * undo log主要分为两种：
    
    `insert undo log`
    
    代表事务在insert新记录时产生的undo log , 只在事务回滚时需要，并且在事务提交后可以被立即丢弃。
    
    `update undo log`
    
    事务在进行update或delete时产生的undo log ; 不仅在事务回滚时需要，在快照读时也需要；
    
    所以不能随便删除，只有在快速读或事务回滚不涉及该日志时，对应的日志才会被purge线程统一清除。


- **Read View**

事务进行快照读操作的时候生产的读视图(Read View)，在该事务执行的快照读的那一刻，会生成数据库系统当前的一个快照。

记录并维护系统当前活跃事务的ID(没有commit，当每个事务开启时，都会被分配一个ID, 这个ID是递增的，所以越新的事务，ID值越大)，是系统中当前不应该被本事务看到的其他事务id列表。

Read View主要是用来做可见性判断的, 即当我们某个事务执行快照读的时候，对该记录创建一个Read View读视图，把它比作条件用来判断当前事务能够看到哪个版本的数据，既可能是当前最新的数据，也有可能是该行记录的undo log里面的某个版本的数据。

 * Read View几个属性

    - `trx_ids`: 当前系统活跃(未提交)事务版本号集合。
    
    - `low_limit_id`: 创建当前read view 时“当前系统最大事务版本号+1”。
    
    - `up_limit_id`: 创建当前read view 时“系统正处于活跃事务最小版本号”
    
    - `creator_trx_id`: 创建当前read view的事务版本号；
 
 * **Read View可见性判断条件** (关键!) 

    - db_trx_id < up_limit_id || db_trx_id == creator_trx_id（显示）

        如果数据事务ID小于read view中的最小活跃事务ID，则可以肯定该数据是在当前事务启之前就已经存在了的,所以可以显示。
        
        或者数据的事务ID等于creator_trx_id ，那么说明这个数据就是当前事务自己生成的，自己生成的数据自己当然能看见，所以这种情况下此数据也是可以显示的。
    
    - db_trx_id >= low_limit_id（不显示）
    
        如果数据事务ID大于read view 中的当前系统的最大事务ID，则说明该数据是在当前read view 创建之后才产生的，所以数据不显示。如果小于则进入下一个判断
    
    - db_trx_id是否在活跃事务（trx_ids）中
    
        不存在：则说明read view产生的时候事务已经commit了，这种情况数据则可以显示。
        
        已存在：则代表我Read View生成时刻，你这个事务还在活跃，还没有Commit，你修改的数据，我当前事务也是看不见的。




## MVCC和事务隔离级别

上面所讲的Read View用于支持RC（Read Committed，读提交）和RR（Repeatable Read，可重复读）隔离级别的实现。

- RR、RC生成时机

    * RC隔离级别下，是每个快照读都会生成并获取最新的Read View；

    * 而在RR隔离级别下，则是同一个事务中的第一个快照读才会创建Read View, 之后的快照读获取的都是同一个Read View，之后的查询就不会重复生成了，所以一个事务的查询结果每次都是一样的。

- 解决幻读问题

    * 快照读：通过MVCC来进行控制的，不用加锁。按照MVCC中规定的“语法”进行增删改查等操作，以避免幻读。

    * 当前读：通过next-key锁（行锁+gap锁）来解决问题的。

- RC、RR级别下的InnoDB快照读区别

    * 在RR级别下的某个事务的对某条记录的第一次快照读会创建一个快照及Read View， 将当前系统活跃的其他事务记录起来，此后在调用快照读的时候，还是使用的是同一个Read View，所以只要当前事务在其他事务提交更新之前使用过快照读，那么之后的快照读使用的都是同一个Read View，所以对之后的修改不可见；

    * RR级别下，快照读生成Read View时，Read View会记录此时所有其他活动事务的快照，这些事务的修改对于当前事务都是不可见的。而早于Read View创建的事务所做的修改均是可见

    * RC级别下的，事务中，每次快照读都会新生成一个快照和Read View, 这就是我们在RC级别下的事务中可以看到别的事务提交的更新的原因

## MVCC和二级索引
    
前面说的InnoDB中的MVCC的实现，是针对主键索引(聚簇索引)的，而对于非主键索引的二级索引，处理有不同之处。

主键索引可以因为二级索引没有系统隐藏的行变量，因此没法就地修改。更新二级索引列时，将对旧的二级索引记录进行删除标记，将新记录插入，并最终清除带有删除标记的记录。当二级索引记录被删除标记，或者二级索引页被更新的事务更新时，InnoDB会在聚集索引中查找数据库记录。在聚集索引中，会检查记录的DB_TRX_ID，如果在启动读取事务之后修改了记录，则会从undo日志中检索该记录的正确版本。

如果二级索引记录被标记为删除，或者二级索引页被更新的事务更新，则不使用覆盖索引技术。InnoDB不是从索引结构返回值，而是在聚集索引中查找记录。

## 总结

从以上的描述中我们可以看出来，所谓的MVCC指的就是在使用`READ COMMITTD`、`REPEATABLE READ`这两种隔离级别的事务在执行普通的SEELCT操作时访问记录的版本链的过程，这样子可以使不同事务的读-写、写-读操作并发执行，从而提升系统性能。
