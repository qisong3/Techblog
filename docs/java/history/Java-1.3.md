---
title: Java-1.3
date: 2020-08-13
last-update: 2020-08-13
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2000年5月8日，JDK1.3发布，该版本新增以及更新了部分内容。

## HotSpot虚拟机
JDK1.0，初代Java语言发布，当时随之一起发布的是Class VM。Class VM是一款解释型的虚拟机，也就是逐条语句解释执行，这就导致了速度缓慢，尤其是和编译型语言C/C++相比。

为了可以编译执行，虚拟机需要进行外挂JIT编译器。不过这个编译执行也是逐行编译成本地代码执行，不具有连续性，也就导致了编译器无法针对性优化。

效率不行，还得靠外挂，而且Java还背上了运行慢的共识，Sun公司显然也是挂不住面子的。

JDK1.2时，Sun在Solaris平台上发布了一款名为Exact VM（Exact Memory Management）的虚拟机，Exact VM已经有编译器和解释器混合工作的模式，也即是现在普遍虚拟机的工作模型。

不过正当Exact VM要大展拳脚时，一款更加优秀的虚拟机打断了它的进程，或者说是直接终结了它的声明，这就是HotSpot。

HosSpot虚拟机最初是Longview Technologies设计实现的，当初是为Strongtalk语言设计的，Sun看到了这个虚拟机在JIT方面的优秀表现，果断并购了该公司，从而获得了HotSpot VM。

HotSpot虚拟机同时支持支持解释器和编译器，之所以叫HotSpot(热点) VM，是因为它的热点代码探测能力可以通过执行计数器找出最具优编译价值的代码，然后通知 JIT 编译器以方法为单位进行编译。

JDK1.3以后，HotSpot称为Java默认虚拟机，直到现在(JDK14)。

## JNDI
Java Naming and  Directory Interface(Java命名和目录接口)，是一种应用程序编程接口，它为使用Java编写的应用程序提供命名服务和目录服务功能。

它被定义为独立于任何特定的目录服务实现。因此，可以用通用的方式访问各种目录——新的、正在出现的和已经部署的目录。这么说还是有些抽象，在理解这个定义之前，需要先理解命名服务和目录服务。


