---
title: Java-10
date: 2021-01-08
last-update: 2021-01-08
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2018年3月20日，JDK10正式发布，由于是一个小版本，并没有颠覆性的变化。

## 局部变量的类型推断

这是JDK 10中开发人员唯一能用到的新特性。它将var引入到Java中，这在其他语言(如JavaScript)中很常见。只要编译器能够推断出类型，就不再需要显式地声明局部变量的类型。

这个语法的使用限制在如下场景肿：
- 仅限于带有初始化程序的局部变量
 
- for循环的增强索引
 
- 本地在for循环中声明

```java 
 var numbers = List.of(1, 2, 3, 4, 5); // inferred value ArrayList<String>
 // Index of Enhanced For Loop
 for (var number : numbers) {
 	System.out.println(number);
 }
 // Local variable declared in a loop
 for (var i = 0; i < numbers.size(); i++) {
 	System.out.println(numbers.get(i));
 }
```



## G1优化
G1垃圾回收器在JDK9时呗设置为默认的JVM垃圾回收器，G1的设计初衷是尽量避免full gc，但是同步回收线程不能尽快释放内存，用户体验会受影响。

JDK10中将full gc改进为多线程并行处理，有效提升了GC的效率。G1的标记-清除-压缩算法也改为了并行模式， 当同步回收线程无法快速回收内存是会被触发。

## 垃圾回收器接口

JDK10提供了一个通用的Garbage Collector Interface(垃圾回收器接口)，增强了垃圾回收器的代码隔离性。

在JDK10 的代码中路径为 openjdk/src/hotspot/share/gc/，各个 GC 实现共享依赖 shared 代码，GC 包括目前默认的 G1，也有经典的 Serial、Parallel、CMS 等 GC 实现。

## 类文件分享

CDS(Class-Date Sharing)即类文件分享最初在JDK1.5时被引入，是为了提升JVM的启动速度并减少启动占用空间。

JVM启动平台的初始阶段，其中一个步骤是将类文件加载到内存中，如果有多个jar包并且有多个类文件，那么第一个请求的延迟就很明显了。这对于无服务架构就是一个问题，因为启动时间是关键。为了降低应用的启动时间，可以启用CDC。思路是减少于同进程使用的公用的类文件的占用空间。

可以通过以下三个步骤实现：
1. 决定要


