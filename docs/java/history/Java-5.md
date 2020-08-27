---
title: Java-5
date: 2020-08-26
last-update: 2020-08-27
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---
2004年9月30日，JDK1.5发布。1.5原先还是一个内部版本，为了体现J2SE的`成熟，稳定，安全，扩展`，JDK1.5正式命名为JDK5.0。

JDK1.5是JDK的一个重要里程碑，一些重要特性被引入。

## 泛型

JDK1.5之前，新建一个String类型的数组需要这样写
```java
    List list = new ArrayList();
    list.add("hello");
    String s = (String) list.get(0)
```
这样写，每次都要强制类型转换，既繁冗，还容易出错，而且不美观。

有了泛型以后，代码可以这样写，编译器帮我们做了类型推断和检查的工作
```java 
    List<String> list = new ArrayList<String>();
    list.add("hello");
    String s = list.get(0); 
```
### 泛型类
```java 
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}

/**
 * Generic接口
 *
 */
public interface Pair<K, V> {
    public K getKey();
    public V getValue();
}
```
在Java中，使用`<>`包裹的即是泛型类型，这里的泛型T可以传入任何有效的Object对象，如Integer，Double，String等。

::: tip 默认参数
按照惯例，类型参数名称是单个大写字母。
通常使用的类型参数名列举如下

    E - Element (used extensively by the Java Collections Framework)
    K - Key
    N - Number
    T - Type
    V - Value
    S,U,V etc. - 2nd, 3rd, 4th types

:::

### 泛型方法
泛型方法是引入它们自己的类型参数的方法。这类似于声明泛型类型，但是类型参数的作用域仅限于声明它的方法。允许使用静态和非静态泛型方法以及泛型类构造函数。

泛型方法的语法包括尖括号内的类型参数列表，它出现在方法的返回类型之前。对于静态泛型方法，类型参数部分必须出现在方法的返回类型之前。

泛型类定义如下，其中定义的get,set方法都是泛型方法。
```java 
public class Pair<K, V> {

    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public K getKey()   { return key; }
    public V getValue() { return value; }
}
```
定义一个工具类，其中一个静态的泛型方法
```java 
    public class Util {
        public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
            return p1.getKey().equals(p2.getKey()) &&
                   p1.getValue().equals(p2.getValue());
        }
    }
```
完整的调用方法逻辑如下：
```java 
    Pair<Integer, String> p1 = new Pair<>(1, "apple");
    Pair<Integer, String> p2 = new Pair<>(2, "pear");
    boolean same = Util.<Integer, String>compare(p1, p2);
```
### 泛型擦除

在Java现有的继承关系中，`Integer`继承自`Number`，类似的，可否认定`Box<Integer>`对`Box<Number>`也有继承关系呢？

实际上，这两者并没有继承关系，或者说对编译器来说，这两者是相同的。因为泛型是JDK5以后引入的，为了向前兼容，支持早期非泛型的代码，Java的泛型并不彻底，或者更通俗得说，只是编译阶段的语法糖。

在编译器编译包含泛型的代码时，会做如下操作：

- 如果泛型类型参数无边界，则用其边界或Object替换泛型类型中的所有类型参数
- 如果需要，插入类型强制转换以保持类型安全
- 生成桥接方法以在扩展泛型类型中保留多态性

类型擦除确保不会为参数化类型创建新类;因此，泛型不会产生运行时开销

因此`Box<Integer>`和`Box<Number>`在编译阶段都擦除成`Box<Object>`，也就不存在继承关系。

## Enum 枚举


