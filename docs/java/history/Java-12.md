---
title: Java-12
date: 20201-05-10
last-update: 2021-05-10
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2019年3月19日，JDK12发布GA版本。

## Shenandoah 垃圾回收器（实验性）

Shenandoah是一个实验性的垃圾回收算法，Shenandoah垃圾回收器还并未集成到发布版本中。She 
nandoah垃圾回收算法旨在通过并行执行回收线程和Java工作线程来降低垃圾回收的停顿时间。

使用Shenandoah算法，垃圾回收的停顿时间将不再依赖于Java堆大小而保持相对稳定。

这是一个实验性的新特性，还没有被包含在JDK的构建包中。

## Switch表达式

这是一个预览功能。

::: tip 预览功能
**预览功能**是Java语言，Java虚拟机或Java SE API的一项新功能，该功能已完全指定，完全实现但不是永久性的。 JDK功能发布中提供了该功能，以根据实际使用情况激发开发人员反馈，这可能会导致它在将来的Java SE平台中永久确定下来。
:::


Switch语句一直依赖，遵循C和C++语法规范，有如下令人诟病的地方：
- 一般需要有default控制流语句
- 默认支持fall through，即没有break则执行该选项

对于高级语言来说，易错性导致的问题逐渐大于灵活性，改动则不可避免。

对于同一个例子，给出新旧两种Switch方式的例子：
```java 
// 旧版本
int numLetters;
switch (day) {
    case MONDAY:
    case FRIDAY:
    case SUNDAY:
        numLetters = 6;
        break;
    case TUESDAY:
        numLetters = 7;
        break;
    case THURSDAY:
    case SATURDAY:
        numLetters = 8;
        break;
    case WEDNESDAY:
        numLetters = 9;
        break;
    default:
        throw new IllegalStateException("Wat: " + day);
}
```

```java 
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY                -> 7;
    case THURSDAY, SATURDAY     -> 8;
    case WEDNESDAY              -> 9;
};
```
相比较而言，新版本更简洁，也可以有效避免出错。

要采用预览功能编译，使用如下语句。
```shell script
  javac -Xlint:preview --enable-preview -source 12 src/main/java/SwitchExpressions.java
```

除此以外，可以在break语句中返回数值
```java 
int result = switch (s) {
    case "Foo": 
        break 1;
    case "Bar":
        break 2;
    default:
        System.out.println("Neither Foo nor Bar, hmmm...");
        break 0;
};
```

## instanceof的模式匹配
这也是一个预览功能，通过下面两个例子说明。

```java 
// 旧的使用instanceof的方式
if (obj instanceof String) {
    String s = (String) obj;
    // use s in your code from here
}
```

```java 
// 新的使用方式
if (obj instanceof String) {
    String s = (String) obj;
    // use s in your code from here
}
```

## JVM Constants API

在java.lang.invoke.constant新包中定义了一系列基于值的符号引用（JVMS 5.1）类型，能够描述各种可加载常数。

符号引用以纯名义形式描述了可加载常量，与类加载或可访问性上下文分开。某些类可以充当其自己的符号引用（例如String）； 对于可链接常量，定义了一系列符号引用类型（ClassDesc，MethodTypeDesc，MethodHandleDesc和DynamicConstantDesc），它们包含描述这些常量的名义信息。

对于操作类和方法的工具，此API可能会有所帮助。


## G1优化

这一特性的主要目标是改进G1垃圾回收期，以便在不活动时立即将Java堆内存返回给操作系统。为了达成这个目的，G1会在应用不活跃时或者在一个持续性的周期中检查整个Java堆的使用情况。


## 其他API特性

### NumberFormat

NumberFormat增加了以紧凑格式格式化数字的支持。 紧凑的数字格式是指数字的简短形式或易于理解的形式。 例如，在en_US语言环境中，根据NumberFormat.Style指定的样式，可以将1000格式化为“ 1K”，将1000000格式化为“ 1M”。 紧凑数字格式由LDML的紧凑数字格式规范定义。 若要获取实例，请使用NumberFormat给出的工厂方法之一来进行紧凑数字格式化。 例如：

```java 
    private static void formatNum() {
        NumberFormat fmt = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
        System.out.println(fmt.format(1000));
        fmt = NumberFormat.getCompactNumberInstance(Locale.CHINA, NumberFormat.Style.LONG);
        System.out.println(fmt.format(12457854));
    }

    // output
    // 1K
    // 1246万
```
### New API

```java 
    
    // String.transform
    private static void testTransform(){

        List<String> list1 = List.of("Java", " Python", " Go ");
        List<String> list2 = new ArrayList<>();

        list1.forEach(element ->
                list2.add(element.transform(String::strip)
                        .transform(String::toUpperCase)
                        .transform((e) -> "Hi," + e))
        );

        list2.forEach(System.out::println);
    }

    // String.indent
    private static void testIndent(){
            String result = "Java\nPython\nGo".indent(5);
            System.out.println(result);
    }

    // String.describeConstable
    private static void testDescribeConstable(){
        String name = "Java DescribeConstable";
        Optional<String> optional = name.describeConstable();
        System.out.println(optional.get());
    }

    // Files.mismatch
    private static void testFile() throws IOException {
        File file1 = new File("11");
        File file2 = new File("22");
        Files.mismatch(file1.toPath(),file2.toPath());
    }


```
 
### Unicode 11.0

JDK 12版本包含对Unicode 11.0.0的支持。 在支持Unicode 10.0.0的JDK 11发行之后，Unicode 11.0.0引入了JDK 12现在包含的以下新功能：
    
- 684个新字符
- 11个新blocks
- 7个新脚本。







　






