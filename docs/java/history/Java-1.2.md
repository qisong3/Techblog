---
title: Java-1.2
date: 2020-08-07
last-update: 2020-08-7
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features
---

1998年12月8日，Java1.2重磅出炉。1.2版本有诸多革命性变化，首先JDK1.2被命名为Java2 SE,与之并行的还有Java2 ME，Java2 EE，分别对应
嵌入式版和企业版。而且在此版本中，Java发行的包和类几乎是1.1版本的三倍，大量新特性被添加到其中。

## 容器框架
Java容器，是通过通过一个容器将一组对象进行存储和操作，以开箱即用的方式给开发者提供了极大的便利，使得开发者可以将更多的精力用在业务或者复杂功能的开发上去。

Java2发布的容器列举如下：
- ArrayList:实现`List`接口的基于数组的动态可伸缩的列表
- LinkedList:实现`List`接口的联表的动态可伸缩的列表
- Vector: ArrayList的加锁版本
- HashMap:实现了`Map`接口的基于Hash的集合,无锁并且支持key和value为null
- Hashtable:实现了`Map`接口的基于Hash的集合
- HashSet:实现了`Set`接口的HashMap的key集合（无序）
- TreeSet:实现了`Set`接口的基于平衡二叉树的排序集合

Java 2发布的容器功能和性能都还有一定限制，部分容器现在已经基本被弃用，但随着JDK版本的升级，集合的功能越来越丰富和强大。

## The Java Extensions Framework
Java的ClassLoader是JRE的重要组成部分， 用于动态加载Java的Class文件到JVM中。
从JDK1.2开始到JDK8，Java的ClassLoader一直维持着三级ClassLoader:
- BootStrap ClassLoader: 它是本地二进制代码，在JVM启动时去加载本地的rt.jar。它没有任何的父类ClassLoader,因此也叫Primodial ClassLoader
- Extension ClassLoader: 它直接继承于BootStrap ClassLoader，用于加载JRE环境中lib\ext目录下的类。
- System ClassLoader:也叫Application ClassLoader，是Extension ClassLoader的子类，加载环境变量classpath中的Class文件。

Extension ClassLoader使得开发者可以更方便加载扩展类库，以便定制化地扩展Java原生功能。

## Swing
Swing 是一个用于 Java GUI 编程（图形界面设计）的工具包（类库）。Swing是纯Java代码来实现的各种桌面图形控件，不依赖于本地图形库，因此
具有良好的跨平台特性。

::: tip Swing 和 AWT
相比于Swing,AWT是更早一些的图形库。二者的区别在于，AWT使用系统的图形库来实现，而Swing则是纯Java，而且从功能上看，Swing包含了AWT所提供的所有功能，并在此基础上
进行了大幅度的扩充。<br>
由于AWT依靠本地方法实现功能，因此AWT控件称为"重量级控件"
Swing使用Java原生方法实现，不适用本地方法，因此称为"轻量级控件"
:::

可以通过一个例子直观感受以下Swing的效果。
```java
package cn.errison.feature.demo.swing;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;


public class Demo1 {

    public static void main(String[] args) {
        // 创建 JFrame 实例
        JFrame frame = new JFrame("Login Example");
        // Setting the width and height of frame
        frame.setSize(350, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        /* 创建面板，这个类似于 HTML 的 div 标签
         * 我们可以创建多个面板并在 JFrame 中指定位置
         * 面板中我们可以添加文本字段，按钮及其他组件。
         */
        JPanel panel = new JPanel();
        // 添加面板
        frame.add(panel);
        /*
         * 调用用户定义的方法并添加组件到面板
         */
        placeComponents(panel);

        // 设置界面可见
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {

        /* 布局部分我们这边不多做介绍
         * 这边设置布局为 null
         */
        panel.setLayout(null);

        // 创建 JLabel
        JLabel userLabel = new JLabel("User:");
        /* 这个方法定义了组件的位置。
         * setBounds(x, y, width, height)
         * x 和 y 指定左上角的新位置，由 width 和 height 指定新的大小。
         */
        userLabel.setBounds(10,20,80,25);
        panel.add(userLabel);

        /*
         * 创建文本域用于用户输入
         */
        JTextField userText = new JTextField(20);
        userText.setBounds(100,20,165,25);
        panel.add(userText);

        // 输入密码的文本域
        JLabel passwordLabel = new JLabel("Password:");
        passwordLabel.setBounds(10,50,80,25);
        panel.add(passwordLabel);

        /*
         *这个类似用于输入的文本域
         * 但是输入的信息会以点号代替，用于包含密码的安全性
         */
        JPasswordField passwordText = new JPasswordField(20);
        passwordText.setBounds(100,50,165,25);
        panel.add(passwordText);

        // 创建登录按钮
        JButton loginButton = new JButton("login");
        loginButton.setBounds(10, 80, 80, 25);
        panel.add(loginButton);
    }

}

```
这是这段代码Windows系统![JDBC架构图](/images/Java-history/swing-demo-windows.png)<br>
和在mac系统上![JDBC架构图](/images/Java-history/swing-demo-mac.jpg)<br>的效果图，可见显示结果基本相同。

::: tip 
值得一提的是，大名鼎鼎的编译器eclipse的界面就是使用Swing编写的。
:::

## Java IDL
Java IDL（Java Interface Language）Java接口定义语言，是一项为分布式对象提供的服务，不同平台不同语言的对象在网络上可以自由交互。

Java IDL基于Common Object Request Brokerage Architecture (CORBA) 通用对象请求代理架构。这是一个工业级的分布式对象模型。COBRA的核心特性是
IDL（a language-neutral Interface Definition Language）语言无关的接口定义语言。每种支持COBRA的语言需要实现自己的IDL映射，Java IDL就是Java
语言的实现。

为了支持与其他语言进行交互，Java IDL提供了Object Request Broker(ORB)。ORB是一个支持Java IDL应用和其他遵循COBRA协议的应用之间进行低级别通信的类库。


## 已有功能性增强

### 反射
在JDK1.2之中，Java增强了对字段，方法，构造器的访问控制。通过继承一个新的基类AccessibleObject，可以忽略默认的访问控制符来达到获取和修改私有字段的目的。

在JDK1.1中示例的基础上，增加了一个demo方法，访问私有变量。
```java 
  /**
     * demo3：通过Java反射机制，通过Java反射机制操作成员变量, set 和 get
     */
    public static void demo3() throws Exception {
        Class<?> class1 = Class.forName(PARENT_CLASS_NAME);
        Object obj = class1.newInstance();
        Field personNameField = class1.getDeclaredField("name");
        personNameField.setAccessible(true); //取消访问检查
        personNameField.set(obj, "TouchOutSide");
        System.out.println("修改属性之后得到属性变量的值：" + personNameField.get(obj));
    }
```

### JNI
JDK1.2之中，增加了类库和版本控制，本地应用管理，全局弱引用，数组操作，字符串操作，反射支持以及调用的相关API。

### Version Identification Enhancements
JDK1.2以后，JVM虚拟机运行时将严格检查Class文件版本和当前虚拟机的版本。虚拟机需要向前兼容Class文件，但即使
Class文件在前后两版本的JDK定义中没有差别，虚拟机也要拒绝加载执行。

::: tip Java version VS platform
  |major|minor|Java platform version|
  |:--:|:--:|:--:|
  |45|3|1.0|
  |46|3|1.2|
  |47|3|1.3|
  |48|0|1.4|
  |49|0|1.5|
  |50|0|1.6|
  |51|0|1.7|
  |52|0|1.8|
  |53|0|9|
  |54|0|10|
  |55|0|11|
  |56|0|12|
  |57|0|13|
  |58|0|14|
:::
### Audio Enhancements
Applet类和AudioClip接口支持在Applet中播放声音和创建音频剪辑。

JDK 1.2有一个新的声音引擎，具有更好的声音质量，它提供MIDI文件的回放，并支持完整范围的.wav、.aiff和.au文件。还有一个新的Applet类方法，这样应用程序就可以在没有AppletContext的情况下创建。

### Internationalization Enhancements
Java国际化使得Java可以通过API的方式来配置支持使用全世界的语言。

在JDK1.2中新增了Input Method Framework (IMF)，这个帮助Java可以在文本输入框中键入中文，日文等复杂字符。

::: tip
Internationalization有时也被简称为i18n，原因是在英语字母中，`i`和`n`之间有18个字母。
:::
 
### Jar Enhancements
Jar是在JDK1.1时推出的支持将多个类文件和相关资源绑定到单个归档文件的文件格式。
JDK1.2中进行了如下增强：
- Jar命令行工具增加了新的更新jar的方法
- 提供了读取和写入Jar文件的新标准API
- 支持在扩展机制中使用Jar文件
- 支持Jarsigner来对jar文件进行签名和认证

### 字符串常量池
在Java中，字符串一旦生成，便是不可变的对象。在JDK1.2以后，PermGen中开辟了一块专门存放常量池的空间。

在栈中声明的相同的字符串常量，最终指向的是同一个字符串的内存地址，这样有效减少重复申请内存，也加快了类初始化速度。

下面的示例可以很好说明这个问题：
```java 
public class Demo {

    public static void main(String[] args) {
        String name1 = "errison.cn";
        String name2 = "errison.cn";
        String name3 = new String("errison.cn");
        String name4 = new String("errison.cn").intern();// since JDK1.3

        System.out.println(name1 == name2); // true
        System.out.println(name1 == name3); // false
        System.out.println(name1 == name4); // true
    }
}
```



