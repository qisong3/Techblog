---
title: Java中的时间处理
description:  时间处理
date: 2020-09-04
last-update: 2020-09-04
tags:
 - Java
keywords:
 - Java
 - 时间处理
---

## 概述
自JDK1.0起，时间处理相关API就已经发布。不过由于设计不合理，并且没有考虑到并发，时区等，一直为人所诟病。

JDK1.1中新增了时区处理，但并发的问题继续保留了下来。为了避坑，三方库如JODA-Time给出了自己的解决方案。

核心代码被弃用，三方库风生水起，这样显然让Java社区很没有面子，JDK1.8推出了全新的日期/时间处理API，算是给出了交代。

## 早期的Java时间处理

### Date
Date类表示一个特定的时间点，精确到毫秒。Date类中的核心变量是一个格里尼治时间1970.1.1零点至今的时间戳。用这么一个变量，既要表示日期，又要表示时间，还要考虑时区，确实是有些困难。

Date类的构造函数需要传入一个长整型的时间戳，或者默认使用系统当前时间的时间戳。

```java 
    // constrctor 1 
    public Date(long date) {
        fastTime = date;
    }

    // constrctor 2
    public Date() {
        this(System.currentTimeMillis());
    }

    // consturctor 3
    public Date(int year, int month, int date, int hrs, int min) {
        this(year, month, date, hrs, min, 0);
    }
```
前两个构造函数比较常用，最后一个构造函数，就有一些坑了。虽说时间戳是从1970年开始算的，但是这里的年份确是从1900年开始算的，月份也是从0开始而不是从1开始，很不合理，JDK1.1就被弃用了。

与此同时，从Date中获取Year,Month,Day等也都被弃用了，可以说API寿命这么短暂的，也确实不多。

### SimpleDateFormat



## Java8 以后

## 其他时间处理工具
