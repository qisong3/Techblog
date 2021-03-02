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

#### Integer.toString 非十进制

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
4. new String(buf,31, 2) --> HEX: EA

实际上就是将低位放在buf数组最右边，然后依次向左填入高位。

#### Integer.toString 十进制
```java 

    public static String toString(int i) {
        if (i == Integer.MIN_VALUE)
            return "-2147483648";
        int size = (i < 0) ? stringSize(-i) + 1 : stringSize(i);
        char[] buf = new char[size];
        getChars(i, size, buf);
        return new String(buf, true);
    }

    // 算法核心
    static void getChars(int i, int index, char[] buf) {
        int q, r;
        int charPos = index;
        char sign = 0;

        if (i < 0) {
            sign = '-';
            i = -i;
        }

        // 大于65535，每次处理两位
        while (i >= 65536) {
            q = i / 100;
            // really: r = i - (q * 100);
            r = i - ((q << 6) + (q << 5) + (q << 2));
            i = q;
            // 取r个位
            buf [--charPos] = DigitOnes[r];
            // 取r十位
            buf [--charPos] = DigitTens[r];
        }

        // 小于65535，每次处理一位
        // assert(i <= 65536, i);
        for (;;) {
            q = (i * 52429) >>> (16+3);
            r = i - ((q << 3) + (q << 1));  // r = i-(q*10) ...
            buf [--charPos] = digits [r];
            i = q;
            if (i == 0) break;
        }
        if (sign != 0) {
            buf [--charPos] = sign;
        }
    }
```
举个例子说明整个算法运行流程  i = 98765:
1. 大于65535时，每两位处理一次
  
- 98765 --> q = 987 , r = 65, i = 987 
- buf[4] --> DigitOnes[65] = 6
- buf[3] --> DigitOnes[65] = 5
```java 
  final static char [] DigitTens = {
        '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
        '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
        '2', '2', '2', '2', '2', '2', '2', '2', '2', '2',
        '3', '3', '3', '3', '3', '3', '3', '3', '3', '3',
        '4', '4', '4', '4', '4', '4', '4', '4', '4', '4',
        '5', '5', '5', '5', '5', '5', '5', '5', '5', '5',
        '6', '6', '6', '6', '6', '6', '6', '6', '6', '6',
        '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',
        '8', '8', '8', '8', '8', '8', '8', '8', '8', '8',
        '9', '9', '9', '9', '9', '9', '9', '9', '9', '9',
        } ;

    final static char [] DigitOnes = {
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        } ;
```  
2. 小于65535时，每一位处理一次，举例说明 i = 987
- q = (i * 52429) >>> (16+3) --> q = i * 0.1 = 98 
- r = 987 - 980 = 7
- buf[2] = 7, i = 98

3. 按照1和2的推理，最终buf的内存结构为buf[5] = {'9','8','7','6','5'} --> String: 98765

有几个需要注意的点：

1. DigitTens 和 DigitOnes是便于处理两位数的码表。数字响应位置的char字符
2. r = i - ((q << 6) + (q << 5) + (q << 2)) --> i - ( q * 64 + q * 32 + q * 4)  位移比乘除高效
3. (i * 52429) >>> (16+3) -->  i * 52429 / 524288 --> i * 0.10000038146972656 --> i / 10
#### Integer.parseInt

```java
    public static int parseInt(String s, int radix)
                throws NumberFormatException
    {
        /*
         * WARNING: This method may be invoked early during VM initialization
         * before IntegerCache is initialized. Care must be taken to not use
         * the valueOf method.
         */

        // 特判
        if (s == null) {
            throw new NumberFormatException("null");
        }

        if (radix < Character.MIN_RADIX) {
            throw new NumberFormatException("radix " + radix +
                                            " less than Character.MIN_RADIX");
        }

        if (radix > Character.MAX_RADIX) {
            throw new NumberFormatException("radix " + radix +
                                            " greater than Character.MAX_RADIX");
        }

        int result = 0;
        boolean negative = false;
        int i = 0, len = s.length();
        int limit = -Integer.MAX_VALUE;
        int multmin;
        int digit;

       
        if (len > 0) {
            
            char firstChar = s.charAt(0);
            if (firstChar < '0') { 
                // 判断数字字符串的有效性
                // Possible leading "+" or "-"
                if (firstChar == '-') {
                    negative = true;
                    limit = Integer.MIN_VALUE;
                } else if (firstChar != '+')
                    throw NumberFormatException.forInputString(s);

                if (len == 1) // Cannot have lone "+" or "-"
                    throw NumberFormatException.forInputString(s);
                i++;
            }
            multmin = limit / radix;
            while (i < len) {
                // Accumulating negatively avoids surprises near MAX_VALUE
                digit = Character.digit(s.charAt(i++),radix);
                // 
                if (digit < 0) {
                    throw NumberFormatException.forInputString(s);
                }
                // 越界判断
                if (result < multmin) {
                    throw NumberFormatException.forInputString(s);
                }
                // 越界判断
                result *= radix;
                if (result < limit + digit) {
                    throw NumberFormatException.forInputString(s);
                }
                // 负向累加
                result -= digit;
            }
        } else {
            throw NumberFormatException.forInputString(s);
        }
        return negative ? result : -result;
    } 
```

这里还是举例说明执行步骤， s = 85A4 , radix = 16

1. limit = -2147483647 multmin = -134217727 
2. i = 0 --> digit = 8, result = -8
3. i = 1 --> digit = 5, result = -133
4. i = 2 --> digit = 14, result = -2142
5. i = 3 --> digit = 4, result = -34276
6. 非负数 --> 34276

思路是每次取一位，乘以radix后累加，由于正数可能溢出，所以统一转换成负数处理。

### 位操作方法

#### 获取最高位

```java 
 public static int highestOneBit(int i) {
        // HD, Figure 3-1
        i |= (i >>  1);
        i |= (i >>  2);
        i |= (i >>  4);
        i |= (i >>  8);
        i |= (i >> 16);
        return i - (i >>> 1);
    }
```

算法是怎么实现的呢？我们来分析一下：
1. i |= (i >>  1); --> i 右移一位后与原数相与，前两位为1
2. i |= (i >>  2); --> 前两位为1的基础上得到前4位为1
3. i |= (i >>  4); --> 前8位为1
4. i |= (i >>  8); --> 前16位为1
5. i |= (i >>  16); -->前32位为1
6. i - (i >>> 1) --> 除最高位以外都为1
经过 1-5 的操作，即使是32位的数也能保证位移后自最高位起都为1
经过 6 无符号位移后，再使用原数相减，可以得到最高位

#### 获取最低位
```java
    public static int lowestOneBit(int i) {
        return i & -i;
    } 
```


