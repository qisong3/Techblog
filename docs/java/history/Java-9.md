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

JSEE历经20多年的发展，包含了语言基础，JDBC，网络，XML，数学，算法等等，一个安装包就将近两百MB，可以说是臃肿不堪。作为对比，python安装包不到10MB，Ruby不到20MB(2020-12-19)。

实际上，也并不是所有程序都需要联网，或者连接数据库，但由于都集成在一个JSEE中，就显得极其臃肿，启动一次程序要十几秒甚至几十秒。对于如今越来越微服务化，功能化的程序而言，再不改革就将被时代抛弃。

Java 平台模块系统，也就是 Project Jigsaw，把模块化开发实践引入到了 Java 平台中。在引入了模块系统之后，JDK 被重新组织成 94 个模块。Java 应用可以通过新增的 jlink 工具，创建出只包含所依赖的 JDK 模块的自定义运行时镜像。这样可以极大的减少 Java 运行时环境的大小。

下面我们以一个例子说明模块化的使用。

首先建立一个项目中的模块，命名为module-one，并在程序根目录下创建module.info文件，并组织module-one程序内容。目录结构如下：
```shell script
module-one
|--src
   |--cn.errison.module.one
     |-- Module1Demo.Java
|--module.info
```

```java 
// module.info
module module.one {
        // 暴露模块
        exports cn.errison.module.one;
}

// Module1Demo.java
package cn.errison.module.one;

public class Module1Demo {

    public String getInstanceString(){
        return "im from module one";
    }

    public static int getStaticInt(){
        return 3;
    }

    public static void main(String[] args) {

    }
}

```

再创建模块2，命名module-two，目录结构如下：
```shell script
module-two
|--src
   |--cn.errison.module.two
     |-- Module2Demo.Java
|--module.info
```

```java 
// module.info
module module.two {
        // 暴露模块
        requires module.one;
}

// Module2Demo.java
package cn.errison.module.two;

import cn.errison.module.one.Module1Demo;

public class Module2Demo {

    public static void printModule1Static(){

        Module1Demo module1Demo = new Module1Demo();
        System.out.println(module1Demo.getInstanceString());
        System.out.println(Module1Demo.getStaticInt());
    }


    public static void main(String[] args) {
        printModule1Static();
    }
}
```
打印输出
```shell script
im from module one
3
```

从模块化开始，public修饰的不一定可以访问，模块间需要导入已导出的模块才能使用。控制的粒度更精细了。
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

## Collections factory 集合公场函数增强
Java 9创建了工厂方法来创建不可变的List，Set，Map和Map.Entry对象。 这些实用程序方法用于创建空或非空的集合对象。

在Java 8和更早的版本中，我们可以使用集合类的实用方法，如unmodifiableXXX来创建不可变的集合对象以满足我们的需求。如果要创建不可变列表，则可以使用unmodifiableList方法创建集合。


不过,这些集合的unmodifiableXXX方法非常繁琐。为了克服这些缺点，Java 9引入了一些实用程序方法来列出、设置和映射接口，以实现相同的行为。
```sql
List<String> list = List.of("One", "Two", "Three");
Set<String> set = Set.of("One", "Two", "Three");
Map<Integer, String> map = Map.of(1, "One", 2, "Two", 3, "Three");
```
这些都是不可变的方法。不能添加、删除或更新集合中的元素。如果尝试添加、删除或更新元素，它将抛出unsupportedOperationException。



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

## New HTTP Client 新的HTTP客户端

Java9发布了新的HTTP连接客户端，用以替换旧的HttpURLConnection，不过目前还处在孵化接断，位于 jdk.incubator.http包中。

新的客户端支持HTTP/2和websocket，性能上媲美Apache HttpClient, Netty 和 Jetty。

```java 
HttpRequest request = HttpRequest.newBuilder()
  .uri(new URI("https://postman-echo.com/get"))
  .GET()
  .build();

HttpResponse<String> response = HttpClient.newHttpClient()
  .send(request, HttpResponse.BodyHandler.asString());
```

## Process API 进程API

ProcessHandle标识并提供对本机进程的控制。可以监视每个进程的活动情况、列出它的子进程、获取有关该进程的信息或销毁它。相比之下，流程实例由当前流程启动，并提供对流程输入、输出和错误流的访问。
```java 

    public static void printInfo(ProcessHandle handle) {

        // Get the process ID
        long pid = handle.getPid();
        // Is the process still running
        boolean isAlive = handle.isAlive();
        // Get other process info
        ProcessHandle.Info info = handle.info();
        String command = info.command().orElse("");
        String[] args = info.arguments()
                            .orElse(new String[]{});
        String commandLine = info.commandLine().orElse("");
        ZonedDateTime startTime = info.startInstant()
                             .orElse(Instant.now())
                             .atZone(ZoneId.systemDefault());
        Duration duration = info.totalCpuDuration()
                                .orElse(Duration.ZERO);
        String owner = info.user().orElse("Unknown");
        long childrenCount = handle.children().count();
        // Print the process details
        System.out.printf("PID: %d%n", pid);        
        System.out.printf("IsAlive: %b%n", isAlive);
        System.out.printf("Command: %s%n", command);
        System.out.printf("Arguments: %s%n", Arrays.toString(args));
        System.out.printf("CommandLine: %s%n", commandLine);
        System.out.printf("Start Time: %s%n", startTime);
        System.out.printf("CPU Time: %s%n", duration);
        System.out.printf("Owner: %s%n", owner);
        System.out.printf("Children Count: %d%n", childrenCount);
    }
```

## Enhancement 其他语言增强

### Interface 接口增强。

Java 9在接口中引入了私有方法和私有静态方法。在Java 9及以后的版本中，一个接口可以有六种不同的类型的方法。

![java-interface-methods](/images/java-history/Java9_INterface.png))

在接口中定义的private方法和private static方法都只能在接口内部使用。

这两种方法的定义是为了完善接口可以实现的default方法。

### Try-With-Resources
Java7 中推出了Try-With-Resources，可以在try catch中方便控制资源对象。类似如下语句：
```java 
    try(FileInputStream fis = new FileInputStream(new File("path"))){
            fis.read();
        }catch (Exception e){

    }
```

这样做的不利的一面是，资源对象一般的作用域只在try catch{}范围中(当然大多数情况下也应该控制在此作用域中)。

Java9中对此有一个额外的细化，如果资源是使用final关键字引用的，或者等同于一个final变量，则可以直接使用。

```java 
    MyAutoCloseable mac = new MyAutoCloseable();
    try (mac) {
        // do some stuff with mac
    }
     
    try (new MyAutoCloseable() { }.finalWrapper.finalCloseable) {
       // do some stuff with finalCloseable
    } catch (Exception ex) { }
```

### Diamond Operator 钻石操作符
钻石操作符是在 java 7 中引入的，可以让代码更易读，但它不能用于匿名的内部类。

在 java 9 中， 它可以与匿名的内部类一起使用，从而提高代码的可读性。
```java
// Java9 之前
public class Tester1 {
   public static void main(String[] args) {
      Handler<Integer> intHandler = new Handler<Integer>(1) {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
      intHandler.handle();
      Handler<? extends Number> intHandler1 = new Handler<Number>(2) {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
      intHandler1.handle();
      Handler<?> handler = new Handler<Object>("test") {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
      handler.handle();    
   }  
}

// Java9之后
public class Tester {
   public static void main(String[] args) {
      Handler<Integer> intHandler = new Handler<>(1) {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
      intHandler.handle();
      Handler<? extends Number> intHandler1 = new Handler<>(2) {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
      intHandler1.handle();
      Handler<?> handler = new Handler<>("test") {
         @Override
         public void handle() {
            System.out.println(content);
         }
      };
 
      handler.handle();    
   }  
}

abstract class Handler<T> {
   public T content;
 
   public Handler(T content) {
      this.content = content; 
   }
   
   abstract void handle();
}


```
### JVM 虚拟机

- Java9 开始，G1正式称为默认垃圾回收器
- 统一了日志输出接口

### @Deprecated
注解 @Deprecated 可以标记 Java API 状态，可以是以下几种：
- 使用它存在风险，可能导致错误
- 可能在未来版本中不兼容
- 可能在未来版本中删除
- 一个更好和更高效的方案已经取代它。

Java 9 中注解增加了两个新元素：since 和 forRemoval。
- since: 元素指定已注解的API元素已被弃用的版本。
- forRemoval: 元素表示注解的 API 元素在将来的版本中被删除，应该迁移 API。


