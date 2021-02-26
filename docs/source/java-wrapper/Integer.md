---
title: Integer
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - Wrapper
keywords:
 - Java
 - Wrapper

---


## 概述 
Integer是一个包装了基本类型int的对象类，包含了多个从int转String,String转int,以及常用方法和常量。此外Integer类中还包含关于位操作的方法。

int是Java中的整形表示，共32bit。范围从`2^-31` -  `2^31 -1`，如果只表示正整数，可以覆盖`0` - `2^32`

int作为基本类型可以完成所有的运算任务。但是作为面向对象的语言，需要使用一些容器或者引用的地方，就必须使用包装类对象。

## 构造元素

Integer类定义如下：
```java 
    public final class Integer extends Number implements Comparable<Integer>
```
有几点需要注意
- Integer 继承自Number类

::: tip Number类 
Number是一个抽象类，是所有数字类型(byte, double, float, int, long,  short)包装类的基类抽象类。所有继承这个类的包装类，需要实现向其他基本类型实现的方法。

```java 
/**
     * Returns the value of the specified number as an {@code int}.
     *
     * @return  the numeric value represented by this object after conversion
     *          to type {@code int}.
     */
    public abstract int intValue();

    /**
     * Returns the value of the specified number as a {@code long}.
     *
     * @return  the numeric value represented by this object after conversion
     *          to type {@code long}.
     */
    public abstract long longValue();

    /**
     * Returns the value of the specified number as a {@code float}.
     *
     * @return  the numeric value represented by this object after conversion
     *          to type {@code float}.
     */
    public abstract float floatValue();
    ...
```
:::
