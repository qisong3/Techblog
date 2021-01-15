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

但是在 Java 10 中，还有下面几个限制：

- 只能用于局部变量上
- 声明时必须初始化
- 不能用作方法参数
- 不能在 Lambda 表达式中使用

Java 11 与 Java 10 的不同之处在于允许开发者在 Lambda 表达式中使用 var 进行参数声明。乍一看，这一举措似乎有点多余，因为在写代码过程中可以省略 Lambda 参数的类型，并通过类型推断确定它们。但是，添加上类型定义同时使用 @Nonnull 和 @Nullable 等类型注释还是很有用的，既能保持与局部变量的一致写法，也不丢失代码简洁。

Lambda 表达式使用隐式类型定义，它形参的所有类型全部靠推断出来的。隐式类型 Lambda 表达式如下：

(x, y) -> x.process(y)

Java 10 为局部变量提供隐式定义写法如下：

```java 
var x = new Foo();
for (var x : xs) { ... }
try (var x = ...) { ... } catch ...

```
为了 Lambda 类型表达式中正式参数定义的语法与局部变量定义语法的不一致，且为了保持与其他局部变量用法上的一致性，希望能够使用关键字 var 隐式定义 Lambda 表达式的形参：
(var x, var y) -> x.process(y)
于是在 Java 11 中将局部变量和 Lambda 表达式的用法进行了统一，并且可以将注释应用于局部变量和 Lambda 表达式：

```java 
@Nonnull var x = new Foo();
(@Nonnull var x, @Nullable var y) -> x.process(y)
```
## ZGC 垃圾回收器

ZGC 即 Z Garbage Collector（垃圾收集器或垃圾回收器），这应该是 Java 11 中最为瞩目的特性，没有之一。ZGC 是一个可伸缩的、低延迟的垃圾收集器，主要为了满足如下目标进行设计：

- GC 停顿时间不超过 10ms
- 即能处理几百 MB 的小堆，也能处理几个 TB 的大堆
- 应用吞吐能力不会下降超过 15%（与 G1 回收算法相比）
- 方便在此基础上引入新的 GC 特性和利用 colord
- 针以及 Load barriers 优化奠定基础
- 当前只支持 Linux/x64 位平台

停顿时间在 10ms 以下，10ms 其实是一个很保守的数据，即便是 10ms 这个数据，也是 GC 调优几乎达不到的极值。根据 SPECjbb 2015 的基准测试，128G 的大堆下最大停顿时间才 1.68ms，远低于 10ms，和 G1 算法相比，改进非常明显。

## Flight Recorder

Java Flight Recorder (JFR)是收集应用运行期间JVM信息的工具。JFR被集成到JVM中，并且随着JDK一起发布。
Java 11 中提供一种低开销的 Java 堆分配采样方法，能够得到堆分配的 Java 对象信息，并且能够通过 JVMTI 访问堆信息。

引入这个低开销内存分析工具是为了达到如下目的：

- 足够低的开销，可以默认且一直开启
- 能通过定义好的程序接口访问
- 能够对所有堆分配区域进行采样
- 能给出正在和未被使用的 Java 对象信息

对用户来说，了解它们堆里的内存分布是非常重要的，特别是遇到生产环境中出现的高 CPU、高内存占用率的情况。目前有一些已经开源的工具，允许用户分析应用程序中的堆使用情况，比如：Java Flight Recorder、jmap、YourKit 以及 VisualVM tools.。但是这些工具都有一个明显的不足之处：无法得到对象的分配位置，headp dump 以及 heap histogram 中都没有包含对象分配的具体信息，但是这些信息对于调试内存问题至关重要，因为它能够告诉开发人员他们的代码中发生的高内存分配的确切位置，并根据实际源码来分析具体问题，这也是 Java 11 中引入这种低开销堆分配采样方法的原因。



## Transport Layer Security (TLS) 1.3

Java 11 中包含了传输层安全性（TLS）1.3 规范（RFC 8446）的实现，替换了之前版本中包含的 TLS，包括 TLS 1.2，同时还改进了其他 TLS 功能，例如 OCSP 装订扩展（RFC 6066，RFC 6961），以及会话散列和扩展主密钥扩展（RFC 7627），在安全性和性能方面也做了很多提升。

新版本中包含了 Java 安全套接字扩展（JSSE）提供 SSL，TLS 和 DTLS 协议的框架和 Java 实现。目前，JSSE API 和 JDK 实现支持 SSL 3.0，TLS 1.0，TLS 1.1，TLS 1.2，DTLS 1.0 和 DTLS 1.2。

同时 Java 11 版本中实现的 TLS 1.3，重新定义了以下新标准算法名称：

- TLS 协议版本名称：TLSv1.3
- SSLContext 算法名称：TLSv1.3
- TLS 1.3 的 TLS 密码套件名称：TLS_AES_128_GCM_SHA256，TLS_AES_256_GCM_SHA384
- 用于 X509KeyManager 的 keyType：RSASSA-PSS
- 用于 X509TrustManager 的 authType：RSASSA-PSS

还为 TLS 1.3 添加了一个新的安全属性 jdk.tls.keyLimits。当处理了特定算法的指定数据量时，触发握手后，密钥和 IV 更新以导出新密钥。还添加了一个新的系统属性 jdk.tls.server.protocols，用于在 SunJSSE 提供程序的服务器端配置默认启用的协议套件。

之前版本中使用的 KRB5 密码套件实现已从 Java 11 中删除，因为该算法已不再安全。同时注意，TLS 1.3 与以前的版本不直接兼容。

升级到 TLS 1.3 之前，需要考虑如下几个兼容性问题：

    TLS 1.3 使用半关闭策略，而 TLS 1.2 以及之前版本使用双工关闭策略，对于依赖于双工关闭策略的应用程序，升级到 TLS 1.3 时可能存在兼容性问题。
    TLS 1.3 使用预定义的签名算法进行证书身份验证，但实际场景中应用程序可能会使用不被支持的签名算法。
    TLS 1.3 再支持 DSA 签名算法，如果在服务器端配置为仅使用 DSA 证书，则无法升级到 TLS 1.3。
    TLS 1.3 支持的加密套件与 TLS 1.2 和早期版本不同，若应用程序硬编码了加密算法单元，则在升级的过程中需要修改相应代码才能升级使用 TLS 1.3。
    TLS 1.3 版本的 session 用行为及秘钥更新行为与 1.2 及之前的版本不同，若应用依赖于 TLS 协议的握手过程细节，则需要注意。



