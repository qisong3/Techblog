---
title: Java简洁
date: 2020-07-12
last-update: 2020-07-27
keywords:
 - Java
tags:
 - Java
 
---

## 一 Java简介


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说到Java语言，就不得不提到与之紧密相关的三个概念，`JDK，JRE，JVM`，正是他们构成了Java语言开发运行环境。
**Java**是由Sun微系统公司原创开发的编程语言, 在1995年发布，用作Sun微系统公司的Java平台的核心组件。它从C和C++派生了许多语法，但有一个简洁的对象模型和更少的底层组件。
从成立之初的实验室项目到如今风靡全球长期占据编程语言首位的编程语言之一，Java经历了具有传奇特色的前半生。本专题将追述Java的发展史，各个Java版本的特点，展望未来。<br>

Java的口号是`"一处编写，随处运行"`，即可以运行在各个平台的Java虚拟机上，不依赖或绑定计算机硬件和操作系统，这也是Java流行的因素之一。<br>

::: tip 
Java之所以能做到口号所说的平台无关性，本质上是Java语言的运行环境实际上是Java虚拟机，Java语言是平台无关的，但是虚拟机默默为各个平台做了适配。<br>
::: 

## 二 JVM JDK JRE 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说到Java语言，就不得不提到与之紧密相关的三个概念，`JVM，JDK，JRE`，正是他们构成了Java语言开发运行环境。而这几个基本
概念也是Java基础中的基础，也容易弄混。

### JVM
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JVM全称Java Virtual Machine（Java虚拟机），是一个软件虚拟机。它是Java字节码（ByteCode）的运行环境。其他语言编译
成的符合规范的字节码也可以运行在JVM中。<br>

JVM的主要功能有：

- 加载字节码
- 验证字节码
- 运行字节码
- 提供运行时环境

JVM提供了如下基本定义：

- 内存区域
- Class文件字节码
- 寄存器集合
- 垃圾回收堆
- 严重错误等

关于JVM的详细内容，将在其他篇章里说明，此处不再赘述。
::: tip 提示
只要实现了Java虚拟机规范的都可以作为虚拟机使用，如JRockit，J9，HotSpot等，只是HotSpot作为Java官方JVM被更多人熟知。
:::

### JRE
JRE全称Java Runtime Environment（Java运行时环境）。包括Java虚拟机以及其他Java运行时所必要的类库工具。
### JDK 

JDK全称Java Development Kit（Java开发组件）。JDK是Java开发环境，包括JRE以及一些开发工具，如Java安装程序目录中的可执行程序，
jstat,jinfo,jlink等，用于开发基于Java语言的应用程序。<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JDK包括以下几个平台：

- Standard Edition Java Platform(J2SE):应用最广泛的Java，Jave Web, Android等
- Enterprise Edition Java Platform(J2EE):应用在遥控器, 传感器, 手机, 嵌入式设备, 打印机中等。
- Micro Edition Java Platform(J2ME):Java企业版，包括诸多著名组件和规范，如JSP,Servlet,Applet等。2018年被Oracle捐给了Eclipse基金会。<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相比于Java ME和Java EE，Java SE无疑是Java系列最成功的产品线。后面的文章也将围绕Java SE的发展史，逐一介绍Java各个版本的历史和特性。<br>

::: tip 提示
人们日常所所的IDE，不在上述讨论的名词范围内。知名的Java开发IDE如IDEA, Eclipse等都是开发工具，是为了更方便的开发Java程序。
:::







