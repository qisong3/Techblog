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
一道比较经典且易混的Java面试题，牵扯到了多个基础概念。
```java
 public class A {
        public String show(D obj){
            return ("A and D");
        }
        public String show(A obj){
            return ("A and A");
        }
        public String show(){
            return("A from A")
        }
    }
    public class B extends A {
        public String show(B obj){
            return ("B and B");
        }
        public String show(A obj){
            return ("B and A");
        }
         public String show(){
            return("B from B")
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
        
    System.out.println("1--" + a1.show(a1));
    System.out.println("2--" + a1.show(a2));
    System.out.println("3--" + a1.show(b));
    System.out.println("4--" + a1.show(c));
    System.out.println("5--" + a1.show(d));

    System.out.println("11--" + a2.show(a1));
    System.out.println("12--" + a2.show(a2));
    System.out.println("13--" + a2.show(b));
    System.out.println("14--" + a2.show(c));
    System.out.println("15--" + a2.show(d));

    }
```
## 思路
乍一看，此题没有什么困难的，也就是考察继承而已，想想结果，再自己尝试运行一遍，和自己想的一致吗？<br>

### 继承关系

首先看题目中类的定义，继承关系如下：B-->A, C-->B, D-->B 。<br>
那么C和D是否也是A的子类呢？
::: tip 
是的，因为Java中继承是传递的。
:::
A和B中都有一个无参的`show()`方法，B类继承了A类，因此B中的`show()`将覆盖其父类的同名方法。
::: tip 
子类覆盖父类的方法要满足三个条件：
- 同名
- 参数相同
- 返回结果
:::
### 类型转换

厘清继承关系后看定义语句，其他语句都比较清晰，关键看这句。
```java
 A a2 = new B();
```
这条定义语句究竟做了什么？<br>
实际上这一条语句涉及到了三个基本概念：<br>
1. 变量声明 — 以A类型定义a2变量
2. 对象初始化 — 生成一个B对象的实例
3. 变量赋值 — 将等号右侧的实例赋值给左边的变量
关键就在于3变量赋值，两边的类型实际上并不完全匹配，怎么可以赋值成功呢？<br>
原因在于B是A的子类，可以用子类给父类赋值，反之不可。
::: warning
赋值操作可以向上转型，但是不能向下转型
:::
赋值完了，`a2`究竟是A类型还是B类型的？




那就以a1举例，a1执行`a1.show(b),a1.show(c),a1.show(d)`，分别应该显示什么结果呢？<br>
这就是考Java的多态了。
::: tip
多态是指编译时无法确定，运行时根据参数来决定，多态是同一个方法或者接口具有多个不同表现形式或形态的能力。
:::
`a1.show(d)`容易理解，a中定义了此方法，结果为D，`a1.show(b),a1.show(c)`,由于A类中并没有定义如下方法`show(B obj)`，`show(C obj)`
与上面同理，传入的c和d只能向上转不能向下转，因此只能调用方法`show(A obj)`。至此，前六个答案都确定了。<br>
再来看b对象的操作：`b.show(a)`,`b.show(b)`,`b.show(c)`,`b.show(d)`。<br>
B类中和A类中同样有show(A obj)方法，根据继承覆盖原则，B中的同名同参数方法会覆盖父类A中的。<br>
同样的，`b.show(b)`参数匹配的原方法，答案很容易确定
`b.show(c)`,c可以向上强转为B对象或者A对象，根据参数就近匹配原则，优先转为B，故而调用`show(B obj)`方法。`b.show(d)`因为继承父类A的`show(A obj)`方法得以直接调用，答案也是很清晰了。

## 知识点小结
- ##继承
- ##多态
- ##类型转换

## 举一反三
接着上面的体感，如果继续追问
### 追问一
```java
System.out.println("21--" +  c.show(b));
System.out.println("22--" +  c.show(c));
System.out.println("23--" +  c.show(d));

System.out.println("31--" +  (A)d.show(b));
System.out.println("32--" +  (A)d.show(c));
System.out.println("33--" +  (A)d.show(d));
```
### 追问二

知识点已在上文中述及，示例可参考[Demo](https://github.com/qisong3/Java-Review-Demo),可以持续关注。
