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



### 1.2.3 History of MySQL

 
