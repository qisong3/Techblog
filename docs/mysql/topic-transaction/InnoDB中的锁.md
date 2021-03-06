---
title: InnoDB中的锁
date: 2021-03-05
last-update: 2021-03-05
keywords:
 - MySQL 
 - 事务
 - 锁
---

## 概述

InnoDB是MySQL默认的搜索引擎，支持多种锁，本文将逐一介绍

- Shared and Exclusive Locks 共享锁和独占锁
- Intention Locks 意向锁
- Record Locks 记录锁
- Gap Locks 间隙锁
- Next-Key Locks 
- Insert Intention Locks 插入意向锁
- AUTO-INC Locks 自增锁
- Predicate Locks for Spatial Indexes 

## Shared and Exclusive Locks  共享锁和独占锁

InnoDB实现了标准的两种行级锁
- shared(s) lock： 允许持有锁的事务读取行
- exclusive(x) lock: 允许持有锁的事务执行更新或者删除行的操作

如果事务T1持有行r的分享锁(s)，那么来自另一个不同的事务T2对行r的请求会如下操作：
- T2对行r的分享锁请求会立即被允许，之后T1和T2同时持有r行的分享锁
- T2对行r的独占锁请求不会被立即允许

如果T1持有的是行r的独占锁(x)，那么T2的分享锁和独占锁请求都不会被立即允许，直到T1释放了独占锁。

## Intention Locks 意向锁

InnoDB支持多粒度的锁，允许行锁和表锁同时存在。比如说，表达式`LOCK TABLES ... WRITE`是一个独占的表锁。为了支持多粒度的表锁，InnoDB使用意向锁。

意向锁是一个表级锁，指示下一个事务需要表中的行的哪种类型的锁。

- Intension shared lock（IS) 意向分享锁，指示事务打算在表中的单个行上设置共享锁。
- Intension exclusive lock（IX)意向独占锁，指示事务打算在表中的每一行上设置一个独占锁。

比如说`For example, SELECT ... FOR SHARE` 设置 IS lock, and `SELECT ... FOR UPDATE` 设置IX lock. 

意向锁协议如下：
- 在事务获得表中某一行的共享锁之前，它必须首先获得表上的IS锁或更强的锁。
- 在事务可以获取表中某行的排它锁之前，它必须首先获取该表中的IX锁。

表级锁类型兼容性总结在下面的矩阵中：

||X|IX|S|IS|
|:--:|:--:|:--:|:--:|:--:|
|X|冲突|冲突|冲突|冲突|
|IX|冲突|兼容|冲突|兼容|
|IS|冲突|冲突|兼容|兼容|
|IS|冲突|兼容|兼容|兼容|

如果一个锁与现有的锁兼容，那么它就会被授予请求事务，但如果它与现有的锁冲突，则不会授予它。事务等待，直到冲突的现有锁被释放。如果一个锁请求与一个现有的锁冲突，并且因为它会导致死锁而不能被授予，那么就会发生错误。

意向锁不会阻塞除全表锁(如，LOCK TABLES ... WRITE))以外的其他锁请求。意向锁的主要目的是显示某人正在锁定某一行，或者将要锁定表中的某一行。

## Record Locks 记录锁

记录锁是在索引记录上的锁。比如说，`SELECT c1 FROM t WHERE c1 = 10 FOR UPDATE`阻止其他事务插入，更新或者删除t.c1 = 10的行。

记录锁总是锁定有索引的记录，即使一个表没有定义索引。比如说，InnoDB会为没有聚簇索引的表隐式创建一个聚簇索引。

## Gap Locks 间隙锁

间隙锁是加在索引记录间隙的锁，或者在索引前后的间隙的锁。比如说，`SELECT c1 FROM t WHERE c1 BETWEEN 10 and 20 FOR UPDATE`，阻止其他事务向表中插入c1 = 15的数据。不管c1 = 15是否已经存在，因为已经锁住了c1的10-20的间隙。

间隙可以是一个单个的索引值，多个索引值或者为空。

间隙锁是并发和表现之间的平衡产物，只用于部分事务隔离级别。

间隙锁不需要用于使用唯一索引锁定行以搜索唯一行的语句(对于多个列组成的唯一索引中的部分列，间隙可以使用)。比如说，id列是一个唯一索引，那么下面的表达式只在id = 100这里设置了记录锁，并不阻止其他事务插入下面的间隙。

```sql
    SELECT * FROM child WHERE id = 100;
```

如果id列没有索引或者不是独立索引，那么表达式会锁住间歇。

这里还值得注意的是，不同的事务可以在一个间隙上持有冲突的锁。例如，事务A可以在一个间隙上持有一个共享间隙锁(gap S-lock)，而事务B在同一个间隙上持有一个排他间隙锁(gap X-lock)。允许冲突间隙锁的原因是，如果一条记录从一个索引中被清除，那么记录上由不同事务持有的间隙锁必须被合并。

InnoDB中的间隙锁是纯抑制作用的，这意味着它们的唯一目的是防止其他事务插入到间隙中。间隙锁可以共存。一个事务取得的间隙锁可并不会阻止另一个事务取得同一间隙上的间隙锁可。

间隙锁定可以显式禁用。 如果将事务隔离级别更改为READ COMMITTED，则间隙锁可被禁止。在这种情况下，间隙锁可被禁止用于搜索和索引，只用于外键约束检测和重复索引检测。

使用READ COMMITTED务隔离级别还有其他影响。不匹配行的记录锁在MySQL计算WHERE条件后释放。对于UPDATE表达式，InnoDB使用"半一致"读取，它返回最近提交版本的数据，以便检测行是否匹配update条件。

## Next-Key Locks 

Next-Key Lock是索引上的记录锁和索引记录前间隙上的间隙锁的合体。

InnoDB执行行级锁的方式是这样的:当它搜索或扫描一个表索引时，它会在遇到的索引记录上设置共享锁或排他锁。因此行级锁实际上就是索引记录锁。next-key lock也影响在索引记录之前的间隙。即next-key lock是索引记录锁以及该索引之前的间隙锁。

如果一个会话在一个索引的记录R上拥有共享锁或者独占锁，另一个会话不可以在R记录之前(按索引排序)插入一个新的索引记录。

假设一个索引包含值10，11，13，20，可能的next-key lock包括以下范围，圆括号表示不含，方括号包含
```shell script
(negative infinity, 10]
(10, 11]
(11, 13]
(13, 20]
(20, positive infinity)
```

最后一个间隙两边都不包含，实际上next-key lock包含的范围为(negative infinity, 20]

默认状态下，InnoDB处于REPEATABLE READ事务隔离级别。在这种情况下，InnoDB使用next-key lock搜索和索引扫描，避免幻读。


## Insert Intention Locks 插入意向锁

插入意向锁是一种间隙锁，是行插入之前进行的操作。这个锁发出信号，如果多个事务插入到同一个索引间隙中，如果它们没有插入到这个间隙中的同一位置，那么它们就不需要等待对方。

假设有索引记录4和7，不同的事务分别尝试插入5和6，每个锁住4和7之间在获取插入行的都站所之前先获取插入意向锁，但是他们不会相互阻塞，因为处理的行并不冲突。

下面的例子示范了事务在获取独占锁进行插入之前先获取了插入意向锁。例子包含两个客户端，A和B。

客户端A创建一个包含两个索引记录(90和102)的表，然后启动一个事务，对ID大于100的索引记录设置排他锁。排他锁包括记录102之前的间隙锁。

```sql
    mysql> CREATE TABLE child (id int(11) NOT NULL, PRIMARY KEY(id)) ENGINE=InnoDB;
    mysql> INSERT INTO child (id) values (90),(102);
    
    mysql> START TRANSACTION;
    mysql> SELECT * FROM child WHERE id > 100 FOR UPDATE;
    +-----+
    | id  |
    +-----+
    | 102 |
    +-----+
```
客户B开始一个事务，向间隙中插入一条记录。事务在等待获取排他锁时接受一个插入意图锁。

```sql
    mysql> START TRANSACTION;
    mysql> INSERT INTO child (id) VALUES (101);
```

可以通过 SHOW ENGINE INNODB STATUS 命令查看插入意图锁的事务数据

```sql
RECORD LOCKS space id 31 page no 3 n bits 72 index `PRIMARY` of table `test`.`child`
trx id 8731 lock_mode X locks gap before rec insert intention waiting
Record lock, heap no 3 PHYSICAL RECORD: n_fields 3; compact format; info bits 0
 0: len 4; hex 80000066; asc    f;;
 1: len 6; hex 000000002215; asc     " ;;
 2: len 7; hex 9000000172011c; asc     r  ;;...
```

## AUTO-INC Locks 自增锁

自增锁是一种特殊的表级锁，由插入到具有自动递增列的表中的事务所获得。在最简单的情况下，如果一个事务正在向表中插入值，那么任何其他事务都必须等待自己对该表的插入，以便由第一个事务插入的行接收连续的主键值。

innodb_autoinc_lock_mode配置选项控制了自增锁的算法。它允许您选择如何在可预测的自动递增值序列和插入操作的最大并发性之间进行权衡。

## Predicate Locks for Spatial Indexes 空间索引的预测锁

InnoDB支持在包含空间列上建立空间索引。

在处理包含空间索引的锁方面，Next-key锁不能很好支持REPEATABLE READ或者SERIALIZABLE事务隔离级别。因为在多维的空间上没有明确的顺序概念，因此next-key指向不明。

为了支持空间索引的隔离级别，InnoDB采用判定锁。空间索引包含最小边界矩形(MBR)值，因此InnoDB通过对用于查询的MBR值设置一个判定锁来强制对索引进行一致读取。其他事务不能插入或修改将匹配查询条件的行。


