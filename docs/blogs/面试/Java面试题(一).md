---
title: Java面试题(一)
date: 2020-07-17
last-update: 2020-07-13
tags:
 - Java
 - 面试
categories:
 - 面试
keywords:
 - 多态 
 - 继承 
---

## 题干
一道比较经典且易混的Java面试题，牵扯到了多个基本概念。
```java
 public class A {
        public String show(D obj){
            return ("A and D");
        }
        public String show(A obj){
            return ("A and A");
        }
    }
    public class B extends A {
        public String show(B obj){
            return ("B and B");
        }
        public String show(A obj){
            return ("B and A");
        }
    }

    public class C extends B {

    }

    public class D extends B{

    }

    public void test1(){
        A a1 = new A();
        A a2 = new B();
        B b = new B();
        C c = new C();
        D d = new D();
        
        System.out.println("1--" + a1.show(b));
        System.out.println("2--" + a1.show(c));
        System.out.println("3--" + a1.show(d));
        System.out.println("4--" + a2.show(b));
        System.out.println("5--" + a2.show(c));
        System.out.println("6--" + a2.show(d));
        System.out.println("7--" +  b.show(b));
        System.out.println("8--" +  b.show(c));
        System.out.println("9--" +  b.show(d));
        System.out.println("10--" +  c.show(b));
        System.out.println("11--" +  c.show(c));
        System.out.println("12--" +  c.show(d));

    }
```
## 思路
乍一看，此题没有什么困难的，也就是考察继承而已，想想结果，再自己尝试运行一遍，和自己想的一致吗？
首先看题目中类的定义，继承关系如下：B-->A, C-->B, D-->B 。<br>
那么C和D是否也是A的子类呢？
::: tip 
是的，因为继承是传递的`。
:::
下面看这两行语句:
```java
 A a1 = new A();
 A a2 = new B();
```
`a1`很容易理解，就是A对象的一个实例，`a2`呢，究竟是A的实例还是B的实例呢？
如果这样问有点混淆，那换一种形式，是不是就容易理解了。
```java
 Object a3 = new A();
```
a3很显然是一个A对象的示例，只不过是用Object类型声明了，关于这一块，就是基础概念中的`变量的声明和赋值`。
-[**声明**]  
-[**赋值**] 

## 知识点汇总
### 继承
### 多态
### 类型转换
## 举一反三

