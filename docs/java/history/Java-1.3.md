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

JNDI基于命名和目录概念，并允许应用程序通过公共接口访问多个命名和目录服务。

- 命名服务 提供一种命名对象和按名称检索对象的机制。命名服务控制了一个绑定集合，将名称和对象绑定起来。客服端通过命名服务来定位查找对象。一些知名的命名服务如COS(Common Object Services)Naming, DNS(Domain  Name System),
LDAP(Lightweight Directory Access Protocol)等
- 目录服务 一个命名服务，它允许每个绑定对象与属性关联，并提供一种通过查找对象的某些属性而不是名称来检索对象的方法。属性是对象的特征。属性和对象本身都形成了一个目录对象。目录是一组链接的目录对象。

JNDI架构如图所示

![JNDI架构图](/images/java-history/JNDI-architecture.jpg)

[JNDI summary](http://www-evasion.imag.fr/Membres/Francois.Faure/enseignement/ressources/java/jdk1.3/guide/jndi/spec/execsumm/jndiexecsumm.html)
举一个JNDI的典型应用，数据库连接的`DataSource`来说明。Java的 `javax.sqlDataSource`接口提供了使用数据库连接的标准方法。通常DataSource使用Url和一些认证字段去建立一个数据库链接。

这里以Tomcat作为J2EE服务器来说明。

在Tomcat的/conf目录中的server.xml的`GlobalNamingResources`标签中填入如下内容

```xml
<Resource
    name="SampleDS"
    auth="Container"
    type="javax.sql.DataSource"
    factory="org.apache.tomcat.dbcp.dbcp.BasicDataSourceFactory"
    username="userid"
    password="password"
    driverClassName="JDBC driver class"
    url="jdbc-url"
    maxWait="30000"
    maxActive="32"
    maxIdle="8"
    initialSize="4"
    timeBetweenEvictionRunsMillis="300000"
    minEvictableIdleTimeMillis="30000">
</Resource>
```
然后再在context.xml文件中的`Context`标签中配置如下
```xml
<ResourceLink global="SampleDS" name="SampleDS" type="javax.sql.DataSource"/>
```

现在就可以在项目中通过jndi-name引入数据库链接资源了。


## JavaSound 

JDK1.3版本中推出了裁剪，播放回放音乐和MIDI（Musical Intstrument Digital Interface）数据的强大全新的接口。这些API由高效的声音引擎支持，保证了平台高质量的音频混合和MIDI合成能力。

包括以下功能：
- 支持AIFF，AU，WAV音乐文件格式格式
- 支持MIDI Type0, MIDI Type1 1 和 Rich Music Foamat（RMF)音乐文件格式
- 支持单声道和立体声的8位和16位音频数据，采样频率从8kHZ到48kHZ
- 线性、a-律和mu-律编码数据的任何支持的音频文件格式
- MIDI可波合成和排序软件，并可访问硬件的MIDI设备
- 全软件混音器，可以混合和渲染多达64个通道的数字音频和合成MIDI音乐

## Synthetic proxy classes

