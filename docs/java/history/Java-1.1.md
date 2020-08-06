---
title: Java-1.1
date: 2020-07-16
last-update: 2020-07-27
keywords:
 - Java

---

## 发布
1997年2月19日，Sun发布了JDK1.1，相较于JDK1.0的初代版本，JDK1.1有了诸多新特性和改进。

## JIT编译器
Java语言运行在JVM虚拟机上。Java程序被编译成字节码以后并不能直接被操作系统识别，还是需要根据平台将字节码转换为系统可识别的指令才能执行。Java语言的运行逻辑如下:
@flowstart
javaCode=>parallel: Java Code
javac=>operation: javac
byteCode=>parallel: Byte Code
jvm=>operation: JVM
systemCode=>parallel: System Operation Code
run=>end: Run

javaCode(path1, bottom)->javac->byteCode(path1,bottom)->jvm->systemCode(path1,bottom)->run
@flowend
即先由Java程序编译为字节码，再由Java虚拟机将字节码翻译成二进制机器码后由系统运行。

翻译的方式有两种，一种是逐条指令翻译，就是取到一条虚拟机指令，找到对应系统中的指令，一条一条翻译执行。Python，Ruby等语言均采用此方式，也称为解释型编译器。

还有一种是即时编译，就是取一段字节码（通常是以方法为单位），整体翻译成机器码再执行。这也就是Just In Time Compiler (及时编译器)的工作模式。

Java语言自此以后，一直同时并存着两种编译器，配合执行字节码的翻译工作。

::: tip AOT
后来又演变出了Ahead of Time(AOT)编译器，即提前将字节码翻译成机器码，这样虚拟机的效率将与C/C++传统编译型语言性能相差无几。不过这也改变了Java``Write Once, Run Anywhere`的初衷。
因为翻译成机器码就必然需要与硬件架构和操作系统相绑定，提升效率的同时损失了灵活性。
:::

## JavaBeans
JavaBeans的原始定义如下：
A Java Bean is a reusable software component that can be manipulated visually in a builder tool.

直面翻译为，JavaBean是一个可以在构造工具中可视性修改的软件组件。

这么说有些抽象，按照官方给出的标准，JavaBean可以定义为符合下述条件的Java类：

- 支持内省，以便构建器工具能够分析bean的工作方式
- 支持定制，这样当使用应用程序构建器时，用户可以定制bean的外观和行为。
- 支持将事件作为一种简单的通信比喻，而不是用于连接bean
- 支持属性(用于定制和编程使用)
- 支持持久化，这样就可以在应用程序构建器中定制bean，然后保存其定制的状态并稍后重新加载

这么说可能还是有些抽象，官方文档中提到<br>
The Java Beans architecture is being designed to work well in a distributed world-wide-web environment.<br>
直白翻译是，Java Beans架构是为分布式的万维网环境设计的。
当时Java在万维网中流行的是Applet。Applet是在网页中嵌入Java代码，支持Java的浏览器取得代码后在本地执行。

比如定义了本地建造工具创建了一个可视化的按钮，其他的构造工具要如何识别并修改这个按钮呢？大家都遵循JavaBeans规范，这样构造工具就知道了
其中定义的属性，方法，事件等，就可以直接操作了。

随着技术的进步，Applet被后来的JSP, Servlet等一众后浪拍到了沙滩上。不过Java Beans的规范却流传了下来并逐渐引申成如下含义：

- 具有私有的属性，可通过Getter, Setter方法操作
- 具有无参构造函数
- 实现了Serializable接口
现在JavaBeans在JDBC，RMI中等都大放异彩。

## JDBC

随着应用程序规模的扩大，持久化存储就成了各种语言必须面对的问题，JDBC（The Java Database Connectivity）就是一个提供Java与各种数据库交互的桥梁。

JDBC API是用于Java编程语言与大量数据库、SQL数据库和其他表格数据源(如电子表格或平面文件)之间独立于数据库的连接的行业标准。JDBC API为基于sql的数据库访问提供了调用级API。

注意到，这是一个接口标准，各个厂商或组织需要实现这个标准才能实现Java与数据库的连接使用。如mysql-connector-java驱动就是实现了JDBC标准的官方驱动。

JDBC与数据库关系如下图所示<br>
![JDBC架构图](/images/Java-1.1/jdbc-architecture.jpg)
JDBC是一个持续升级的规范，后面的各个版本的JDK中也多有JDBC标准的修改。




