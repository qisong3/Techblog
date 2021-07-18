---
title: Java-13
date: 20201-05-12
last-update: 2021-05-12
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2019年9月17日，JDK13发布GA版本，这个版本改动相对较少。

## ZGC增强

增强ZGC垃圾回收器，以将未使用的堆内存返回给操作系统。

在JDK12中，G1垃圾回收器率先支持了这个功能，ZGC此举是增强其性能。

不过，如果-Xms == -Xmx，即最小堆内存和最大堆内存设置大小一致，则不会向系统释放未使用内存。

## Dynamic CDS Archives

扩展Application Class-data Sharing，允许在Java应用程序执行结束时动态归档类。 存档的类将包括默认基层CDS存档中不存在的所有已加载的应用程序类和库类。

## 重构Socket相关API

Socket相关API自JDK1.0便存在，使用Java和C代码共同实现，对调试和维护代码来说都是梦魇。新的实现采用原生Java语言，将更适应在用户线程模式中使用。

## Switch语句(预览)
 
在JDK12中，已经推出了新的switch语句，JDK13是在其基础上进行了一定的改进。即原先是在break语句中返回值，现在使用yield关键字替换。

```java 
// JDK12
int result = switch (s) {
    case "Foo": 
        break 1;
    case "Bar":
        break 2;
    default:
        System.out.println("Neither Foo nor Bar, hmmm...");
        break 0;
};

// JDK13
int result = switch (s) {
    case "Foo": 
        yield 1;
    case "Bar":
        yield 2;
    default:
        System.out.println("Neither Foo nor Bar, hmmm...");
        yield 0;
};
```

## 文本域

原先拼接字符串，需要多个换行和"+"，现在可以将他们包含在数据域中。相比而言要方便许多。

```java 
// Using "one-dimensional" string literals
String html = "<html>\n" +
              "    <body>\n" +
              "        <p>Hello, world</p>\n" +
              "    </body>\n" +
              "</html>\n";

//Using a "two-dimensional" block of text
String html = """
              <html>
                  <body>
                      <p>Hello, world</p>
                  </body>
              </html>
              """;
```
