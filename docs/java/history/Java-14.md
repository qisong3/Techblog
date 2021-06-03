---
title: Java-14
date: 20201-05-12
last-update: 2021-05-12
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2020年3月17日，JDK14发布GA版本，发布了较多新功能。

## JVM虚拟机相关

### ZGC
ZGC垃圾回收器支持Windows系统和macOS系统

### 逐渐废弃 ParallelScavenge + SerialOld GC 

废弃该垃圾回收组合算法，该组合算法鲜有人用，不过却需要花费大量的维护成本，故而以后不建议使用。

## 移除CMS

在JDK9时，CMS便被标记为deprecated, JDK14正式被移除。

### NUMA-Aware Memory Allocation for G1

NUMA是Non-uniform memory access的简称，即非一致性内存访问模型。对于多核计算机， 



