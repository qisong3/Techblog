---
title: 1 General Information
date: 2020-11-03
last-update: 2020-11-03
tags:
 - MySQL
keywords:
 - MySQL
 - manual
---


MySQL™是一款快速的，多线程的，多用户的和健壮的支持结构化语言(Structured Query Language)数据库服务器。MySQL服务器用于任务关键型、高负载的生产系统，适于嵌入到大规模部署的软件中。Oracle是Oracle Corporation和/或其分支机构的注册商标。 MySQL是Oracle Corporation和/或其分支机构的商标，未经Oracle明确的书面授权，客户不得使用MySQL。 其他名称可能是其各自所有者的商标。

MySQL软件支持两个证书。 用户可以选择根据GNU通用公共许可证（http://www.fsf.org/licenses/）的条款将MySQL软件用作开放源代码产品，也可以从Oracle购买标准的商业许可证。 有关我们的许可政策的更多信息，具体定价请参见http://www.mysql.com/company/legal/licensing/）。

## 1.1 About the manual

这是MySQL数据库系统8.0到8.0.24版本的参考手册。MySQL 8.0小版本之间的差异在目前的版本号(8.0.x)中有说明。有关许可证信息，请参阅[法律声明](https://dev.mysql.com/doc/refman/8.0/en/preface.html#legalnotice)。

本手册不适用于MySQL软件的旧版本，因为MySQL 8.0和以前的版本之间有很多功能和其他差异。如果您使用的是较早版本的MySQL软件，请参阅相应的手册。例如，MySQL 5.7参考手册涵盖了5.7系列的MySQL软件发布。

由于本手册仅供参考，因此不提供关于SQL或关系数据库概念的一般说明。它也不会教你如何使用操作系统或命令行参数。

MySQL数据库软件正在不断开发中，并且参考手册也经常更新。该手册的最新版本可从https://dev.mysql.com/doc/在线以可搜索的形式获得。也有其他格式，包括可下载的HTML和PDF版本。

MySQL本身的源代码包含使用Doxygen编写的内部文档。 生成的Doxygen内容可从https://dev.mysql.com/doc/index-other.html获得。 使用第2.9.10节“生成MySQL Doxygen文档内容”中的说明，还可以从MySQL源分发本地生成此内容。

如果您对使用MySQL有疑问，请加入MySQL Community Slack，或在我们的论坛中提问； 请参阅MySQL论坛上的MySQL社区支持。 如果您对手册本身有补充或更正的建议，请发送至http://www.mysql.com/company/contact/。

## 1.2 Overview of the MySQL Database Management System

### 1.2.1 What is MySQL?

MySQL是目前最流行的开源SQL数据库管理系统，由Oracle公司开发，发布和支持。MySQL官网（http://www.mysql.com/）提供有关MySQL软件的最新信息。

- MySQL是一个数据库管理系统

数据库是数据的结构化集合。可以是任何东西，从一个简单的购物清单到一个图片库或企业网络中的大量信息。要添加、访问和处理存储在计算机数据库中的数据，需要一个数据库管理系统，比如MySQL服务器。由于计算机非常擅长处理大量数据，数据库管理系统作为独立的实用程序或作为其他应用程序的一部分，在计算中扮演着核心角色。

- MySQL是关系型数据库

关系数据库将数据存储在单独的表中，而不是将所有数据放在一个大的存储库中。数据库结构被组织到物理文件中以提高速度。具有数据库、表、视图、行和列等对象的逻辑模型提供了一种灵活的编程环境。用户可以设置规则来管理不同数据字段之间的关系，比如一对一、一对多、唯一、必需或可选等，以及不同表之间的关联。数据库强制执行这些规则，这样，在设计良好的数据库中，应用程序就不会看到不一致的、重复的、孤立的、过时的或丢失的数据。

MySQL的"SQL"代表结构化查询语言。SQL是用于访问数据库的最常见的标准化语言。根据您的编程环境，可以直接输入SQL(例如，生成报告)，将SQL语句嵌入到用另一种语言编写的代码中，或者使用一种特定于语言的API来隐藏SQL语法。

SQL由ANSI / ISO SQL标准定义。 自1986年以来，SQL标准一直在发展，并且存在多个版本。 在本手册中，“ SQL-92”是指1992年发布的标准，“ SQL：1999”是指1999年发布的标准，“ SQL：2003”是指标准的当前版本。 我们在任何时候都使用短语“ SQL标准”来表示SQL标准的当前版本。

-  MySQL是开源的

开源意味着任何人都可以使用和修改软件。任何人都可以从互联网上下载MySQL软件并使用它而不需要支付任何费用。如果您愿意，您可以学习源代码并根据您的需要修改源代码。MySQL软件使用GPL（GNU通用公共许可证），可以参照协议来确定自己可以和不可以做的内容。如果GPL协议下的版本不能满足需求，或者需要将MySQL代码嵌入到商业应用程序中，可以从我们这里购买商业许可版本。 有关更多信息，请参见[MySQL许可概述](http://www.mysql.com/company/legal/licensing/)。

- MySQL数据库服务器非常快，可靠，可扩展，并且易于使用。

如果这些就是你所需要的关于数据库的全部，那MySQL值得一试。MySQL服务器可以轻松地在桌面或笔记本电脑上运行，与其他应用程序、web服务器等一起运行，对用户来说几乎是无感的。如果将整台计算机专用于安装运行MySQL，则可以调整设置以利用所有可用的内存，CPU能力和I/O容量。 MySQL还可以扩展到联网的机器集群。

MySQL服务器最初被开发用来处理比现有解决方案快得多的大型数据库，并且已经在高可用环境中成功运行了多年。尽管还在一直的开发过程中，MySQL服务器今天提供了丰富和有用的功能集。它的连通性、速度和安全性使MySQL服务器非常适合访问Internet上的数据库。

- MySQL Server以C/S架构形式运行

MySQL数据库软件是一个客户端/服务器系统，由支持不同后端的多线程SQL Server，几个不同的客户端程序和库，管理工具以及各种应用程序编程接口（API）组成。除此之外，MySQL可以作为一个多线程的应用程序库来用在应用程序中，以便用户获得一个更小，更快，更容易管理的独立产品。

- 有大量可用的MySQL应用程序可用
MySQL服务器有一套与我们的用户密切合作开发的实用功能。您最喜欢的应用程序或语言很可能支持MySQL数据库服务器。

::: tip 
MySQL的官方发音是"My Ess Que Ell"
:::

### 1.2.2 The Main Features of MySQL

本节介绍MySQL数据库软件的一些重要特性。在大部分情况下，这些特性能覆盖MySQL的各个版本。需要查看各个版本的各自的特性，可以参考各自版本的"新特性简介"章节

#### 内部结构和可移植性

- 使用C和C++编写
- 使用各种不同的编译器进行测试
- 适用于多个平台
- 使用CMake以方便移植
- 用Purify(一个商业内存泄漏检测器)以及Valgrind(一个GPL工具)进行了测试
- 采用模块独立的多层服务器设计
- 提供事务性和非事务性存储引擎
- 索引压缩方面使用非常快的B-tree结构（MyISAM)
- 从设计上支持已于添加其他存储引擎。入座需要提供一个支持SQL接口的内部数据库，这将十分有用
- 使用基于线程的快速内存分配系统
- 使用嵌套循环，使得join查询异常快速
- 使用高度优化的类库来实现SQL方法。在每次查询初始化时几乎不需要重新分配内存
- 在C/S架构中提供单独的服务程序，在单独的应用程序中也可以以类库形式嵌入，这些盈盈程序可以在没有网络的情况下运行。

#### 数据类型
- 支持多种熟路类型， 有符号/无符号的1，2，3，4，8字节的[Integer]，[FLOAT], [DOUBLE], [CHAR], [VARCHAR], [BINARY], [VARBINARY], [TEXT], [BLOB], [DATE], [TIME], [DATETIME],[TIMESTAMP], [YEAR], [SET], [ENUM],以及OPenGIS类型数据。

- 定长和不定长字符串

#### 数据结构和方法

- 在SELECT 列表和 WHERE 条件中均支持操作符和方法

```sql
mysql> SELECT CONCAT(first_name, ' ', last_name)
    -> FROM citizen
    -> WHERE income/dependents > 10000 AND age > 30;
```
- 支持"GROUP BY"和"ORDER BY"语句，支持聚合方法((COUNT(), AVG(), STD(), SUM(), MAX(), MIN(), and GROUP_CONCAT())
- 在标准SQL上和ODBC语法上都支持LEFT OUTER JOIN  RIGHT  OUTER JOIN
- 支持标准SQL要求的table和Column可以拥有别名
- DELETE, INSERT, REPLACE, 和UPDATE方法返回方法影响到的行数，或者直接返回匹配的行数而不是设置一个标识位
- 支持MySQL数据库独加支持的SHOW方法，以现实数据库，引擎，表和索引的信息。使用标准SQL支持INFORMATION_SCHEMA数据库
- EXPLAIN方法可以协助了解优化器如何处理一个查询
- 支持关键字方法同名的table或者Column。如ABS可以是一个有效的Column名。唯一的限制是在方法调用时，不允许在方法名和"("之间有空格。
- 可以在以挑语句中涉及到不同库的不同表

#### 安全性

- 一个非常灵活和安全的权限和口令系统，并支持基于主机的验证
- 连接服务器进行口令操作时，全程进行密码算法保护

#### 可伸缩性和限制

- 支持大数据库。可以使用MySQL服务武器支持超过五千万条记录。据了解，MySQL用户有使用服务器支持超过20万个表以及500亿行记录
- 每个表格至多支持64个索引。每个索引支持1-16列。Inn哦DB表最大索引宽度是767字节或者3072字节。MyISAM表最大迟迟索引宽度1000字节。

#### 连通性

- 客户端可以使用多种协议连接MySQL服务器
    * 客户端可以在任何平台上使用TCP/IP连接
    * 在Windows操作系统上，如果服务器启动时设置了允许named_pipe参数，客户端可以通过命名管道连接服务器。如果服务器设置了shared_memory参数，可客户端可以通过--protocol=memory选项进行连接
    * 在Unix系统中，客户端可以通过Unix套接字文件进行连接
- MySQL的客户端程序可以使用多种语言编写。C编写的客户端库可以供C或者C++语言的程序使用，其他可以调用C的语言也可以使用。
- MySQL支持C, C++, Eiffel, Java, Perl, PHP, Python, Ruby, 和Tcl语言的API调用，使得客户端可以用多种语言编写。
- The Connector/ODBC(MyODBC)向使用ODBC连接的客户端程序提供MySQL支持。举例说明，可以使用微软Access连接MySQL服务器。客户端可以在Windows和Linux系统上运行，所有ODBC的源码都是可见的，所有ODBC2.5的方法均支持。
- The Connector/J 向使用Java客户端程序连接MySQL提供支持。
- MySQL Connector/NET使开发者可以轻松建立需要安全高效MySQL连接的.NET应用程序。它完全实现了ADO.NET的接口并且集成到ADO.NET感知工具中。开发人员可以使用他们选择的.NET语言来构建应用程序。MySQL Connector/NET是使用纯C#编写的。

#### 本地化

- 服务器可以用多种语言向客户端提供错误消息。
- 充分支持几种不同的字符集，包括latin1 (cp1252)、german、big5、ujis、几种Unicode字符集等等。
- 所有数据都保存在选定的字符集中。
- 排序和比较是根据默认字符集和排序规则进行的。现在支持服务器启动后动态修改字符集和排序方式。
- 服务器可以动态更改时区，各个客户机可以指定自己的时区。

::: tip ODBC
Open Database Connectivity (ODBC) 是一个支持应用程序连接到数据库的标准应用程序接口(API)。
:::

#### 客户端和工具

- MySQL包括多个客户端和实用程序。包括命令行程序[mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html)和[mysqladmin](https://dev.mysql.com/doc/refman/8.0/en/mysqladmin.html)以及可视化工具[MySQL Workbench](https://dev.mysql.com/doc/refman/8.0/en/workbench.html). 
- MySQL程序可以调用-help或-?选择获得在线帮助。

### 1.2.3 History of MySQL

我们一开始打算使用mSQL数据库系统，用我们自己的快速低级别(ISAM)例程连接到表。不过经过测试以后，我们得出结论mSQL无论从数度上还是灵活性都难以满足我们的需求。这就促成了新的连接数据库的SQL接口，孙然几乎和mSQL的接口一样。这个API设计之初就是为了可以使为mSQL编写的第三方代码可以轻易迁移到MySQL上。

MySQL的"My"是以合伙人Monty Widenius的女儿命名的.

MySQL海豚(图标)名为“Sakia",是从"给海豚命名"的竞赛中，在一大串建议列表中挑选而得的，这个名字的提交者是一名非洲开伊斯瓦蒂尼(Eswatini)源软件开发者Ambrose Twebaze。根据安布罗斯的说法，女性名字Sakila源于伊斯瓦蒂尼的当地语言SiSwati。Sakila也是坦桑尼亚阿鲁沙的一个小镇的名字，靠近安布罗斯的原籍国乌干达。

