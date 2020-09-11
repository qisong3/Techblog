---
title: Java-6
date: 2020-08-31
last-update: 2020-09-02
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

2006年12月11日，JDK6发布，相对于JDK5和后续的JDK7，JDK8，这个版本的改动并不算大。

## Collections 集合

### Deque  双向队列

JDK6中新增了Deque这个接口，支持在队列头和尾插入以及删除元素，以及实现Deque这个接口的集合实现类
- ArrayDeque  基于数组的高效率的双向队列
- BlockingDeque  继承了Deque和BlockingQueue两个接口的双向阻塞队列
- LinkedList  增加了对Deque的继承
- LinkedBlockingDeque 基于联表的双向阻塞队列

### Navigable* 可查询集合

- NavigableSet 在TreeSet基础上增加了查询的API，TreeSet继承此接口
- NavigableMap 在TreeMap基础上增加了查询的API,TreeMap继承此接口
- ConcurrentNavigableMap 继承了ConcurrentMap和NavigableMap接口的接口

## Reflection 反射

如下方法在编译时增加了warning警告
- getInterfaces() 
- getClasses() 
- getConstructors() 
- getMethod(String, Class...)  
- getConstructor(Class...)
- getDeclaredClasses()
- getDeclaredConstructors()
- getDeclaredMethod(String, Class...)
- getDeclaredConstructor(Class...)

```java 
public class Warning {
    void m() {
        try {
            Warning warn = new Warning();
            Class c = warn.getClass();
            Method m = c.getDeclaredMethod("m");
        } catch (NoSuchMethodException x) {
            x.printStackTrace();
        }
    }
}
```
基于此，上面这段代码编译时会爆出警告
```
$ javac Warning.java
Note: Warning.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
$ javac -Xlint:unchecked Warning.java 
Warning.java:8: warning: [unchecked] unchecked call to getDeclaredMethod(java.lang.String,java.lang.Class<?>...) as a member of the raw type java.lang.Class
            Method m = c.getDeclaredMethod("m");
                                          ^
1 warning

```

## Console 控制台
Console用于与设备的控制台终端相连接。readPassword()方法可以使用户在输入密码等敏感信息时不用显示在控制台中。

## 
