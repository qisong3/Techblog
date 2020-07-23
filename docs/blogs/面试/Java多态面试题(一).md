---
title: Java多态面试题(一)
date: 2020-07-16
last-update: 2020-07-20
tags:
 - Java
 - 面试
categories:
 - 面试
keywords:
 - 继承 
---
<!-- 这里是摘要部分 -->
## 题干
```java
 public class Demo1 {
 
     public static void hello(char a){
         System.out.println();
     }
 
     public static void hello(byte a){
         System.out.println("a from Character");
     }
 
     public static void hello(short a){
         System.out.println("a from Character");
     }
 
     public static void hello(int a){
         System.out.println("a from int");
     }
 
     public static void hello(long a){
         System.out.println("a from long");
     }
 
     public static void hello(float a){
         System.out.println("a from float");
     }
 
     public static void hello(double a){
         System.out.println("a from double");
     }
 
     public static void hello(Character a){
         System.out.println("a from Character");
     }
 
     public static void hello(Serializable a){
         System.out.println("a from Serializable");
     }
 
     public static void hello(Comparable a){
         System.out.println("a from Comparable");
     }
     
     public static void hello(char... a){
         System.out.println("a from char...");
     }

     public static void hello(String a){
         System.out.println("a from String...");
     }
 
     public static void main(String[] args) {
        
         hello('a');
     }
 }
```
## 思路
Java支持函数的重载，这也是其多态的表现形式之一，本题就是一道典型的展示多态特性的题目。<br>
当多个重载函数都可以对应满足入参类型需求时，编译器会**择优**选择最合适的函数版本。

### 基本概念
首先确认一下基本概念：
::: tip 知识点
- `char`在Java中是基本类型，占两个字节，数值范围为0~65535，是一个无符号的正整数。
- Java是以Unicode作为编码方式的。Unicode一个定长的编码标准，每个字符都是2个字节，也就是1个char类型的空间。
- `Character`是`char`类型的封装类型，`char`是`Charater的基本类型`。
:::
一个输入参数'1'，面对这么多可以选择的重载函数，想必内心也是迷茫和无助的。
不过好在'1'这个字符常量标识了自己是'char'类型，选择`hello(char a)`是无可厚非的。
当然如果这题就到此戛然而止，也就没有存在的意义了。下面开启这道题的魔幻之旅。<br>
## 题目与题解
### **数值转换**
下面注释`hello(char a)`这个方法，编译器会执行哪个函数？<br>
编译器一看，没有直接匹配参数类型的函数，只有考虑对数据类型进行转换后再尝试挑选。
怎么进行类型转换呢？向上转型还是向下转型？
::: tip 知识点
数据向上转型指将数据范围扩大，新的类型涵盖原数据类型，是安全的转型；<br>
数据向下转型是指将数据范围缩小，新的类型无法涵盖原有数据类型，是精度有损失的不安全的转型。
:::
注意，`char`是无符号整型，范围为0~65535，而byte范围为-128~+127，short为-32768~+32767，如果转型是向下转型，不安全。
因此`hello(byte a)`,和`hello(short a)`是肯定不会调用的。<br>
包含`char`完整数据范围的就只剩下，
- int(-2147483648~+2147483647)
- long(-9223372036854775808~+9223372036854775807)
- float(1.4E-45~3.4028235E38)
- double(4.9E-324~1.7976931348623157E308)。<br>
同样是安全转换，可以直接转为整型，也可以换成长整型，编译器选择了从简，`char`首先被强转为int，即在剩下的函数里，择优选用`hello(int a)`。
再注释`hello(int a)`，编译器会如何选择应该就顺理成章可以推出来了。
### **拆封箱**
如果数值型的函数都注释了，编译器怎么选呢？这时候就考察的就是基础类型的拆箱和装箱了。
Java的基础类型和封装类型对应表格如下:

|基础类型|封装类型|字节长度|默认值|
|:--:|:--:|:--:|:--:|
|bool|Boolean|未规定|false|
|byte|Byte|1|0|
|short|Short|2|0|
|char|Character|2|0|
|int|Integer|4|0|
|float|Float|8|0.0|
|double|Double|8|0.0|

从基础类型到封装类型的转换叫`封箱`，从封装类型到基础类型的转换叫`拆箱`。
各举一个例子：
```java
Integer i = new Integer(10); // 封箱
int j = i; // 拆箱
```
既然目前通过数据转型已经没有可供选择的函数了，那只能再看通过装箱能否找到。
显然`hello(Character a)`是满足装箱后数据类型匹配的需求的。再注释`hello(Character a)`呢，还能调用得到吗<br>
### **接口实现**
按理说，还有一个`hello(char... a)`是符合参数需求的，怎么也应该轮到这个函数了吧？编译器报错了！<br>
```bash
Error:(56, 9) java: 对hello的引用不明确
  cn.errison.polymorphic.Demo1 中的方法 hello(java.io.Serializable) 和 cn.errison.polymorphic.Demo1 中的方法 hello(java.lang.Comparable) 都匹配
```
但是，如果将`hello(Serializable a)`或者`hello(Comparable a)`其中一个函数注释，则编译器会选择其中的另一个。
为什么呢？因为封装类型`Character`实现了这两个接口，类定义如下
```java 
public final class Character implements java.io.Serializable, Comparable<Character> 
```
只要实现这两个接口的对象，都可以作为接收char类型的参数了。<br>
但是二者同时存在则不行，因为编译器也无法决定哪个接口更重要一点，所以只能选择报错让开发这自己处理。<br>
### **不定参数**
再把这参数类型为接口的注释以后，终于能轮到不定参数的函数了， 虽然它可以匹配，但一路下来可见其优先级有多低。<br>
::: warning  强烈建议
尽量不要使用不定参数类型作为参数！
:::
### **不匹配的类型**
再把不定参数的函数注释了，就只剩`hello(String a)`这个了，编译器报错。<br>
按理说`String`就是由`char`类型组成的，为啥不能接收`char`字符作为参数呢，或者说，为何不能由`char`强制转换为`String`类型呢？<br>
其实道理也很简单，int能强制转换为int数组吗？不可以，况且`String`对象包含的不光光是char数组，还有其他方法和字段。

## 知识点汇总

- **类型转换**
- **拆箱与封箱**
- **不定参数**
- **函数参数选择顺序**: 匹配->向上扩展->装箱拆箱->接口实现->可变参数

## 举一反三
现在传入的参数是编译期间就确定了的，如果参数是编译期间不确定，执行期间才能确定类型的呢？<br>

所有的面试题都可以在[Github](https://github.com/qisong3/Java-Review-Demo)上找到，可以持续关注。
