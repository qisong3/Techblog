---
title: Java-6
date: 2020-08-31
last-update: 2020-09-02
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

2006年12月11日，JDK6发布，相对于JDK5和后续的JDK7，JDK8，这个版本的改动并不算大。

## Collections 集合

### Deque  双向队列

JDK6中新增了Deque这个接口，支持在队列头和尾插入以及删除元素，以及实现Deque这个接口的集合实现类
- ArrayDeque  基于数组的高效率的双向队列
- BlockingDeque  继承了Deque和BlockingQueue两个接口的双向阻塞队列
- LinkedList  增加了对Deque的继承
- LinkedBlockingDeque 基于联表的双向阻塞队列

### Navigable* 可查询集合

- NavigableSet 在TreeSet基础上增加了查询的API，TreeSet继承此接口
- NavigableMap 在TreeMap基础上增加了查询的API,TreeMap继承此接口
- ConcurrentNavigableMap 继承了ConcurrentMap和NavigableMap接口的接口

## Reflection 反射

如下方法在编译时增加了warning警告
- getInterfaces() 
- getClasses() 
- getConstructors() 
- getMethod(String, Class...)  
- getConstructor(Class...)
- getDeclaredClasses()
- getDeclaredConstructors()
- getDeclaredMethod(String, Class...)
- getDeclaredConstructor(Class...)

```java 
public class Warning {
    void m() {
        try {
            Warning warn = new Warning();
            Class c = warn.getClass();
            Method m = c.getDeclaredMethod("m");
        } catch (NoSuchMethodException x) {
            x.printStackTrace();
        }
    }
}
```
基于此，上面这段代码编译时会爆出警告
```
$ javac Warning.java
Note: Warning.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
$ javac -Xlint:unchecked Warning.java 
Warning.java:8: warning: [unchecked] unchecked call to getDeclaredMethod(java.lang.String,java.lang.Class<?>...) as a member of the raw type java.lang.Class
            Method m = c.getDeclaredMethod("m");
                                          ^
1 warning

```

## Console 控制台
Console用于与设备的控制台终端相连接。readPassword()方法可以使用户在输入密码等敏感信息时不用显示在控制台中。

## Annotation Processor 注解处理器
在JDK5推出了Annotation以后，Annotation便大放异彩，广为使用。不过在此阶段获取注解信息，还需要在运行时通过反射的方式，效率较低且代码臃肿。

JDK6推出了Annotation Processor，在编译阶段可获取注解信息并执行相应的操作。鼎鼎大名的Lombok和Butter Knife的基本原理也源自Annotation Processor。

## Streaming API for XML(StaX)
XML流API(简称StaX)是用于读取和编写XML文档的API。在此之前，Java已经有Dom和Sax两种解析XML的方式，为何还要增加StaX呢?

Java解析XML有两种形式，一种是基于流，一种是基于事件处理。

- 基于流的是Dom解析，即先将整个XML文档缓存到内存中，再按需读写，这种方式，优势是快，劣势是内存占用比较多，尤其在内存紧张的小设备上。
- 而基于事件的处理方式Sax，需要将XML文件流和解析方法同时作为输入参数，等待解析程序的完成。这就导致了一个问题，整个过程不可控，控制权是Sax解析器的。

有鉴于此，JDK6正式推出了StaX。同样是基于事件处理，不同之处是用户可以控制整个解析过程。



