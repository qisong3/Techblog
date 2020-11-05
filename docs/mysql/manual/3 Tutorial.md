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

