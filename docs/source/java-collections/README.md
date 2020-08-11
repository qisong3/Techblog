---
title: Java容器源码解读
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - Collections
keywords:
 - Java
 - Map 
 - List
 - Set
 
---

## 引言
Java集合是Java的一大特性和优势。相对于其他语言，Java的集合提供了诸多开箱即用的集合类型和工具类，随着JDK版本的升级，
集合的性能和功能也进一步扩展。

一个合格的Java程序员必须会正确选择和使用集合，而一个优秀的Java程序员，有必要对集合的源码原理进行深入的了解，在本篇章中，
我们将通过源码的方式，介绍Java各个集合类型的原理，以及他们之间的对比选型。

## 概述
Java 集合框架主要包括两种类型的容器，一种是集合（Collection），存储一个元素集合，另一种是图（Map），存储键/值对映射。

Collection 接口又有 3 种子类型，List、Set 和 Queue，再下面是一些抽象类，最后是具体实现类，常用的有 ArrayList、LinkedList、HashSet、LinkedHashSet、HashMap、LinkedHashMap 等等。

![Collection-relation](/images/java-source/collection-relation.gif)
 集合框架是一个用来代表和操纵集合的统一架构。所有的集合框架都包含如下内容：

 - 接口：是代表集合的抽象数据类型。例如 Collection、List、Set、Map 等。之所以定义多个接口，是为了以不同的方式操作集合对象

 - 实现（类）：是集合接口的具体实现。从本质上讲，它们是可重复使用的数据结构，例如：ArrayList、LinkedList、HashSet、HashMap。

 - 算法：是实现集合接口的对象里的方法执行的一些有用的计算，例如：搜索和排序。这些算法被称为多态，那是因为相同的方法可以在相似的接口上有着不同的实现。

## 我们将从实现类入口，逐一分析集合相关代码

[深入Java源码之  JDK8——HashMap源码解读](./JDK8——HashMap源码解读)

[深入Java源码之  JDK8——ArrayList源码解读](./JDK8——ArrayList源码解读)

[深入Java源码之  JDK8——LinkedList源码解读](./JDK8——LinkedList源码解读)
