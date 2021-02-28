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

### 类定义

Integer类定义如下：
```java 
    public final class Integer extends Number implements Comparable<Integer>
```
有几点需要注意

- Integer 继承自Number类

::: tip Number类 
Number是一个抽象类，是所有数字类型(byte, double, float, int, long,  short)包装类的基类抽象类。所有继承这个类的包装类，需要实现向其他基本类型转换的实现方法。

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

- Integer是一个final类，因此Integer是不可变的不可继承的。

### 组成元素

源码中定义了一些重要的组成元素，列举如下：

- Integer类的核心要素是关联的基本类型int。
```java 
 /**
     * The value of the {@code Integer}.
     *
     * @serial
     */
 private final int value;
```

- Integer定义了在二进制下所占的位数为32，并且使用4个Byte表示:
```java

    @Native public static final int SIZE = 32;

    public static final int BYTES = SIZE / Byte.SIZE;
```

- 最大值和最小值
```java 

    @Native public static final int   MIN_VALUE = 0x80000000;

    @Native public static final int   MAX_VALUE = 0x7fffffff;
```

- Integer定义了一个重要的内部类，IntegerCache，这是一个重要的内部类，定义了Java虚拟机缓存的Integer的范围。

```java 
    private static class IntegerCache {
        // 缓存的最小值
        static final int low = -128;
        static final int high;
        // 缓存在数组中
        static final Integer cache[];

        // 用户可以通过java.lang.Integer.IntegerCache.high来设置缓存最大值，不过缓存的数组最大为Integer.MAX_VALUE
        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }
```

::: tip 小测试
考虑如下题目
```java 
        Integer i1 = Integer.valueOf(1);
        Integer i2 = 1;
        Integer i3 = new Integer(1)
        System.out.println(i1 == i2);
        System.out.println(i2 == i3);
```
第一条语句输出 true ，第二条输出false。

究其原因，i1是在-128 - 127之间，故默认找缓存了的Integer对象，二i2自动装箱，默认调用的也是`Integer.valueOf`，所以二者自然引用同一个对象。

而new Integer是新建了一个新的对象，指向一个新的内存地址，所以不可能与前面二者相同。
::: 

## 方法

### 与字符串之间的转换

字符串与数字之间的转换，是数字类的基础和重要功能。

#### Integer.toString

将一个int类型的数字按照相应的进制转换成字符串，

```java 
    public static String toString(int i, int radix) {
        // 支持2进制到36进制，其他的都使用十进制转换
        if (radix < Character.MIN_RADIX || radix > Character.MAX_RADIX)
            radix = 10;

        /* Use the faster version */
        if (radix == 10) {
            return toString(i);
        }

        // 由于Integer最小转换成2进制，并且二进制有32位，加上负号33位数组已经足够了
        char buf[] = new char[33];
        boolean negative = (i < 0);
        // 
        int charPos = 32;

        // 正数也都转换成负数处理
        // 因为abs(Integer.MIN_VALUE > Integer.MAX_VALUE)
        if (!negative) {
            i = -i;
        }
        
        // 按照进制取余
        while (i <= -radix) {
            buf[charPos--] = digits[-(i % radix)];
            i = i / radix;
        }
        buf[charPos] = digits[-i];

        if (negative) {
            buf[--charPos] = '-';
        }

        return new String(buf, charPos, (33 - charPos));
    }

```

这里我们以234的十六进制转换举例。

1. buf = new char[32]  字符数组每一位都是0
2. 234 % 16 = 10 --> char[32] = 'A' , 234 / 16 = 14
3. 14 --> char[31] = 'E' 



#### Integer.parseInt


### 位操作方法
