---
title: Java-9
date: 2020-12-28
last-update: 2020-12-28
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

Java 9 发布于 2017 年 9 月 22 日，带来了很多新特性。

## Module System 模块化系统

在软件工程中，模块化是一个重要的概念。从性能和可维护性的角度来看，创建称为模块的自治单元非常重要。这些模块提供了对其他模块隐藏实现的封装。每个模块都可以公开不同的api，这些api可以充当连接器，以便其他模块可以与它通信。

JDK 9最大的变化是Java模块系统，它是通过Jigsaw项目实现的。

模块化的产生基于诸多因素，


## jshell

对于动态语言python，Ruby等，它们支持REPL(Read-Evaluate-Print-Loop)即读取-计算-打印-循环，在命令行中进行语言交互。JDK9推出了jshell，正式开启Java的命令行交互模式。

```shell script
PS D:\> jshell
|  欢迎使用 JShell -- 版本 11.0.2
|  要大致了解该版本, 请键入: /help intro

jshell> int a = 9;
a ==> 9

jshell> a++;
$2 ==> 9

jshell> println(a);
|  错误:
|  找不到符号
|    符号:   方法 println(int)
|    位置: 类
|  println(a);
|  ^-----^

jshell> System.out.println(a);
10

jshell>
```

## Collections 集合增强
Java 9创建了工厂方法来创建不可变的List，Set，Map和Map.Entry对象。 这些实用程序方法用于创建空或非空的集合对象。

在Java 8和更早的版本中，我们可以使用集合类的实用方法，如unmodifiableXXX来创建不可变的集合对象以满足我们的需求。如果要创建不可变列表，则可以使用unmodifiableList方法创建集合。


不过,这些集合的unmodifiableXXX方法非常繁琐。为了克服这些缺点，Java 9引入了一些实用程序方法来列出、设置和映射接口，以实现相同的行为。
```sql
List<String> list = List.of("One", "Two", "Three");
Set<String> set = Set.of("One", "Two", "Three");
Map<Integer, String> map = Map.of(1, "One", 2, "Two", 3, "Three");
```
这些都是不可变的方法。不能添加、删除或更新集合中的元素。如果尝试添加、删除或更新元素，它将抛出unsupportedOperationException。


## Interface 接口增强。

Java 9在接口中引入了私有方法和私有静态方法。在Java 9及以后的版本中，一个接口可以有六种不同的类型的方法。

![java-interface-methods](/images/java-history/Java9_INterface.png))

在接口中定义的private方法和private static方法都只能在接口内部使用。

这两种方法的定义是为了完善接口可以实现的default方法。

## Streams 流增强

1. takeWhile() default method
```java
public class StreamTest {

  public static void main(String[] args) {
      List<Integer> nums = Arrays.asList(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);      
        // Java 8 way
       System.out.println("*** filter()");
       nums.stream().filter(n -> n == 5).forEach(System.out::print);      
        // Java 9 way
       System.out.println("*** takeWhile()");
       nums.stream().takeWhile(n -> == < 5).forEach(System.out::print);
		
  }
}
```
```shell script
Output:
*** takeWhile()
333
*** filter()
3333333 
```
takeWhile()和filter()类似，也是对流进行滤除，不过不同的地方是，takeWhile()遇到不符合条件的数据时，就忽略流剩下的数据。

2. dropWhile() default method
dropWhile()与takeWhile()相反，遇到符合条件的则滤除，不过也有限制，看下面两个例子：
```java 
 Stream.of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3).dropWhile(n->n==3).forEach(System.out::print);

 Stream.of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3).dropWhile(n->n==3).forEach(System.out::print);
```
```shell script
9145896366333
43339145896366333
```
可以看到，只有开头的部分符合滤除条件的才被滤除了。

3. iterate() static method
首先来看Java8 中使用iterate()的例子：
```java 
Stream.iterate(10, x -> x+1).forEach(System.out::println);
```
这个循环会一直持续下去，因为没有上限限制。

可以把这个限制增加上

```sql
Stream.iterate(10, x -> x+1).limit(6).forEach(System.out::println);
o/p:- 10 11 12 13 14 15
```
再看下面的例子：
```java 
Stream.iterate(1, x -> x+1).filter(x -> x<3).forEach(System.out::println);
```
可能认为这个例子会返回1，2两个数目，可是实际上这个程序并不会停止，为什么呢？
::: tip
因为iterate()方法返回一个无限大的流对象，而filter()则对这个流过滤。流不停止，则过滤不结束
:::

在Java9中，我们可以这么做
```java 
Stream.iterate(1, x -> x<10, x -> x+1).forEach(System.out::println);

output: 1 2 3 4 5 6 7 8 9
```
这里的iterator类似于循环，增加了条件。

4. ofNullable() static method
ofNullable方法只在流不为空时返回单个值的顺序流。这种方法帮助程序员避免向流添加空检查。

假设需要从map中获取所有非空产品，java8中需要这么做
```java 
Map<String, Integer> products = new HashMap<>(Map.of("P1", 1000, "P2", 2000, "P3", 3000, "p4", 5000, "P5", 4000));
products.put("P3", null);

// products [P1 - 1000, P2 - 2000, P3 - null, P4 - 5000, P5 - 4000]

List<Integer> nonNullProducts = products.entrySet().stream().flatMap(e -> {
        	if(e.getValue() != null) {
        		return Stream.of(e.getValue());
        	} else {
        		return Stream.empty();
        	}
        }).collect(toList());
System.out.println(nonNullProducts);

// output: [1000, 2000, 5000, 4000]
```
Java9中可以这么做。
```java
List<Integer> java9Way = products.entrySet().stream()
        		                 .flatMap(e -> Stream.ofNullable(e.getValue()))
        		                 .collect(toList());
        System.out.println(java9Way);
```
