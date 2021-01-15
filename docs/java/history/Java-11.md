---
title: Java-11
date: 20201-01-13
last-update: 2021-01-13
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

JDK 11 已于 2018 年 9 月 25 日正式发布，JDK 11是继JDK 8之后的第二个LTS(长期支持版)版本，还将作为 Java 平台的默认支持版本，并且会提供技术支持直至 2023 年 9 月，对应的补丁和安全警告等支持将持续至 2026 年。从Java 11开始，Oracle JDK将不再免费商用。 如果需要商用，则需要购买license，不过也可以使用OpenJDK，两者功能基本一致。

## 基于嵌套的访问控制
在Java 11之前，下面这段代码行得通
```java
public class Main {
 
    public void myPublic() {
    }
 
    private void myPrivate() {
    }
 
    class Nested {
 
        public void nestedPublic() {
            myPrivate();
        }
    }
}

```

嵌套内部类可以访问类中的司有方法，不过当我们使用反射时，将会抛出IllegalStateException。
```java 
Method method = ob.getClass().getDeclaredMethod("myPrivate");
method.invoke(ob);
```
Java 11嵌套访问控制在反射中解决了这个问题。

class在反射API中引入了三个方法: getNestHost(), getNestMembers(), and isNestmateOf().

简单说来，因为Java中的类文件和内部类编译以后是两个文件，通过反射找不到内部类或接口的相关信息，这个新特性算是对反射的补充，完整的例子如下：
```java 
public class Outer {

    public void myPublic() {
        System.out.println("public method");
    }

    private void myPrivate() {
        System.out.println("private method");
    }

    class Inside {
        public void nestedPublic() {
        }
    }


    class NestedInside1 {

        class NestedInside2 {

        }
    }

    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Outer containInside = new Outer();
        Method method = containInside.getClass().getDeclaredMethod("myPrivate");
        NestedInside1 nested1 = containInside.new NestedInside1();
        System.out.println(nested1.getClass().isNestmateOf(Outer.class));
        System.out.println(nested1.getClass().getNestHost());
        Class<?>[] members = containInside.getClass().getNestMembers();
        Arrays.stream(members).forEach(System.out::println);
    }
}
```

## 标准 HTTP Client 升级

Java 11 对 Java 9 中引入并在 Java 10 中进行了更新的 Http Client API 进行了标准化，在前两个版本中进行孵化的同时，Http Client 几乎被完全重写，并且现在完全支持异步非阻塞。

新版 Java 中，Http Client 的包名由 jdk.incubator.http 改为 java.net.http，该 API 通过 CompleteableFutures 提供非阻塞请求和响应语义，可以联合使用以触发相应的动作，并且 RX Flo w 的概念也在 Java 11 中得到了实现。现在，在用户层请求发布者和响应发布者与底层套接字之间追踪数据流更容易了。这降低了复杂性，并最大程度上提高了 HTTP/1 和 HTTP/2 之间的重用的可能性。

Java 11 中的新 Http Client API，提供了对 HTTP/2 等业界前沿标准的支持，同时也向下兼容 HTTP/1.1，精简而又友好的 API 接口，与主流开源 API（如：Apache HttpClient、Jetty、OkHttp 等）类似甚至拥有更高的性能。与此同时它是 Java 在 Reactive-Stream 方面的第一个生产实践，其中广泛使用了 Java Flow API，终于让 Java 标准 HTTP 类库在扩展能力等方面，满足了现代互联网的需求，是一个难得的现代 Http/2 Client API 标准的实现，Java 工程师终于可以摆脱老旧的 HttpURLConnection 了。下面模拟 Http GET 请求并打印返回内容：

```java 
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create("http://openjdk.java.net/"))
          .build();
    client.sendAsync(request, BodyHandlers.ofString())
          .thenApply(HttpResponse::body)
          .thenAccept(System.out::println)
          .join();
```


## 删除Java EE和COBRA模块

Java11 在Java SE平台和JDK中删除了Java EE 和 CORBA。这些模块在Java9时已经被声明为deprecated。


- java.xml.ws (JAX-WS, plus the related technologies SAAJ and Web Services Metadata)
- java.xml.bind (JAXB)
- java.activation (JAF)
- java.xml.ws.annotation (Common Annotations)
- java.corba (CORBA)
- java.transaction (JTA)
- java.se.ee
- jdk.xml.ws (Tools for JAX-WS)
- jdk.xml.bind (Tools for JAXB)



## 用于 Lambda 参数的局部变量语法

Java 10中引入了局部变量推断
```java 
var str = "Java 10"; // infers String
var list = new ArrayList<String>(); // infers ArrayList<String>
var stream = list.stream(); // infers Stream<String>s
var bos = new ByteArrayOutputStream();
```
Java 11中，局部变量推断推广到了lambda表达式中
```java 
// Not allowed to mix 'var' and 'no var' in implicitly typed lambda expression
(var a, b) -> a+b

// Not allowed to mix 'var' and manifest types in explicitly typed lambda expression
(var a, int b) -> a+b   
```


## ZGC 垃圾回收器

ZGC垃圾回收器是一个实验性的，低延时的垃圾回收器，可以覆盖从很小的堆到上T的巨大的堆。ZGC同步执行所有耗时操作，停顿将不超过10ms。并且相比于G1回收器，对应用吞吐性能的影响将低于15%。


## Flight Recorder

Java Flight Recorder (JFR)是收集应用运行期间JVM信息的工具。JFR被集成到JVM中，并且随着JDK一起发布。


## Transport Layer Security (TLS) 1.3

JDK11开始正式全面支持TLS1.3。


