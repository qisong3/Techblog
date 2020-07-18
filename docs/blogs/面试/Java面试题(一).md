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

    }
```
## 思路
乍一看，此题没有什么困难的，也就是考察继承而已，想想结果，再自己尝试运行一遍，和自己想的一致吗？
首先看题目中类的定义，继承关系如下：B-->A, C-->B, D-->B 。<br>
那么C和D是否也是A的子类呢？
::: tip 
是的，因为继承是传递的。
:::
下面看这两行语句:
```java
 A a1 = new A();
 A a2 = new B();
```
`a1`很容易理解，就是A对象的一个实例，`a2`呢，究竟是A的实例还是B的实例呢？<br>
如果这样问有点混淆，那换一种问法，是不是就容易理解了，这条语句究竟干了啥？<br>
这一条语句涉及到了三个基本概念：<br>
1. 变量声明 — 以A类型定义a2变量
2. 对象初始化 — 生成一个B对象的实例
3. 变量赋值 — 将等号右侧的实例赋值给左边的变量

容易理解的是1和2，3这个地方需要注意，两边的数据类型实际并不匹配，或者说并不完全相同，但是赋值还是成功了，反过来可以吗？
```java
 B a1 = new A();
```
如果写下这行语句，编译器是不会通过的，一正一反，为何结果不同？<br>
因为用B实例去初始化一个父类A，是upcasting，也就是向上转型，是可以的。<br>
`可以这么理解，鹅类有子类大鹅和天鹅，一只天鹅说它是个鹅，是没有问题的。
但是反过来说就有问题了，来了一只鹅，不能直接指就是天鹅，因为它也有可能是大鹅。`
::: tip
赋值操作可以向上转型，但是不能向下转型
:::
所以就清楚了a2是个A类型的变量，它拥有A类型的所有方法，因此，原题中的a1和a2实际上是一个类型的变量，因此执行结果也完全相同。
那就以a1举例，a1执行`a1.show(b),a1.show(c),a1.show(d)`，分别应该显示什么结果呢？<br>
这就是考Java的多态了。
::: tip
多态是指编译时无法确定，运行时根据参数来决定，多态是同一个方法或者接口具有多个不同表现形式或形态的能力。
:::
`a1.show(d)`容易理解，a中定义了此方法，结果为D，`a1.show(b),a1.show(c)`,由于A类中并没有定义如下方法`show(B obj)`，`show(C obj)`
与上面同理，传入的c和d只能向上转不能向下转，因此只能调用方法`show(A obj)`。至此，前六个答案都确定了。<br>
再来看b对象的操作：`b.show(b)`,`b.show(c)`,`b.show(d)`。
同样的，`b.show(b)`参数匹配的原方法，答案很容易确定
`b.show(c)`,c可以向上强转为B对象或者A对象，根据参数就近匹配原则，优先转为B，故而调用`show(B obj)`方法。`b.show(d)`因为父类A中有`show(A obj)`，
孤儿继承而得可以直接调用，答案也是很清晰了。




## 知识点汇总
### 继承
### 多态
### 类型转换
## 举一反三

