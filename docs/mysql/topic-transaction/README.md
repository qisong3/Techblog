---
title: MySQL的事务
date: 2021-03-04
last-update: 2021-03-04
keywords:
 - MySQL 
 - 事务
---

## 什么是事务

事务是一组连续的数据库操作操作，它就像单个工作单元一样执行。换句话说，除非组中的每个操作都成功，否则事务永远不会完成。如果事务中的任何操作失败，整个事务也将失败。

可以将把许多SQL查询合并到一个组中，并将它们作为事务的一部分一起执行。

一般来说，事务包含以下特性，即经典的ACID

- A<br>
    Atomicity(原子性): 这确保工作单元内的所有操作都成功完成;否则，事务将在失败点中止，以前的操作将回滚到它们之前的状态。
- C<br>
    Consistency(一致性): 这可以确保数据库在成功提交事务时正确地更改状态。
- I<br> 
    Isolation(独立性): 这使得事务能够独立地操作，并且对彼此是透明的。
- D<br>
    Durability(持久性): 这可以确保在系统故障的情况下，提交事务的结果或影响仍然存在。


## MySQL对事务的支持

MySQL5.1以后默认引擎改为InnoDB，支持事务。

事务控制语句：

    BEGIN 或 START TRANSACTION 显式地开启一个事务；

    COMMIT 也可以使用 COMMIT WORK，不过二者是等价的。COMMIT 会提交事务，并使已对数据库进行的所有修改成为永久性的；

    ROLLBACK 也可以使用 ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；

    SAVEPOINT identifier，SAVEPOINT 允许在事务中创建一个保存点，一个事务中可以有多个 SAVEPOINT；

    RELEASE SAVEPOINT identifier 删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；

    ROLLBACK TO identifier 把事务回滚到标记点；

    SET TRANSACTION 用来设置事务的隔离级别。InnoDB 存储引擎提供事务的隔离级别有READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ 和 SERIALIZABLE。

MYSQL 事务处理主要有两种方法：

1、用 BEGIN, ROLLBACK, COMMIT来实现

    BEGIN 开始一个事务
    ROLLBACK 事务回滚
    COMMIT 事务确认

2、直接用 SET 来改变 MySQL 的自动提交模式:

    SET AUTOCOMMIT=0 禁止自动提交
    SET AUTOCOMMIT=1 开启自动提交
    
## 事务隔离级别

事务隔离是数据库处理的基础之一。Isolation是ACID的首字母缩写中的I，隔离级别是在多个事务同时进行更改和执行查询时，对性能与结果的可靠性、一致性和再现性之间的平衡进行微调的设置。

InnoDB提供了SQL:1992标准中描述的四种事务隔离级别:READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ和SERIALIZABLE。InnoDB默认的隔离级别是**REPEATABLE READ**。

### READ UNCOMMITTED 读未提交

处于这种隔离级别下，不同的事务可以读取到其他事务未提交的内容，即事务之间不存在隔离。

假设有这样一个Person表，表中有原始数据。

|Id | Email|
|:--:|:--:|
|2|bob@example.com|
|3|johb@example.com|

举个实际的例子说明，开两个对话session，分别将事务隔离级别设置为READ UNCOMMITTED，并取消自动提交。

```sql
set session transaction isolation level READ UNCOMMITTED;

SELECT @@session.transaction_isolation; 

set @@session.autocommit = 0;
```

session1 开启事务并执行对表的插入语句，但不提交事务。

```sql 

start TRANSACTION;

INSERT into Person (Id, Email ) VALUES (1, '11@example.com');

```

此时session2 也开启事务并执行查询语句
```sql
start TRANSACTION;

SELECT * FROM Person;
```
获得如下结果

|Id | Email|
|:--:|:--:|
|1|11@example.com|
|2|bob@example.com|
|3|johb@example.com|

可以见得，session2在session1未提交事务时便查询到了session1对表的更改，即出现了脏读。


### READ COMMITTED 读提交

处于这种隔离级别的事务，只能读到其他事务已提交的数据。

还是以前面的Person表举例，将两个session的事务隔离级别都设置为READ COMMITTED。

```sql
set session transaction isolation level READ COMMITTED;
```

此时session2开启事务并读取表数据。

```sql
start TRANSACTION;

SELECT * FROM Person WHERE Id = 1
```
获得如下结果

|Id | Email|
|:--:|:--:|
|1|11@example.com|

session1修改表数据
```sql
start TRANSACTION;

UPDATE Person SET Email = '22@example.com' WHERE Id = 1
```
此时session2再读取Person表，获得

|Id | Email|
|:--:|:--:|
|1|22@example.com|

即session2不会读取到session1未提交事务的数据。

此时session1将事务提交，session2获得如下结果：

|Id | Email|
|:--:|:--:|
|1|22@example.com|

这样对于session2，在同一个事务里读取到了其他事务的不同数据，产生了不可重复读。

### REPEATABLE READ 可重复读

处于这种事务隔离级别，在同一个事务流程中读到的其他事务处理的数据是一致的，不会因为其他事务的提而更改。

同样对于session2，先开启事务并读取Person表

|Id | Email|
|:--:|:--:|
|1|22@example.com|

session1开启事务并修改表提交

```sql
start TRANSACTION;

UPDATE Person SET Email = '33@example.com' WHERE Id = 1

COMMIT;
```
session2再读取获得如下数据

|Id | Email|
|:--:|:--:|
|1|22@example.com|

即在同一事务中，读取到的数据是一致的，并不因为其他事务的修改提交而改变。

再看一个例子，同样的在session2中执行查询操作

```sql
start transation;

SELECT * FROM Person  FOR UPDATE;

```
|Id | Email|
|:--:|:--:|
|1|	33@example.com |
|2|	bob@example.com |
|3|	john@example.com |
|4|	kuhn@example.com |

此时session1执行插入操作并提交:

```sql

BEGIN;

INSERT into Person (Id, Email ) VALUES (5, 'jobs@example.com');

COMMIT;

```

session2继续读取时，查询到如下结果

```sql
SELECT * FROM Person  FOR UPDATE;
```

|Id | Email|
|:--:|:--:|
|1|	33@example.com |
|2|	bob@example.com |
|3|	john@example.com |
|4|	kuhn@example.com |
|5| jobs@example.com |

即session2读到了之前未出现的Id = 5 的数据，出现了幻读。

为什么两次查询结果不同？

因为MySQL为了解决幻读问题引入了多版本并发控制（MVCC），在执行`select * from Person`语句时，执行的是快照读，无论后面其他事务怎么修改数据，该事务读取的都是当前版本的数据。

但是如果执行`select * from Person  FOR UPDATE`语句，则是实时读，就可能出现幻读。

### SERIALIZABLE 串行化

事务隔离级别处于可行化时，通过加锁来实现事务之间的隔离，避免了不同事务同时修改同一处数据。

同样的，session2 开启事务并实时查询，但不提交。

```sql
BEGIN;

SELECT * FROM Person  FOR UPDATE;
```

session1尝试对同一个表执行插入操作

```sql
BEGIN;
INSERT into Person (Id, Email ) VALUES (6, 'labs@example.com');
```

数据库报错 `1205 - Lock wait timeout exceeded; try restarting transaction`

将session2的事务提交以后，session1可正常执行。

可见这种级别的事务隔离做到了完全独立相互阻塞，可以保证数据的强一致性。


## 事务的设置语法

```sql
    SET [GLOBAL | SESSION] TRANSACTION
        transaction_characteristic [, transaction_characteristic] ...
    
    transaction_characteristic: {
        ISOLATION LEVEL level
      | access_mode
    }
    
    level: {
         REPEATABLE READ
       | READ COMMITTED
       | READ UNCOMMITTED
       | SERIALIZABLE
    }
    
    access_mode: {
         READ WRITE
       | READ ONLY
    }
```

设置的内容分三个部分
1. 事务范围
- global
    * 后续所有会话都执行
    * 已存在的会话不影响
    * 必须有 CONNECTION_ADMIN 权限才能设置
- session
    * 当前会话的所有事务都执行
    * 只允许在事务完成后，另一个事务开启前设置，对已经存在的事务不影响
    * 新设置的会覆盖旧的设置
- 如果未指明范围
    * 只影响当前会话的下一个事务
    * 下一个事务执行完以后，会延续之前的事务设置
    * 事务中不允许设置
2. 事务隔离级别
    
- READ UNCOMMITTED
- READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE

只能设置单个值 

3. 事务访问模式
- READ ONLY 这种模式下不允许修改表
- READ WRITE 独写表都被禁止

举例说明：

设置全局READ COMMITTED READ WRITE
```sql
    SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
    SET GLOBAL TRANSACTION READ WRITE;
```
读取全局和会话的事务设置
```sql
    SELECT @@GLOBAL.transaction_isolation, @@GLOBAL.transaction_read_only;
    SELECT @@SESSION.transaction_isolation, @@SESSION.transaction_read_only;
```
