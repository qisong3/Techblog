---
title: 3 Tutorial
date: 2020-11-03
last-update: 2020-11-03
tags:
 - MySQL
keywords:
 - MySQL
 - manual
 - Tutorial
---

本章通过演示如何使用MySQL客户端程序来创建和使用一个简单的数据库，来提供一个数据库入门教程。[mysql](https://dev.mysql.com/doc/refman/8.0/en/mysql.html)(有时被称为终端监视器或仅仅是监视器)是一个交互式程序，使您能够连接到mysql服务器，运行查询，并查看结果。mysql也可以在批处理模式下使用:你先将查询放在一个文件中，然后告诉mysql执行文件的内容。这里介绍了使用mysql的两种方式。

要查看mysql提供的选项列表，请使用 ——help 选项调用它：
```sql
shell> mysql --help
```

本章假设mysql已经安装在您的机器上，并且有一个可以连接的mysql服务器。如果这不是真的，联系你的MySQL管理员。(如果您是管理员，您需要查阅本手册的相关部分，如第5章，MySQL服务器管理)。

本章描述了建立和使用数据库的整个过程。如果您只对访问现有数据库感兴趣，那么您可能希望跳过描述如何创建数据库及其包含的表的部分。

因为本章本质上是教程，所以有必要省略很多细节。请参阅手册的相关章节，以获得这里所涵盖主题的更多信息。

## 3.1 Connecting to and Disconnecting from the Server

要连接到服务器，通常需要在调用MySQL时提供一个MySQL用户名，大多数情况下还需要提供一个密码，如果登录的是其他主机的服务，则还需要明确host地址。一般的连接命令如下：
```sql
    shell> mysql -h host -u user -p
    Enter password: ********
```
host和user示运行MySQL服务器的主机名和MySQL帐户的用户名。当输入正确参数以后，会弹出`Enter password:`的提示符，密码也正确以后，将进入MySQL命令行
```sql
    shell> mysql -h host -u user -p
    Enter password: ********
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 25338 to server version: 8.0.24-standard
    
    Type 'help;' or '\h' for help. Type '\c' to clear the buffer.
    
    mysql>
```
`mysql>`提示符告诉您mysql已经准备好输入SQL语句了。
如果登录的是本机的服务器，则可以省略host，类似如下
```sql
    shell> mysql -u user -p
```
如果登录的时候，显示如下错误
> ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'

这说明MySQL服务并没有开启，可以咨询数据库管理员或者参考[Chapter 2, Installing and Upgrading MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

部分服务器允许用户在本机上以匿名身份访问数据库，这样的话只需要直接输入`mysql`，不用增加任何选项，就可以直接进入MySQL命令行中了

```sql 
    shell> mysql
```
在MySQL命令行中，输入quit或者\q，在Unix系统中可以键入Ctrl+D来退出命令行

## 3.2 Entering Queries

在进行本节操作之前，请确保已经可以正确登录到数据库中。登录以后没没有选中任何库，下面需要做的就是创建表，写入和读取数据等。本节将介绍一些查询的基本概念，通过这些查询可以熟悉MySQL的工作原理。

下面这是一个简单的查询，询问数据库本身的版本和时间。在mysql>提示符后面键入如下：

```sql
    mysql> SELECT VERSION(), CURRENT_DATE;
    +-----------+--------------+
    | VERSION() | CURRENT_DATE |
    +-----------+--------------+
    | 8.0.21    | 2020-11-06   |
    +-----------+--------------+
    1 row in set (0.00 sec)
    mysql>
```
这个查询延时了关于MySQL的几个点:

- 查询包含SQL语句，以分号结尾。(部分语句不需要分号结尾，如quit)
- 当您发出一个查询时，mysql将它发送到服务器以执行并显示结果，然后打印另一个`mysql>`提示，表示它已准备好进行另一个查询
- mysql以表格形式(行和列)显示查询输出,第一行包含列的标签。下面的行是查询结果.通常，列标签是您从数据库表中获取的列的名称。如果查询的是表达式的值，而不是表列的值(如上面的查询)，mysql使用表达式本身给列加上标签。
- mysql会显示返回的行数和查询执行的时间，这会让您大致了解服务器性能。不过这些值并不精确，因为它们表示挂钟时间(而不是CPU或机器时间)，而且它们会受到服务器负载和网络延迟等因素的影响

MySQL的关键字不区分大小写，下面几个查询是等效的
```sql
    mysql> SELECT VERSION(), CURRENT_DATE;
    mysql> select version(), current_date;
    mysql> SeLeCt vErSiOn(), current_DATE;
```
这里举另一个例子，显示MySQL也可以作为一个计算器使用
```sql
    mysql> SELECT SIN(PI()/4), (4+1)*5;
    +------------------+---------+
    | SIN(PI()/4)      | (4+1)*5 |
    +------------------+---------+
    | 0.70710678118655 |      25 |
    +------------------+---------+
    1 row in set (0.02 sec)
```
可以在一行中写入一条语句并以分号结尾，也可以把两条语句写到一起。
```sql
    mysql> SELECT VERSION(); SELECT NOW();
    +-----------+
    | VERSION() |
    +-----------+
    | 8.0.13    |
    +-----------+
    1 row in set (0.00 sec)
    
    +---------------------+
    | NOW()               |
    +---------------------+
    | 2018-08-24 00:56:40 |
    +---------------------+
    1 row in set (0.00 sec)
```
也可以将一条查询语句分开到多行中。MySQL是以分号作为SQL结束的标识，而并不是行尾。下面是一个多行表达式的示例：
```sql
    mysql> SELECT
        -> USER()
        -> ,
        -> CURRENT_DATE;
    +---------------+--------------+
    | USER()        | CURRENT_DATE |
    +---------------+--------------+
    | jon@localhost | 2018-08-24   |
    +---------------+--------------+
```
在上面这个例子中，当换行以后，`->`会提示你这条语句并没有结束，这是一个有价值的反馈。

在执行查询语句的过程中，如果决定了要半途终止，可以键入`\c`。
```sql
    mysql> SELECT
        -> USER()
        -> \c
    mysql>
```
当键入`\c`以后，出现新的`mysql->`提示符，意味着可以键入新的命令了。下面的提示符显示了它们出现的含义。
|提示符|含义|
|:--|:--|
|mysql>|准备好新的查询|
|->|等待多行查询的下一行|
|'>|等待下一行，并且完成前面出现的单引号|
|">|等待下一行，并且完成前面出现的双引号|
|`>|等待下一行，并且完成前面出现的反斜杠|
|/*>|等待下一行，并且完成前面出现的(/*)|

多行查询一般出现在进行单行语句查询时忘了输入结束的分号。比如输入了如下语句
```sql 
    mysql> SELECT USER()
    ->
```
当你还在怀疑为啥没有输出的时候，命令行也在等你键入后面的语句，输入一个分号可以让MySQL执行。

```sql
    mysql> SELECT USER()
        -> ;
    +---------------+
    | USER()        |
    +---------------+
    | jon@localhost |
    +---------------+
```
当你键入下面的语句时，注意`'>`提示符，它暗示你还有未结束的字符串，另外有没有看到下面语句中的错误？(`'Smith`少了右边半边括号)
```sql
    mysql> SELECT * FROM my_table WHERE name = 'Smith AND age < 30;
    '>
```

当出现这种情况下，又不能回到第一行，可以键入`\c`来结束这个错误的输入语句，这样提示符回到`mysql>`,可以执行下条语句了。

::: tip
从现在开始，多行语句将在没有辅助（->或其他）提示的情况下编写，从而更方便复制粘贴，可以自己试验一下。
:::



