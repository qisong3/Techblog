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

## Interface default/static  method  接口默认/静态实现方法
在JDK8之前，接口只能用来做两件事，声明接口中的函数，以及定义常量。

如果在现有的接口上新增一个函数接口，那么所有实现这个接口的实现类，都得相应地实现这个新增的方法，代码改动量大，而且可能这个方法在旧的实现类中压根不需要。

JDK8给接口增加了默认实现函数这一特性，使用`default`来标识类方法的默认实现，这样实现类就不必须重写这个方法。

除此之外，现在也可以在接口中定义静态方法了，与在类中定义的静态方法唯一区别是接口中的静态方法是public的，而不能定义为private。

```java 
  public interface Dog {
   
    // 默认方法，实现此接口的类或者接口不用必须实现
    default void bark(){
        System.out.println("wang");
    }

    // 静态方法，具有接口访问权限的可直接调用
    static void eat(){
        System.out.println("eat with mouth");
    }
  }
```

也正是由于接口中可以定义默认实现方法，Java源代码在为历史接口新增方法时，只需要提供一个空的默认实现即可，而不用担心需要改动已有实现类。


## Functional Interface & Lambda 函数式接口和Lambda表达式
JDK8中将只定义了一个抽象方法的接口称为函数式接口，并有专门的注解标识@FunctionalInterface。
::: tip
对于接口中包含多个方法，但是其他方法都有默认实现的也认定为函数式接口。
:::
JDK8中引入了一个新包java.util.function，其中定义了若干函数式接口，分为几种类型，主要区别在于函数参数和返回值：
- Consumer  只有入参，没有返回值
```java 

@FunctionalInterface
public interface BiConsumer<T, U> {

    /**
     * 两个入参，没有返回值
     *
     * @param t the first input argument
     * @param u the second input argument
     */
    void accept(T t, U u);
    ...
}
```
- Predicate 有入参，返回true/false
```java 
@FunctionalInterface
public interface BiPredicate<T, U> {

    /**
     * 两个泛型入参，返回判断条件判断结果
     *
     * @param t the first input argument
     * @param u the second input argument
     * @return {@code true} if the input arguments match the predicate,
     * otherwise {@code false}
     */
    boolean test(T t, U u);
}

```
- Supplier 无入参，有出参
```java 

    
    @FunctionalInterface
    public interface LongSupplier {
    
        /**
         * 没有入参，返回一个Long类型
         *
         * @return a result
         */
        long getAsLong();
    }
```
- Function 有入参，有出参
```java 
    @FunctionalInterface
    public interface IntFunction<R> {
    
        /**
         * int入参，返回R类型对象
         *
         * @param value the function argument
         * @return the function result
         */
        R apply(int value);
    }
```
定义Functional Interface当然不仅仅是为了这么一个概念，与之一同引入的Lambda表达式才是重点。

众所周知，在Java中定义一个匿名实现类，需要比较繁冗的语句。定义一个Functional Interfacer如下
```java 
 @FunctionalInterface
    interface FunctionInterface1{

        void testBiConsumer(int a, int b);
    }
```
在JDK8之前，定义一个实现类，需要将接口的完整信息和函数信息填入。
```java
    FunctionInterface1 interface1 = new FunctionInterface1() {
            @Override
            public void testBiConsumer(int a, int b) {
                System.out.println("传统定义方式");
            }
    };
```
在Lambda表达式出现以后，定义变得精简了许多
```java 
    FunctionInterface1 interface2 = (a, b) -> { System.out.println("Lambda语句");};
```

Lambda表达式是对Functional Interface的简写。Lambda表达式的具体定义如下，忽略了接口名，方法名以及方法返回值。
```
(parameter list) -> { body }
```
表达式包含参数列表，一个`->`符号，以及方法体。如果方法只有一行语句`{}`也可以省略。

列举一些Lambda表达式的定义示例
```java 
    private static void defineLambdaFunction() {
        BiFunction<Integer, Long, String> biFunction = (a, b) -> "BiFunction return: a :" + a + "  b: " + b;
        String str = biFunction.apply(1, Long.MAX_VALUE);
        System.out.println(str);
    }

    private static void defineLambdaConsumer() {
        BiConsumer<Integer, Long> biConsumer = (a, b) -> System.out.println("BiConsumer a :" + a + "  b: " + b);
        biConsumer.accept(1, Long.MAX_VALUE);
    }

    private static void defineLambdaPredict() {
        BiPredicate<Integer, Integer> biPredicate = (a, b) -> a > b;
        System.out.println("Predict result : " + biPredicate.test(2, 4));;
    }

    private static void defineLambdaSupplier() {
        IntSupplier supplier = () -> 3;
        System.out.println("Supplier : " + supplier.getAsInt());
    }
```


::: tip
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
:::

