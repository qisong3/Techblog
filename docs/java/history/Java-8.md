---
title: Java-8
date: 2020-09-18
last-update: 2020-09-18
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---

2014年3月18日，JDK8正式发布。JDK8是JDK的一个重要版本，也是一个长期支持版本，从2014年开始，持续维护到2022年。

## Interface default method  接口默认实现方法
在JDK8之前，接口只能用来做两件事，声明接口中的函数，以及定义常量。

如果在现有的接口上新增一个函数接口，那么所有实现这个接口的实现类，都得相应地实现这个新增的方法，代码改动量大，而且可能这个方法在旧的实现类中压根不需要。

JDK8给接口增加了默认实现函数这一特性，使用`default`来标识类方法的默认实现，这样实现类就不必须重写这个方法。

```java 
  public interface Dog {
    default void bark(){
        System.out.println("wang");
    }
  }
```

也正是由于这个特性，Java代码在为历史接口新增实现时就可以游刃有余，不用担心需要改动已有实现类。


## Functional Interface  函数式接口
JDK8中将只定义了一个抽象方法的接口称为函数式接口，并由专门的注解标识@FunctionalInterface。
在JDK8之前已有的函数式接口有
- java.lang.Runnable
- java.util.concurrent.Callable
- java.security.PrivilegedAction
- java.util.Comparator
- java.io.FileFilter
- java.nio.file.PathMatcher
- java.lang.reflect.InvocationHandler
- java.beans.PropertyChangeListener
- java.awt.event.ActionListener
- javax.swing.event.ChangeListener

::: tip
对于接口中包含多个方法，但是其他方法都有默认实现的也认定为函数式接口。
:::
JDK8中，引入了一个心报java.util.function，其中定义了若涵函数式接口，主要可以分为以下几类。可以从接口定义中来查找。
- Function 
```java 

@FunctionalInterface
public interface Function<T, R> {

    /**
     * Applies this function to the given argument.
     *
     * @param t the function argument
     * @return the function result
     */
    R apply(T t);
    
    ...
}
```
- Consumer 


- Supplier
```java 
@FunctionalInterface
    public interface Supplier<T> {
    
        /**
         * Gets a result.
         *
         * @return a result
         */
        T get();
    }
```
- Predict

## Lambda






