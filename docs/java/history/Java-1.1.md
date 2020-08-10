---
title: Java-1.1
date: 2020-07-16
last-update: 2020-07-27
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

1997年2月19日，Sun发布了JDK1.1，相较于JDK1.0的初代版本，JDK1.1有了诸多新特性和改进。

## JIT编译器
Java语言运行在JVM虚拟机上。Java程序被编译成字节码以后并不能直接被操作系统识别，还是需要根据平台将字节码转换为系统可识别的指令才能执行。Java语言的运行逻辑如下:
@flowstart
javaCode=>parallel: Java Code
javac=>operation: javac
byteCode=>parallel: Byte Code
jvm=>operation: JVM
systemCode=>parallel: System Operation Code
run=>end: Run

javaCode(path1, bottom)->javac->byteCode(path1,bottom)->jvm->systemCode(path1,bottom)->run
@flowend
即先由Java程序编译为字节码，再由Java虚拟机将字节码翻译成二进制机器码后由系统运行。

翻译的方式有两种，一种是逐条指令翻译，就是取到一条虚拟机指令，找到对应系统中的指令，一条一条翻译执行。Python，Ruby等语言均采用此方式，也称为解释型编译器。

还有一种是即时编译，就是取一段字节码（通常是以方法为单位），整体翻译成机器码再执行。这也就是Just In Time Compiler (及时编译器)的工作模式。

::: warning
注意，此时的JIT还是在Windows系统上以外挂的形式存在，正式进入JVM需要下一个版本再正式官方登场
:::

::: tip AOT
后来又演变出了Ahead of Time(AOT)编译器，即提前将字节码翻译成机器码，这样虚拟机的效率将与C/C++传统编译型语言性能相差无几。不过这也改变了Java``Write Once, Run Anywhere`的初衷。
因为翻译成机器码就必然需要与硬件架构和操作系统相绑定，提升效率的同时损失了灵活性。
:::

## JavaBeans
JavaBeans的原始定义如下：
A Java Bean is a reusable software component that can be manipulated visually in a builder tool.

直面翻译为，JavaBean是一个可以在构造工具中可视性修改的软件组件。

这么说有些抽象，按照官方给出的标准，JavaBean可以定义为符合下述条件的Java类：

- 支持内省，以便构建器工具能够分析bean的工作方式
- 支持定制，这样当使用应用程序构建器时，用户可以定制bean的外观和行为。
- 支持将事件作为一种简单的通信比喻，而不是用于连接bean
- 支持属性(用于定制和编程使用)
- 支持持久化，这样就可以在应用程序构建器中定制bean，然后保存其定制的状态并稍后重新加载

这么说可能还是有些抽象，官方文档中提到<br>
The Java Beans architecture is being designed to work well in a distributed world-wide-web environment.<br>
直白翻译是，Java Beans架构是为分布式的万维网环境设计的。
当时Java在万维网中流行的是Applet。Applet是在网页中嵌入Java代码，支持Java的浏览器取得代码后在本地执行。

比如定义了本地建造工具创建了一个可视化的按钮，其他的构造工具要如何识别并修改这个按钮呢？大家都遵循JavaBeans规范，这样构造工具就知道了
其中定义的属性，方法，事件等，就可以直接操作了。

随着技术的进步，Applet被后来的JSP, Servlet等一众后浪拍到了沙滩上。不过Java Beans的规范却流传了下来并逐渐引申成如下含义：

- 具有私有的属性，可通过Getter, Setter方法操作
- 具有无参构造函数
- 实现了Serializable接口
现在JavaBeans在JDBC，RMI中等都大放异彩。

## JDBC

随着应用程序规模的扩大，持久化存储就成了各种语言必须面对的问题，JDBC（The Java Database Connectivity）就是一个提供Java与各种数据库交互的桥梁。

JDBC API是用于Java编程语言与大量数据库、SQL数据库和其他表格数据源(如电子表格或平面文件)之间独立于数据库的连接的行业标准。JDBC API为基于sql的数据库访问提供了调用级API。

注意到，这是一个接口标准，各个厂商或组织需要实现这个标准才能实现Java与数据库的连接使用。如mysql-connector-java驱动就是实现了JDBC标准的官方驱动。

JDBC与数据库关系如下图所示<br>
![JDBC架构图](/images/Java-history/jdbc-architecture.jpg)<br>
JDBC是一个持续升级的规范，后面的各个版本的JDK中也多有对JDBC标准的升级补充。

## 内部类
Java中的类是不能使用private修饰的，但是在类中定义的内部类就可以，内部类可以直接访问类中的其他私有方法和字段，是增强Java安全性的机制。

Java中的内部类有三种形式
- 普通内部类
- 方法内部类
- 匿名内部类

可以见下面的示例，具体代码可见[github](https://github.com/qisong3/Java-Review-Demo)

```java

public class Demo1 {

    private String innerValue = "inner value";

    private String innerMethod() {
        return "inner method";
    }

    private class InnerClass {

        private void printResult() {
            System.out.println("1--- Get innerValue from OuterClass" + innerValue);
            System.out.println("1--- Get innerMethod from OuterClass" + innerMethod());
        }
    }

    private void methodWithInnerClass() {

        int num = 23;
        // method-local inner class
        class MethodInnerClass {
            public void print() {
                System.out.println("2---This is method inner class " + num);
            }
        } // end of inner class

        // Accessing the inner class
        MethodInnerClass inner = new MethodInnerClass();
        inner.print();
    }

    abstract class AnonymousInnerClass{

        protected void abstractMethod(){

        }
    }

    public static void main(String[] args) {
        Demo1 demo1 = new Demo1();
        // 1 Normal nner class
        // 注意内部类的声明方式
        Demo1.InnerClass innerClass = demo1.new InnerClass();
        innerClass.printResult();
        // 2 local method inner class
        demo1.methodWithInnerClass();
        // 3 Anonymous Class
        AnonymousInnerClass anonymousInnerClass = demo1.new AnonymousInnerClass(){
            protected void abstractMethod(){
                System.out.println("3---Method from Anonymous Inner class");
            }
        };
        anonymousInnerClass.abstractMethod();
    }
}
```
::: tip 提示
在Java8支持Lambda语法以后，内部类可以被Lambda表达式以更简洁的方式替代，后面会详细说明。
:::
## AWT增强
AWT是早期的Java GUI编程API，现在使用Java做界面编程较少
JDK1.1版本提供了如下方面增强，只列出不具体展开
- 增加委托事件模式
- 增加弹出按钮

## 支持Jar格式
Jar全称Java ARchive, 基于zip压缩。Jar的出现主要动机是为了当时方便从网络上以一个完整压缩包的形式下载Applet（包括class文件，音频图片文件等）。

虽然现在Applet已经几乎销声匿迹，但Jar格式由于其跨平台和通用性好，已经成为Java程序的标准打包输出方式。

## 网络增强
- 对Socket和SocketServer API的修改
- 支持Socket选项和Socket Exception

## IO 增强
- 修改了部分IO接口
- 支持Character Stream，即从只支持字节流到支持字符流

## Math 增强
支持`BigInteger`和`BigDecimal

## Remote Method Invocation(RMI)
RMI使得人们可以开发分布式的Java-to-Java的程序，即可以调用其他虚拟机中的对象中的方法。Java一旦拥有远程对象的引用后，就可以直接调用该对象的方法。

RMI的实现由两部分组成，服务端和客户端。服务端暴露对象，客户端可以持有和调用对象。具体可见(tutorial)https://docs.oracle.com/javase/tutorial/rmi/overview.html。

RMI是部分Java分布式服务的基础，著名的微服务框架Dubbo就依赖于RMI技术。Demo可见[github](https://github.com/qisong3/Java-Review-Demo)。

## 序列化
要实现RMI，就需要在网络中传输对象，网络中只能传递字节流。序列化是Java对象转换为字节数组的过程，反序列化则反之。

Java对象如需要实现序列化，需要做到以下几点：
- 实现`java.io.Serializable`接口
- 将不需要序列化的字段使用`transient`关键字标记
- 实现`writeObject`方法来控制哪些字段需要被保存，或者向流中增加额外信息
- 实现`readObject`方法来读取`writeObject`写入的方法

一个简单的例子如下：
```java   

public class Employee implements Serializable {

    // 此项必须有
    private static final long serialVersionUID = 1L;

    public String name;
    public String address;
    public transient int SSN;
    public int number;

    public void mailCheck() {
        System.out.println("Mailing a check to " + name
                + " " + address);
    }

    private void serializeMethod() {
        Employee employee = new Employee();
        employee.name = "Reyan Ali";
        employee.address = "Phokka Kuan, Ambehta Peer";
        employee.SSN = 11122333;
        employee.number = 101;
        try {
            FileOutputStream fileOut =
                    new FileOutputStream("d://test.obj");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(employee);
            out.close();
            fileOut.close();
            System.out.printf("Serialized data is saved in d://test.obj");
        } catch (IOException i) {
            i.printStackTrace();
        }
    }

    private void deSerializeMethod() {
        Employee employee = null;
        try {
            File file = new File("d:\\test.obj");
            FileInputStream fileIn = new FileInputStream(file);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            employee = (Employee) in.readObject();
            in.close();
            fileIn.close();
            file.delete();
        } catch (IOException i) {
            i.printStackTrace();
        } catch (ClassNotFoundException c) {
            System.out.println("Employee class not found");
            c.printStackTrace();
        }
        System.out.println("Deserialized Employee...");
        System.out.println("Name: " + employee.name);
        System.out.println("Address: " + employee.address);
        System.out.println("SSN: " + employee.SSN);
        System.out.println("Number: " + employee.number);
    }

    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.serializeMethod();
        employee.deSerializeMethod();
    }
}

```

## Java Native Interface(JNI)

JNI是一个使Java支持本地程序的标准编程接口。通过JNI接口，Java可以轻松调Java语言不方便实现的类库，如各种打印机驱动，FFmpeg音视频库等以便Java扩展功能和提升效率。


##  反射
反射是Java可以在运行时通过API调用的方式动态获取和操作JVM运行时的类和对象的功能。具体来说，反射可以实现以下功能：
- 构建新的类实例和数组
- 获取和修改类的字段和属性
- 调用类和对象中的方法
- 获取和修改数组中的元素

一个反射的样例如下：
```java
package cn.errison.feature.demo.reflection;

import java.lang.reflect.*;

public class Demo1 {

    public static final String PARENT_CLASS_NAME = "cn.errison.feature.demo.reflection.Person";

    public static final String CHILD_CLASS_NAME = "cn.errison.feature.demo.reflection.Child";

    public static void main(String[] args) throws Exception {
        demo1();
        demo2();
        demo3();
    }

    /**
     * demo1：通过Java反射机制得到类的包名和类名，并构造新的包
     */
    public static void demo1() throws Exception {
        // 1 获得包名和类名
        Person person = new Person();
        System.out.println("写法1，包名：" + person.getClass().getPackage().getName());
        System.out.println("完整类名：" + person.getClass().getName());

        Class<?> class1 = Person.class;
        System.out.println("写法2，包名：" + class1.getPackage().getName() + " , 完整类名：" + class1.getName());

        String name = class1.getClassLoader().getClass().getName();
        System.out.println("类加载器类名：" + name);

        // 构造新的对象
        Class<?> class2 = Class.forName(PARENT_CLASS_NAME);
        Person reflectPerson = (Person) class2.newInstance();
        reflectPerson.setName("Errison");
        reflectPerson.setAge(18);
        System.out.println(reflectPerson.toString());

        // 用构造器构造
        Class<?> class3 = Class.forName(PARENT_CLASS_NAME);
        Constructor<?>[] constructors = class3.getConstructors();
        Person reflectPerson1 = (Person) constructors[0].newInstance();
        reflectPerson1.setName("Tom");
        reflectPerson1.setAge(20);
        System.out.println(reflectPerson1.toString());

        Person reflectPerson2 = (Person) constructors[0].newInstance();
        reflectPerson2.setName("Tom Errison");
        reflectPerson2.setAge(30);
        System.out.println(reflectPerson2.toString());

    }


    
    /**
     * demo2：通过Java反射机制得到类的一些属性：继承的接口、父类、函数信息、成员信息、类型等
     */
    public static void demo2() throws Exception {
        Class<?> class1 = Class.forName(CHILD_CLASS_NAME);

        //取得父类名称
        Class<?> superclass = class1.getSuperclass();
        System.out.println("Child类的父类名：" + superclass.getName());

        Field[] fields = class1.getDeclaredFields();
        for (int i = 0; i < fields.length; i++) {
            System.out.println("类中的成员" + i + "： " + fields[i]);
        }

        //取得类方法
        Method[] methods = class1.getDeclaredMethods();
        for (int i = 0; i < methods.length; i++) {
            System.out.println("取得Child类的方法" + i + "：");
            System.out.println("函数名：" + methods[i].getName());
            System.out.println("函数返回类型：" + methods[i].getReturnType());
            System.out.println("函数访问修饰符：" + Modifier.toString(methods[i].getModifiers()));
            System.out.println("函数代码写法： " + methods[i]);
        }

        //取得类实现的接口，因为接口类也属于Class，所以得到接口中的方法也是一样的方法得到哈
        Class<?> interfaces[] = class1.getInterfaces();
        for (int i = 0; i < interfaces.length; i++) {
            System.out.println("实现的接口类名： " + interfaces[i].getName());
        }

        System.out.println("调用无参方法fly()：");
        Method method = class1.getMethod("fly");
        method.invoke(class1.newInstance());

        System.out.println("调用有参方法walk(int m)：");
        method = class1.getMethod("walk", int.class);
        method.invoke(class1.newInstance(), 100);
    }

}

```
具体示例可访问[github](https://github.com/qisong3/Java-Review-Demo)




