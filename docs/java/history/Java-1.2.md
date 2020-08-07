---
title: Java-1.2
date: 2020-08-07
last-update: 2020-08-7
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

1998年12月8日，Java1.2重磅出炉。1.2版本有诸多革命性变化，首先JDK1.2被命名为Java2 SE,与之并行的还有Java2 ME，Java2 EE，分别对应
嵌入式版和企业版。而且在此版本中，Java发行的包和类几乎是1.1版本的三倍，大量新特性被添加到其中。

## The Collections Framework  集合框架
Java容器，是通过通过一个容器将一组对象进行存储和操作，以开箱即用的方式给开发者提供了极大的便利，使得开发者可以将更多的精力用在业务或者复杂功能的开发上去。

Java2发布的容器列举如下：
- ArrayList:实现`List`接口的基于数组的动态可伸缩的列表
- LinkedList:实现`List`接口的联表的动态可伸缩的列表
- Vector: ArrayList的加锁版本
- HashMap:实现了`Map`接口的基于Hash的集合,无锁并且支持key和value为null
- Hashtable:实现了`Map`接口的基于Hash的集合
- HashSet:实现了`Set`接口的HashMap的key集合（无序）
- TreeSet:实现了`Set`接口的基于平衡二叉树的排序集合

Java 2发布的容器功能和性能都还有一定限制，部分容器现在已经基本被弃用，但随着JDK版本的升级，集合的功能越来越丰富和强大。

## The Java Extensions Framework 扩展框架
Java扩展是指Java class文件包集合以及相关的本地代码，协助开发者拓展Java核心平台的功能。有两种引入Java扩展类库的方式
- 通过将类库安装在JDK或者JRE的目录中
- 通过下载并制定具体位置的类库

虽然两种方式的类库来源不同，但虚拟机都通过Extension ClassLoader来加载这些类库，Extension ClassLoader扩展自BootStrap ClassLoad

 
