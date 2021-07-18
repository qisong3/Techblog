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

## 类文件共享

CDS(Class-Data Sharing)即类文件分享最初在JDK1.5时被引入，是为了提升JVM的启动速度并减少启动占用空间。

JVM启动平台的初始阶段，其中一个步骤是将类文件加载到内存中，如果有多个jar包并且有多个类文件，那么第一个请求的延迟就很明显了。这对于无服务架构就是一个问题，因为启动时间是关键。为了降低应用的启动时间，可以启用CDC。思路是减少于同进程使用的公用的类文件的占用空间。

可以通过以下三个步骤实现：
1. 确定要归档的类文件：使用Java命令行创建要压缩归档的文件列表，可以使用如下参数：
```shell script
$java -Xshare:off -XX:+UseAppCDS -XX:DumpLoadedClassList=hello.lst -cp hello.jar HelloWorld
```

2. 创建归档文件：使用Java命令行创建应用CDC文件：
```shell script
$java -Xshare:dump -XX:+UseAppCDS -XX:SharedClassListFile=hello.lst -XX:SharedArchiveFile=hello.jsa -cp hello.jar
```
3. 使用归档文件：
```shell script
$java -Xshare:on -XX:+UseAppCDS -XX:SharedArchiveFile=hello.jsa -cp hello.jar HelloWorld
```


## 根证书

为了促进OpenJDK并使其对社区用户更具吸引力，此功能在JDK中提供了一组默认的根证书颁发机构（CA）证书。这也意味着Oracle和Open JDK二进制文件在功能上都相同。

## 实验性的JIT编译器

这一特性使得基于Java语言的编译器Greal，可以在Linux/x64平台上使用实验性质的JIT编译器。

Greal在JDK9时首次被引入，用于替代之前使用的JIT编译器。这意味着JIT编译器再也不喝JVM虚拟机相绑定，并且可以通过JVMCI接口(Java Level JVM Complier Interface)来进行替换。

用Java编写的基于Java的即时编译器，用于将Java字节码转换为机器码。这是困惑吗?如果JVM是用Java编写的，那么您不需要JVM来运行JVM吗?可以用AOT方式编译JVM，然后在JVM it中使用JIT编译器，通过实时代码优化来增强性能。

Graal是用Java从零开始重写了的JIT编译器。之前的JIT编译器使用C++编写的。

可以使用如下JVM参数来切换到Greal
```shell script
-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler
```

## 其他新特性

### 删除javah
JDK8中javac已经增加了javah的功能，在JDK10中正式删除javah工具

### unmodifiable集合
```java 

List<String> actors = new ArrayList<>();
actors.add("Jack Nicholson");
actors.add("Marlon Brando");
System.out.println(actors); // prints [Jack Nicholson, Marlon Brando]
// New API added - Creates an UnModifiable List from a List.
List<String> copyOfActors = List.copyOf(actors);
System.out.println(copyOfActors); // prints [Jack Nicholson, Marlon Brando]
// copyOfActors.add("Robert De Niro"); Will generate an
// UnsupportedOperationException
actors.add("Robert De Niro");
System.out.println(actors);// prints [Jack Nicholson, Marlon Brando, Robert De Niro]
System.out.println(copyOfActors); // prints [Jack Nicholson, Marlon Brando]
		
String str = "";
Optional<String> name = Optional.ofNullable(str);
// New API added - is preferred option then get() method
name.orElseThrow(); // same as name.get()  

// New API added - Collectors.toUnmodifiableList
List<String> collect = actors.stream().collect(Collectors.toUnmodifiableList());
// collect.add("Tom Hanks"); // Will generate an
// UnsupportedOperationException

```
