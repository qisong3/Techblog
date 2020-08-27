---
title: Java-1.4
date: 2020-08-18
last-update: 2020-08-18
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

2002年2月6日，JDK1.4发布，这是第一版在JCP管理下发布的版本，该版本新增以及更新了部分内容。

## Regex 正则

    正则表达式是一种基于集合中每个字符串所共享的共同特征来描述一组字符串的方法。正则表达式可用于搜索、编辑或操作文本和数据。

### 正则表达式的语法
<table class="reference"><tbody><tr><th><p>字符</p></th><th><p>说明</p></th></tr><tr><td><p>\</p></td><td><p>
将下一字符标记为特殊字符、文本、反向引用或八进制转义符。例如，"n"匹配字符"n"。"\n"匹配换行符。序列"\\\\"匹配"\\"，"\\("匹配"("。</p></td></tr><tr><td><p>^</p></td><td><p>匹配输入字符串开始的位置。如果设置了 <b>RegExp</b> 对象的 <b>Multiline</b> 属性，^ 还会与"\n"或"\r"之后的位置匹配。</p></td></tr><tr><td><p>$</p></td><td><p>匹配输入字符串结尾的位置。如果设置了 <b>RegExp</b> 对象的 <b>Multiline</b> 属性，$ 还会与"\n"或"\r"之前的位置匹配。</p></td></tr><tr><td><p>*</p></td><td><p>零次或多次匹配前面的字符或子表达式。例如，zo* 匹配"z"和"zoo"。* 等效于 {0,}。</p></td></tr><tr><td><p>+</p></td><td><p>一次或多次匹配前面的字符或子表达式。例如，"zo+"与"zo"和"zoo"匹配，但与"z"不匹配。+ 等效于 {1,}。</p></td></tr><tr><td><p>?</p></td><td><p>零次或一次匹配前面的字符或子表达式。例如，"do(es)?"匹配"do"或"does"中的"do"。? 等效于 {0,1}。</p></td></tr><tr><td><p>{<i>n</i>}</p></td><td><p><i>n </i>是非负整数。正好匹配 <i>n</i> 次。例如，"o{2}"与"Bob"中的"o"不匹配，但与"food"中的两个"o"匹配。</p></td></tr><tr><td><p>{<i>n</i>,}</p></td><td><p><i>n </i>是非负整数。至少匹配 <i>n </i>次。例如，"o{2,}"不匹配"Bob"中的"o"，而匹配"foooood"中的所有 o。"o{1,}"等效于"o+"。"o{0,}"等效于"o*"。</p></td></tr><tr><td><p>{<i>n</i>,<i>m</i>}</p></td><td><p><i>m</i> 和 <i>n</i> 是非负整数，其中 <i>n</i> &lt;= <i>m</i>。匹配至少 <i>n</i> 次，至多 <i>m</i> 次。例如，"o{1,3}"匹配"fooooood"中的头三个 o。'o{0,1}' 等效于 'o?'。注意：您不能将空格插入逗号和数字之间。</p></td></tr><tr><td><p>?</p></td><td><p>当此字符紧随任何其他限定符（*、+、?、{<i>n</i>}、{<i>n</i>,}、{<i>n</i>,<i>m</i>}）之后时，匹配模式是"非贪心的"。"非贪心的"模式匹配搜索到的、尽可能短的字符串，而默认的"贪心的"模式匹配搜索到的、尽可能长的字符串。例如，在字符串"oooo"中，"o+?"只匹配单个"o"，而"o+"匹配所有"o"。</p></td></tr><tr><td><p>.</p></td><td><p>匹配除"\r\n"之外的任何单个字符。若要匹配包括"\r\n"在内的任意字符，请使用诸如"[\s\S]"之类的模式。</p></td></tr><tr><td><p>(<i>pattern</i>)</p></td><td><p>匹配 <i>pattern</i> 并捕获该匹配的子表达式。可以使用 <b>$0…$9</b> 属性从结果"匹配"集合中检索捕获的匹配。若要匹配括号字符 ( )，请使用"\("或者"\)"。</p></td></tr><tr><td><p>(?:<i>pattern</i>)</p></td><td><p>匹配 <i>pattern</i> 但不捕获该匹配的子表达式，即它是一个非捕获匹配，不存储供以后使用的匹配。这对于用"or"字符 (|) 组合模式部件的情况很有用。例如，'industr(?:y|ies) 是比 'industry|industries' 更经济的表达式。</p></td></tr><tr><td><p>(?=<i>pattern</i>)</p></td><td><p>执行正向预测先行搜索的子表达式，该表达式匹配处于匹配 <i>pattern</i> 的字符串的起始点的字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?=95|98|NT|2000)' 匹配"Windows 2000"中的"Windows"，但不匹配"Windows 3.1"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。</p></td></tr><tr><td><p>(?!<i>pattern</i>)</p></td><td><p>执行反向预测先行搜索的子表达式，该表达式匹配不处于匹配 <i>pattern</i> 的字符串的起始点的搜索字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?!95|98|NT|2000)' 匹配"Windows 3.1"中的 "Windows"，但不匹配"Windows 2000"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。</p></td></tr><tr><td><p><i>x</i>|<i>y</i></p></td><td><p>匹配 <i>x</i> 或 <i>y</i>。例如，'z|food' 匹配"z"或"food"。'(z|f)ood' 匹配"zood"或"food"。</p></td></tr><tr><td><p>[<i>xyz</i>]</p></td><td><p>字符集。匹配包含的任一字符。例如，"[abc]"匹配"plain"中的"a"。</p></td></tr><tr><td><p>[^<i>xyz</i>]</p></td><td><p>反向字符集。匹配未包含的任何字符。例如，"[^abc]"匹配"plain"中"p"，"l"，"i"，"n"。</p></td></tr><tr><td><p>[<i>a-z</i>]</p></td><td><p>字符范围。匹配指定范围内的任何字符。例如，"[a-z]"匹配"a"到"z"范围内的任何小写字母。</p></td></tr><tr><td><p>[^<i>a-z</i>]</p></td><td><p>反向范围字符。匹配不在指定的范围内的任何字符。例如，"[^a-z]"匹配任何不在"a"到"z"范围内的任何字符。</p></td></tr><tr><td><p>\b</p></td><td><p>匹配一个字边界，即字与空格间的位置。例如，"er\b"匹配"never"中的"er"，但不匹配"verb"中的"er"。</p></td></tr><tr><td><p>\B</p></td><td><p>非字边界匹配。"er\B"匹配"verb"中的"er"，但不匹配"never"中的"er"。</p></td></tr><tr><td><p>\c<i>x</i></p></td><td><p>匹配 <i>x</i> 指示的控制字符。例如，\cM 匹配 Control-M 或回车符。<i>x</i> 的值必须在 A-Z 或 a-z 之间。如果不是这样，则假定 c 就是"c"字符本身。</p></td></tr><tr><td><p>\d</p></td><td><p>数字字符匹配。等效于 [0-9]。</p></td></tr><tr><td><p>\D</p></td><td><p>非数字字符匹配。等效于 [^0-9]。</p></td></tr><tr><td><p>\f</p></td><td><p>换页符匹配。等效于 \x0c 和 \cL。</p></td></tr><tr><td><p>\n</p></td><td><p>换行符匹配。等效于 \x0a 和 \cJ。</p></td></tr><tr><td><p>\r</p></td><td><p>匹配一个回车符。等效于 \x0d 和 \cM。</p></td></tr><tr><td><p>\s</p></td><td><p>匹配任何空白字符，包括空格、制表符、换页符等。与 [&nbsp;\f\n\r\t\v] 等效。</p></td></tr><tr><td><p>\S</p></td><td><p>匹配任何非空白字符。与 [^&nbsp;\f\n\r\t\v] 等效。</p></td></tr><tr><td><p>\t</p></td><td><p>制表符匹配。与 \x09 和 \cI 等效。</p></td></tr><tr><td><p>\v</p></td><td><p>垂直制表符匹配。与 \x0b 和 \cK 等效。</p></td></tr><tr><td><p>\w</p></td><td><p>匹配任何字类字符，包括下划线。与"[A-Za-z0-9_]"等效。</p></td></tr><tr><td><p>\W</p></td><td><p>与任何非单词字符匹配。与"[^A-Za-z0-9_]"等效。</p></td></tr><tr><td><p>\x<i>n</i></p></td><td><p>匹配 <i>n</i>，此处的 <i>n</i> 是一个十六进制转义码。十六进制转义码必须正好是两位数长。例如，"\x41"匹配"A"。"\x041"与"\x04"&amp;"1"等效。允许在正则表达式中使用 ASCII 代码。</p></td></tr><tr><td><p>\<i>num</i></p></td><td><p>匹配 <i>num</i>，此处的 <i>num</i> 是一个正整数。到捕获匹配的反向引用。例如，"(.)\1"匹配两个连续的相同字符。</p></td></tr><tr><td><p>\<i>n</i></p></td><td><p>标识一个八进制转义码或反向引用。如果 \<i>n</i> 前面至少有 <i>n</i> 个捕获子表达式，那么 <i>n</i> 是反向引用。否则，如果 <i>n</i> 是八进制数 (0-7)，那么 <i>n</i> 是八进制转义码。</p></td></tr><tr><td><p>\<i>nm</i></p></td><td><p>标识一个八进制转义码或反向引用。如果 \<i>nm</i> 前面至少有 <i>nm</i> 个捕获子表达式，那么 <i>nm</i> 是反向引用。如果 \<i>nm</i> 前面至少有 <i>n</i> 个捕获，则 <i>n</i> 是反向引用，后面跟有字符 <i>m</i>。如果两种前面的情况都不存在，则 \<i>nm</i> 匹配八进制值 <i>nm</i>，其中 <i>n </i>和 <i>m</i> 是八进制数字 (0-7)。</p></td></tr><tr><td><p>\<span class="parameter" sdata="paramReference">nml</span></p></td><td><p>当 <i>n</i> 是八进制数 (0-3)，<i>m</i> 和 <i>l</i> 是八进制数 (0-7) 时，匹配八进制转义码 <i>nml</i>。</p></td></tr><tr><td><p>\u<i>n</i></p></td><td><p>匹配 <i>n</i>，其中 <i>n</i> 是以四位十六进制数表示的 Unicode 字符。例如，\u00A9 匹配版权符号 (©)。</p></td></tr></tbody></table>


### Java中的正则
::: warning 注意
在其他语言中，`\\` 表示：我想要在正则表达式中插入一个普通的（字面上的）反斜杠，请不要给它任何特殊的意义。在 Java 中，`\\` 表示：我要插入一个正则表达式的反斜线，所以其后的字符具有特殊的意义。

所以，在其他的语言中（如Perl），一个反斜杠 `\` 就足以具有转义的作用，而在 Java 中正则表达式中则需要有两个反斜杠才能被解析为其他语言中的转义作用。也可以简单的理解在Java的正则表达式中，两个`\\`代表其他语言中的一个 `\`，这也就是为什么表示一位数字的正则表达式是 `\\d`，而表示一个普通的反斜杠是 `\\\\`。
:::

Java的正则表达式实现依赖于`java.util.regex`这个包来实现，主要包括三个类， Pattern, Matcher, 和PatternSyntaxException。

- Pattern 是一个正则表达式的编译形式。通过接收正则表达式来创建一个Pattern对象
- Matcher 是对输入字符串进行解释和匹配操作的引擎。
- PatternSyntaxException PatternSyntaxException对象是一个未检查的异常，它指示正则表达式模式中的语法错误。

以一个简单的例子来代入Java正则的使用
```java
import java.util.regex.Pattern;

   public class Demo1 {
    
    public static void main(String[] args){

        // 待验证字符串
        String content = "This is Chaitanya " +
                "from Beginnersbook.com.";
        // 正则表达式
        String pattern = ".*book.*";
        // 正则匹配
        boolean isMatch = Pattern.matches(pattern, content);
        System.out.println("The text contains 'book'? " + isMatch);
    }

}
```
这是一个验证字符串中是否包含`*book.`的例子。

下面来介绍`Pattern`和`Matcher`这两个核心类。

#### Pattern.compile()
Pattern有两个`compile`方法用于构建Pattern对象，其中一个无参，上面的例子已经展示过，还有一个带编译参数的方法
```java {3}
    String content = "This is a tutorial Website!";
    String patternString = ".*tuToRiAl.";
    Pattern pattern = Pattern.compile(patternString, Pattern.CASE_INSENSITIVE);
```
#### Pattern.matcher()
matcher方法用于将传入的pattern和要匹配的字符串构建一个Matcher对象
```java {4}
    String content = "This is a tutorial Website!";
    String patternString = ".*tuToRiAl.*";
    Pattern pattern = Pattern.compile(patternString, Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher(content);
```
####  Pattern.split()
split方法将文本按照一个正则分隔符分割成多个子字符串。
```java {5}
    String text = "ThisIsChaitanya.ItISMyWebsite";
    // Pattern for delimiter
	String patternString = "is";
	Pattern pattern = Pattern.compile(patternString, Pattern.CASE_INSENSITIVE);
	String[] myStrings = pattern.split(text);
```
#### Matcher.matches()
```java
    Matcher matcher = pattern.matcher(content);
    boolean isMatch = matcher.matches();
```
计算文本内容是否匹配正则表达式

#### Matcher.lookingAt()
与matches方法稿功能相似，不过是找到即可返回而不要求整个文本匹配

#### Matcher.find()
查找是否有下一个匹配正则表达式的，一般在循环中调用

#### Matcher.start() Matcher.end()
通常与find()方法一起使用标记找到的字串的起止位置
```java {1-4}
        while(matcher.find()) {
            System.out.println("Found at: "+ matcher.start()
                    +
                    " - " + matcher.end());
        }
```

## Chained Exception 链式异常
链式异常的主要目的是在程序中跨多个逻辑层传播时保留原始异常。这对于抛出异常时的调试过程非常有帮助，因为程序员可以分析异常的完整堆栈跟踪。

![异常链示例](/images/java-history/exception-chain.png)

通过将下一级的异常传入如下的方法，可以使得异常得以继续传播，直到处理异常。以一个例子说明一下。

先定义三个层次的异常类。
```java 
    public class Layer1Exception extends Exception {
    
        public Layer1Exception(String message, Throwable throwable){
            super(message, throwable);
        }
    }

    public class Layer2Exception extends Exception {
    
        public Layer2Exception(String message, Throwable throwable){
            super(message, throwable);
        }
    }

    public class Layer3Exception extends Exception {
    
        public Layer3Exception(String message, Throwable throwable){
            super( message, throwable);
        }
    }
```
再在一个调用链中依次抛出异常，并捕获上一层的异常。
```java
public class BusService {

    private static void throwLayer1Exception() throws Layer1Exception{
        throw new Layer1Exception("this is layer1 excption", null);
    }

    private static void throwLayer2Exception() throws Layer2Exception{
        try {
            throwLayer1Exception();
        }catch (Layer1Exception e){
            throw new Layer2Exception("this is layer2 exception", e);
        }
    }

    private static void throwLayer3Exception() throws Layer3Exception{
        try {
            throwLayer2Exception();
        }catch (Layer2Exception e){
            throw new Layer3Exception("this is layer3 exception", e);
        }
    }

    private static void catchAllException()  {
        try {
            throwLayer3Exception();
        }catch (Layer3Exception e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        catchAllException();
    }
}
```
输出可见，各层抛出的异常都被捕获了，这样有利于最终定位并发现问题。
```
cn.errison.feature.demo.exception.chain.Layer3Exception: this is layer3 exception
	at cn.errison.feature.demo.exception.chain.BusService.throwLayer3Exception(BusService.java:21)
	at cn.errison.feature.demo.exception.chain.BusService.catchAllException(BusService.java:27)
	at cn.errison.feature.demo.exception.chain.BusService.main(BusService.java:34)
Caused by: cn.errison.feature.demo.exception.chain.Layer2Exception: this is layer2 exception
	at cn.errison.feature.demo.exception.chain.BusService.throwLayer2Exception(BusService.java:13)
	at cn.errison.feature.demo.exception.chain.BusService.throwLayer3Exception(BusService.java:19)
	... 2 more
Caused by: cn.errison.feature.demo.exception.chain.Layer1Exception: this is layer1 excption
	at cn.errison.feature.demo.exception.chain.BusService.throwLayer1Exception(BusService.java:6)
	at cn.errison.feature.demo.exception.chain.BusService.throwLayer2Exception(BusService.java:11)
	... 3 more
```

## IPV6 Support IPV6支持
互联网协议版本4 (IPv4)长期以来一直是互联网协议(IP)的行业标准版本，用于在互联网上传输数据。由于IPV4有诸多限制，尤其是IP地址太少，IPV6逐步开始推广起来。

随着IPv6越来越受到业界的重视，Java从1.4版开始支持Linux和Solaris平台上的IPv6。1.5版起又加入了对Windows平台上的支持。

Java对IPV6的支持非常友好，对用户来说，使用IPV4或者IPV6是完全透明无感的的。当然，用户也可以通过一些选项制定究竟使用那种协议。

Java网络栈首先检查底层OS上是否支持IPv6。如果支持IPv6，它会尝试使用IPv6网络栈。更准确地说，在同时支持IPV4和IPV6网络栈的情形下，Java会优先创建IPV6 socket。

在网络栈分离的系统中要稍微复杂一些。Java运行时会创建两个sockets，一个用于IPV4通信，一个用于IPV6通信。对于TCP的client端，一旦连接建立了，网络协议就确定了，另外的socket会被关闭。

对于TCP的server端，因为无法知道下一个连接是哪个IP协议族的类型，所以两个socket都将一致维持。

对于UDP应用，在整个连接过程中，两个socket都必须保持通信。

## Java Logging API Support

日志记录是在程序执行期间将日志消息写到一个集中的地方。日志信息有助于日后找回和分析运行时的信息和异常信息。

JDK1.4开始，Java通过java.util.logging包的Logger类来提供日志相关功能。

以一个例子进行完整说明，包括构建Logger对象，日志输出控制，输出格式化以及日志级别。
```java

public class Demo1 {

    // 构建Logger对象
    private static Logger logger =
            Logger.getLogger(Demo1.class.getName());

    private static FileHandler fileHandler;


    // 格式化输出
    private static class CustomFormatter extends Formatter {
        private static final String format =
                "[%1$tF %1$tT] [%2$-4s] %3$s %n";

        public String format(LogRecord record) {
            return String.format(format,
                    record.getMillis(),
                    record.getLevel().getLocalizedName(),
                    record.getMessage());
        }
    }


    public static void main(String[] args) throws
            IOException {
        // 输出到文件
        fileHandler = new
                FileHandler(Demo1.class.getName() + ".log");
        logger.setLevel(Level.ALL);
        fileHandler.setFormatter(new CustomFormatter());
        logger.addHandler(fileHandler);
        // 日志级别
        logger.fine("Log message redirected to a file");
        logger.finer("The name of the logger is " +
                logger.getName());
        logger.finest("This is same as class name: " +
                Demo1.class.getName());
    }

}
```

## NIO
Java IO（输入/输出）用于执行读取和写入操作。Java IO是基于数据流的，即每次可以从数据流中读取或者写入一个或者多个字节，工作模式见下图。

![java-io](/images/java-history/java-io.png)

Java IO是一种阻塞IO，同一时间内，要么可以读取，要么可以写入，不能同时进行，效率较低。

JDK1.4引入了Java New IO(Java NIO),与Java IO不同，Java NIO基于缓冲区(Buffer)。数据被读入缓冲区，然后使用通道(Channel)对其进行进一步处理。Java NIO最大的优势在于它可以提供双向传输。

用一张图说明通道、缓冲区、java程序、数据源和数据接收器之间的交互。
![java-io](/images/java-history/java-nio.png)。

### Buffer
**Buffer是Java NIO构建的基石。**

Buffer是一个承载特定的原始类型的线性的，有限的容器。包括几个重要属性：
- content 存储的对象
- capacity 能承载的元素最大值，是一个非负定长数
- limit 是当前buffer刻度的元素可读写的边界，是一个非负数且不可以超过capacity
- position 是当前要读写元素的下标，不可以超过limit

Buffer是一个抽象类，针对不同的原始类型，有不同的实现类，见继承关系如下：
![java-io](/images/java-history/java-nio-buffer-classes.png)


以一个例子说明
```java
private static void buffer2String(){
        // Allocate a new non-direct byte buffer with a 50 byte capacity
        // set this to a big value to avoid BufferOverflowException
        CharBuffer buf = CharBuffer.allocate(50);

        System.out.println("before insert into buffer");
        System.out.println("capacity is " + buf.capacity());
        System.out.println("limit is " + buf.limit());
        System.out.println("position is " + buf.position() + "\n");

        // Write a string to char buffer
        buf.put("How to do in java");

        System.out.println("after insert into buffer");
        System.out.println("capacity is " + buf.capacity());
        System.out.println("limit is " + buf.limit());
        System.out.println("position is " + buf.position() + "\n");

        // Flips this buffer. The limit is set to the current position and then
        // the position is set to zero. If the mark is defined then it is
        // discarded
        buf.flip();

        // Output again
        System.out.println("after flip ");
        System.out.println("capacity is " + buf.capacity());
        System.out.println("limit is " + buf.limit());
        System.out.println("position is " + buf.position() + "\n");

        String s = buf.toString(); // a string
        System.out.println(s);

    }

```
### Channel 
Channel表示与硬件设备，文件，网络套接字或程序组件之类的实体的开放连接，该实体能够执行一个或多个不同的I/O操作（例如，读取或写入）。

```java

    public static void readWithChannel() {
        try {
            // random access a file
            RandomAccessFile aFile = new RandomAccessFile("test.txt", "r");

            // open a channel
            FileChannel inChannel = aFile.getChannel();
            long fileSize = inChannel.size();

            // create a buffer
            ByteBuffer buffer = ByteBuffer.allocate((int) fileSize);
            inChannel.read(buffer);
            buffer.flip();

            //Verify the file content
            for (int i = 0; i < fileSize; i++) {
                System.out.print((char) buffer.get());
            }

            inChannel.close();
            aFile.close();
        } catch (Exception exc) {
            System.out.println(exc);
            System.exit(1);
        }
    }

```
### Selector

Selector是一个组件，它可以检查一个或多个Java NIO通道实例，并确定哪些通道可以读取或写入。通过这种方式，一个线程可以管理多个通道，从而实现多个网络连接。

#### 创建一个Selector
```java
    Selector selector = Selector.open();  
```
#### 创建一个服务端socket
```java
    ServerSocketChannel serverSocket = ServerSocketChannel.open();  
    InetSocketAddress hostAddress = new InetSocketAddress("localhost", 8080);  
    serverSocket.bind(hostAddress);  
```
#### 使用Selector选择Channel
```java
    Set<SelectionKey> selectedKeys = selector.selectedKeys();  
    Iterator<SelectionKey> keyIterator = selectedKeys.iterator();  
    while(keyIterator.hasNext()) {    
        SelectionKey key = keyIterator.next();  
        if(key.isConnectable()) {  
            // The connection was established with a remote server.  
        } else if (key.isAcceptable()) {  
            // The connection was accepted by a ServerSocketChannel.  
        } else if (key.isWritable()) {  
            //  The channel is ready for writing  
        } else if (key.isReadable()) {  
            // The channel is ready for reading  
        }  
        keyIterator.remove();  
    }  
```
## Java Image I/O API

`javax.imageio.ImageIO`包提供了一系列方便的静态方法来执行Image IO操作。

Image IO读取一个Image文件是通过探测文件中的魔数来实现的。
```java
   public static void readImage() {
           try {
               File f = new File("D:\\images\\test.jpg");
               BufferedImage bi = ImageIO.read(f);
               System.out.println("image height " + bi.getHeight());
               System.out.println("image width " + bi.getWidth());
               System.out.println("image type " + bi.getType());
   
           } catch (Exception e) {
               e.printStackTrace();
           }
            
       }
```
写入一个文件，即可使用之前创建的对象来写入
```java
    public static void writeImage(BufferedImage image, String path){
        try {
            File f = new File(path);
            ImageIO.write(image, "png", f);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

## XML support
JDK1.4 开启了对XML文件的支持，有两种解析的方式

### DOM 
Document Object Model (DOM)是W3C组织的官方推荐。它定义了一个接口，使程序能够访问和更新XML文档的样式、结构和内容。

以一个例子来说明解析，待解析的XML文档如下：
```xml
<?xml version = "1.0"?>
<class>
    <student rollno = "393">
        <firstname>dinkar</firstname>
        <lastname>kad</lastname>
        <nickname>dinkar</nickname>
        <marks>85</marks>
    </student>

    <student rollno = "493">
        <firstname>Vaneet</firstname>
        <lastname>Gupta</lastname>
        <nickname>vinni</nickname>
        <marks>95</marks>
    </student>

    <student rollno = "593">
        <firstname>jasvir</firstname>
        <lastname>singn</lastname>
        <nickname>jazz</nickname>
        <marks>90</marks>
    </student>
</class>
```

```java
private static void readWithJDOM() {
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(DomParser.class.getClassLoader().getResourceAsStream("students.xml"));
            doc.getDocumentElement().normalize();
            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
            NodeList nList = doc.getElementsByTagName("student");
            System.out.println("----------------------------");

            for (int temp = 0; temp < nList.getLength(); temp++) {
                Node nNode = nList.item(temp);
                System.out.println("\nCurrent Element :" + nNode.getNodeName());

                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element eElement = (Element) nNode;
                    System.out.println("Student roll no : "
                            + eElement.getAttribute("rollno"));
                    System.out.println("First Name : "
                            + eElement
                            .getElementsByTagName("firstname")
                            .item(0)
                            .getTextContent());
                    System.out.println("Last Name : "
                            + eElement
                            .getElementsByTagName("lastname")
                            .item(0)
                            .getTextContent());
                    System.out.println("Nick Name : "
                            + eElement
                            .getElementsByTagName("nickname")
                            .item(0)
                            .getTextContent());
                    System.out.println("Marks : "
                            + eElement
                            .getElementsByTagName("marks")
                            .item(0)
                            .getTextContent());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

### Simple API for XML
SAX（XML Simple API）是XML文档的基于事件的解析器。SAX是XML的流接口，解析时不需要解析出DOM树，这意味着使用SAX的应用程序将按顺序接收处理元素和属性的XML文档的事件通知。每次计息从文档顶部开始，结束于根元素的关闭。

还是刚才的XML文件，这次以SAX方式解析。
```java

public class SAXParserDemo {


   public static void main(String[] args) {

      try {
         SAXParserFactory factory = SAXParserFactory.newInstance();
         SAXParser saxParser = factory.newSAXParser();
         UserHandler userhandler = new UserHandler();
         saxParser.parse(SAXParserDemo.class.getClassLoader().getResourceAsStream("students.xml"), userhandler);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }


class UserHandler extends DefaultHandler {

   boolean bFirstName = false;
   boolean bLastName = false;
   boolean bNickName = false;
   boolean bMarks = false;

   @Override
   public void startElement(
           String uri, String localName, String qName, Attributes attributes)
           throws SAXException {

      if (qName.equalsIgnoreCase("student")) {
         String rollNo = attributes.getValue("rollno");
         System.out.println("Roll No : " + rollNo);
      } else if (qName.equalsIgnoreCase("firstname")) {
         bFirstName = true;
      } else if (qName.equalsIgnoreCase("lastname")) {
         bLastName = true;
      } else if (qName.equalsIgnoreCase("nickname")) {
         bNickName = true;
      } else if (qName.equalsIgnoreCase("marks")) {
         bMarks = true;
      }
   }

   @Override
   public void endElement(String uri,
                          String localName, String qName) throws SAXException {

      if (qName.equalsIgnoreCase("student")) {
         System.out.println("End Element :" + qName);
      }
   }

   @Override
   public void characters(char ch[], int start, int length) throws SAXException {

          if (bFirstName) {
             System.out.println("First Name: " + new String(ch, start, length));
             bFirstName = false;
          } else if (bLastName) {
             System.out.println("Last Name: " + new String(ch, start, length));
             bLastName = false;
          } else if (bNickName) {
             System.out.println("Nick Name: " + new String(ch, start, length));
             bNickName = false;
          } else if (bMarks) {
             System.out.println("Marks: " + new String(ch, start, length));
             bMarks = false;
          }
       }
   }
}
```

## JCA  JCE  JSSE
Java平台非常强调安全性，包括语言安全性、密码学、公钥基础设施、身份验证、安全通信和访问控制。自JDK1.4开始，原本作为附加组件的JCA，JCE，JSSE正式加入JDK。

### Java Cryptography Architecture (JCA)
JCA是Java平台的重要组成部分，包含一个"提供者"架构和一系列的API，包括数字签名，信息摘要，证书及证书认生，加解密，密钥生成和协商，安全随机码生成等等。这些API可以让
开发者门轻松将安全性集成到应用代码中。这个架构的设计原则如下：
-  **实现的独立性** 应用不需要实现安全性算法，可以直接通过Java平台去请求安全性服务。安全性服务就是实现了提供者架构中"提供者"所实现的，在Java平台上通过标注的接口嵌入Java平台。一个应用
可以依赖多个相互独立的安全性"提供者"。
- **实现的通用性** 安全性算法提供者可以在应用间独立。应用不依赖一一个特定的提供者，一个提供者也不绑定到具体的应用中。
- **算法可扩展性** Java平台提供了一系列的广为使用的内置的安全性的服务。但是一些应用依赖于一些新兴的未实现的标准，或者一些专有服务。Java平台支持为这些为实现的服务安装定定制化提供者。

在JDK中，JCA包括两个组件：
1. 定义和提供密码学服务的框架。包括`java.security`, `javax.crypto`, `javax.crypto.spec`, and `javax.crypto.interfaces`
2. 实际的密码学服务提供者，包括 `Sun`, `SunRsaSign`, `SunJCE`
参考[JCA](https://docs.oracle.com/javase/7/docs/technotes/guides/security/crypto/CryptoSpec.html)


### Java Cryptography Extension (JCE) 
JCE是JCA的扩展，也是JCA的一个组成部分。

JCE扩展了JCA在密码学方便的范畴，包括加解，密钥生成，密钥协商，Hamc。支持的算法包括如下：
- 对称组加密，如DES，RC2,IDEA
- 对称流加密，如RC4
- 非对称加密，如RSA
- 基于密码加密，如PBE
- 密钥协商
- 消息认证，MAC
参考[JCE](https://docs.oracle.com/javase//1.5.0/docs/guide/security/jce/JCERefGuide.html)

### Java Secure Socket Extension(JSSE)
JSSE用于Java平台的安全网络传输。JSSE提供了Java版本的SSL和TSL的协议实现和框架，包括数据加解密，服务端验证，消息完整性验证，可选的客户端验证等。

开发者可以使用JSSE在服务端和客户端之间使用各种协议，包括HTTP，Telnet，FTP等进行安全通信。

参考[JSSE](https://docs.oracle.com/javase/7/docs/technotes/guides/security/jsse/JSSERefGuide.html)
