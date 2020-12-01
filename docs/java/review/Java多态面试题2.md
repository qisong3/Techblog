---
title: Java多态面试题2
date: 2020-07-17
last-update: 2020-07-22
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
一道比较经典且易混的Java面试题，牵扯到了多个基础概念。
```java
 public class A {

        public String show(){
            return("A from A")
        }
    }

    public class B extends A {
      
         public String show(){
            return("B from B")
         }

    }


    public void test1(){

        A a1 = new A();
        A a2 = new B();
 
        System.out.println("1--" + a1.show());
        System.out.println("2--" + a2.show());

    }
```
## 思路
乍一看，此题没有什么困难的，也就是考察继承而已，想想结果，再自己尝试运行一遍，和自己想的一致吗？<br>

### 方法重载

首先看题目中类的定义，B继承A，B中的show()方法重载覆盖了A中的show()方法。A和B中都有一个无参的`show()`方法，B类继承了A类，因此B中的`show()`将覆盖其父类的同名方法。
::: tip 知识点
子类覆盖父类的方法要满足三个条件：
- 同名
- 参数相同
- 返回结果
:::
::: warning  注意
下面的条件不构成重载条件：
- 参数名称
- 返回类型
- 抛出异常
:::

### 类型转换

厘清继承关系后看定义语句，其他语句都比较清晰，关键看这句。
```java
 A a2 = new B();
```
这条定义语句究竟做了什么？<br>
实际上这一条语句涉及到了三个基本概念：<br>
`1. 变量声明 ———— 以A类型定义a2变量`<br>
`2. 对象初始化 ———— 生成一个B对象的实例`<br>
`3. 变量赋值 ———— 将等号右侧的实例赋值给左边的变量`<br>
关键就在于3变量赋值，两边的类型实际上并不完全匹配，怎么可以赋值成功呢？<br>
原因在于B是A的子类，可以用子类给父类赋值，反之不可。
::: warning 注意
赋值操作可以向上转型，但是不能向下转型
:::
我们把上面代码中的`A`称为变量的**静态类型**（Static Type），或者叫**外观类型**（Apparent Type），后面的`B`则被称为变量的**实际类型**（Actual Type）或者叫**运行时类型**（Runtime Type）。
静态类型和实际类型在程序中都可能会发生变化，区别是静态类型的变化仅仅在使用时发生，变量本身的静态类型不会被改变，并且最终的静态类型是在编译期可知的；而实际类型变化的结果在运行期才可确定，
编译器在编译程序的时候并不知道一个对象的实际类型是什么。<br>
因此，`a2`**静态类型**是`A`，**实际类型**是`B`。
如果在A中定义一个变量`a`,在B中定义一个变量`b`,可以试验一下`a2.a`可以调用，`a2.b`则会编译失败。

### test1
```java    
System.out.println("1--" + a1.show());
System.out.println("2--" + a2.show());
```
1 的答案无可争辩，2按理说，应该是执行父类A的方法，输出`"A from A"`，输出却是`"B from B"`<br>
先前的类型推断是没有问题的，执行方法时又涉及到了另一个概念，类的`虚方法表`。
简单来说，每个类都有一个`虚方法表`，如下图所示:
![虚方法表](/images/Java面试题(二)/class_method_table.png)
::: details 虚方法表
中存放着各个方法的实际入口地址。如果某个方法在子类中没有被重写，那子类的虚方法表中的地址入口和父类相同方法的地址入口是一致的，都指向父类的实现入口。如果子类中**重写**了这个方法，子类虚方法表中的地址也会被替换为指向子类实现版本的入口地址。
:::
简单来说，`a2`执行的`show()`方法，由于子类型方法覆写了，所以调用时指向的时子类方法的地址，即B中的`show()`。<br>

### test2

下面我们对题干进行一定的扩展，具体如下：
```java 
    public class A {
 
         public String show() {
             return ("show() in A");
         }
 
         public String show(A obj) {
             return ("show(A) from A");
         }
 
         public String show(D obj) {
             return ("show(D) from A");
         }
 
     }
 
     public class B extends A {
    
         public String show() {
             return ("show() in B");
         }
    
         public String show(C obj) {
             return ("show(C) from B");
         }
     }
 
     public class C extends B {
 
     }
 
     public class D extends C {
 
     }
 
 
     public void test1() {
 
         A a1 = new A();
         A a2 = new B();
 
         System.out.println("1--" + a1.show());
         System.out.println("2--" + a2.show());
     }
 
     public void test2() {
 
         A a1 = new A();
         A a2 = new B();
         B b = new B();
         C c = new C();
         D d = new D();
 
         System.out.println("3--" + a2.show(a1));
         System.out.println("4--" + a2.show(a2));
 
         System.out.println("5--" + b.show(a1));
         System.out.println("6--" + b.show(b));
         System.out.println("7--" + b.show(c));
         System.out.println("8--" + b.show(d));
     }
```
现在看`test2`，4中应该调用`a2`**静态类型A**对应的`show(A obj)`还是**动态类型B**对应的`show(B obj)`?
::: tip 知识点
参数调用时依据传入变量的**静态类型**决定被调用的重载函数
:::
最后看5，6，7，8，根据前面的汇总，根据继承的关系，可以直接得出答案。`b.show(b)`呢？
在回答这个问题之前，我们可以回顾之前的的文章。[Java多态面试题1](Java多态面试题1.md)<br>
这就是多态择优选择匹配参数的问题，可以由读者自己思考答案。



## 知识点小结
- ##继承
- ##多态
- ##类型转换
- ##静态类型
- ##动态类型

## 举一反三
接着上面的体感，如果继续追问
```java
System.out.println("11--" +  c.show(b));
System.out.println("12--" +  c.show(c));
System.out.println("13--" +  c.show(d));

System.out.println("21--" +  (A)d.show(b));
System.out.println("22--" +  (A)d.show(c));
System.out.println("23--" +  (A)d.show(d));
```
那输出的结果会是什么？<br>
所有的面试题都可以在[Github](https://github.com/qisong3/Java-Review-Demo)上找到，可以持续关注。
