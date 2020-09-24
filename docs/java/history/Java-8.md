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

## Optional
自Java诞生以来，就伴随着空指针null，对于除了基本类型的引用类型的使用，都不得不考虑对象是否未空。要么使用前判空，要么抛出异常，开发者都不胜其烦。

JDK8推出Optional这个类，及时做了补救。在使用一个对象以前，使用Optional定义，则可以直接使用而不用担心空指针异常。

```java 
  private void test() {
        // 声明Optional泛型
        Optional<Job> optionalJob = Optional.ofNullable(null);
        // 不抛出异常
        optionalJob.ifPresent(x -> {
            System.out.println(x.id);
            System.out.println(x.name);
        });
        // 声明类型变量
        Job neverNullJob = optionalJob.orElse(new Job());
        System.out.println(neverNullJob);
  }
```

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
表达式包含参数列表，一个`->`符号，以及方法体。如果参数只有一个，`()`可以省略，方法只有一行语句则`{}`也可以省略。

列举一些Lambda表达式的定义示例
```java 
    
   // 有输入有输入
   private static void defineLambdaFunction() {
       BiFunction<Integer, Long, String> biFunction = (a, b) -> "BiFunction return: a :" + a + "  b: " + b;
       String str = biFunction.apply(1, Long.MAX_VALUE);
       System.out.println(str);
   }

   // 有输入无返回
   private static void defineLambdaConsumer() {
       BiConsumer<Integer, Long> biConsumer = (a, b) -> System.out.println("BiConsumer a :" + a + "  b: " + b);
       biConsumer.accept(1, Long.MAX_VALUE);
   }

   // 有入参有返回
   private static void defineLambdaPredict() {
       BiPredicate<Integer, Integer> biPredicate = (a, b) -> a > b;
       System.out.println("Predict result : " + biPredicate.test(2, 4));;
   }

   // 没有参数
   private static void defineLambdaSupplier() {
       IntSupplier supplier = () -> 3;
       System.out.println("Supplier : " + supplier.getAsInt());
   }

```


## Method References 方法引用


## Stream API 
JDK8引入的Stream(流)，是支持顺序和并行聚合操作的元素序列。Stream虽然命名为流，但此流非彼流，并非指向IO设备和文件的字节流，而是针对容器，数组等的数据集合。

利用流操作，可以对指向的数据集合进行聚合，遍历，复制等操作。

### Creation

Stream的创建有多种形式，列举如下。
#### empty
```java 
Stream<String> streamEmpty = Stream.empty();
```
#### Stream.of
```java 
// stream of list
Collection<String> collection = Arrays.asList("a", "b", "c");
Stream<String> streamOfCollection = collection.stream();

// stream of array
Stream<String> streamOfArray = Stream.of("a", "b", "c");
```

#### Stream.builder
```java 
Stream<String> streamBuilder = Stream.<String>builder().add("a").add("b").add("c").build();
```
#### Stream.generate
```java
Stream<String> stringStream1 = Stream.generate(()-> "what a long story").limit(10);
```
#### Stream.iterate
```java
Stream<Integer> streamIterated = Stream.iterate(40, n -> n + 2).limit(20);
streamIterated.forEach( x -> System.out.print(x));
```


###  operation

获取Stream对象后，可以执行过滤，映射，聚合等一系列操作。

#### forEach
foreach是针对流的新的遍历方式，通过传入一个Functional Interface进行方法操作。
```java 
    List<Integer> list = Arrays.asList(1, 2, 3);
    // forEach循环
    list.forEach(x -> {
        if (x > 3) {
            System.out.println("numbers bigger than " + x);
        }
    });

    // 对比JDK7的for循环
    for (Integer i : list){
        if (i > 3) {
            System.out.println("numbers bigger than " + x);
        }
    }
```

#### filter
顾名思义，是对流对象中的数据进行过滤，传入一个Predict，并将符合条件的组成一个新的Stream。
```java 
 private static void testFilter() {
        Stream<Integer> integerStream = Stream.of(1, 2, 3, 4, 5);
        Stream<Integer> subStream = integerStream.filter(x -> x > 3);
        subStream.forEach(x -> System.out.println(x));
    }
```

#### map
map方法将Stream中的元素映射成其他对象，并返回以新对象组成的Stream。
```java 
 private static void testMap(){
        Stream<String> stream = Stream.of("aaa", "bbb","ccc","ddd");
        stream.map(x -> x.toUpperCase()).forEach(x-> System.out.println(x));
    }
```

#### flatMap
与map类似，不过将Stream中的每个元素映射为多个，并且汇集到新的Stream中。

```java 
private static void testFlatMap() {
    List<String> stringList = new ArrayList<>();

    stringList.add("One flew over the cuckoo's nest");
    stringList.add("To kill a muckingbird");
    stringList.add("Gone with the wind");

    Stream<String> stream = stringList.stream();

    stream.flatMap((value) -> {
        String[] split = value.split(" ");
        return Arrays.asList(split).stream();
    }).forEach((value) -> System.out.println(value));
    }
```
#### distinct
distinct对Stream中的数据进行去重操作。
```java 
    private static void testDistinct() {
        Stream<Integer> stream = Arrays.asList(1, 2, 3, 4, 5, 6, 1, 2, 3).stream();
        stream.distinct().forEach(x -> System.out.println(x));
    }
```

#### limit
limit方法对Stream中的元素总数进行限制。
```java 
    private static void testLimit(){
        Stream<Integer> stream = Arrays.asList(1, 2, 3, 4, 5, 6, 1, 2, 3).stream();
        stream.limit(3).forEach(x -> System.out.println(x));
    }
```

####  peek
peek操作也是遍历Stream中的每一个元素，与foreach不同的地方在于，peek操作返回一个Stream，而foreach则只是遍历，不返回Stream。
```java 
    private static void testPeek(){
        Stream<Integer> stream = Arrays.asList(1, 2, 3, 4, 5, 6, 1, 2, 3).stream();
        stream.peek(x -> x = x+ 1 ).forEach(x -> System.out.println(x));
    }
```

#### 聚合操作
包括anyMatch,allMatch,noneMatch,findAny,findFirst,min,max,count等，对Stream中的元素进行计算。
```java 
    private static void testAllMatch(){
        List<String> stringList = new ArrayList<String>();
    
        stringList.add("One flew over the cuckoo's nest");
        stringList.add("To kill a muckingbird");
        stringList.add("Gone with the wind");
    
        Stream<String> stream = stringList.stream();
    
        boolean allMatch = stream.allMatch((value) -> value.startsWith("One") );
        System.out.println(allMatch);
    }
```
#### reduce
与flatMap相反，reduce操作是将每个子元素聚合在一起合成一个对象。

```java 
    private static void testReduce() {
        List<String> stringList = new ArrayList<>();

        stringList.add("text 1");
        stringList.add("text 2");
        stringList.add("text 3");

        Stream<String> stream = stringList.stream();
        Optional<String> string = stream.reduce((x , value ) -> x + value + "  ");
        System.out.println(string);

    }
```

#### collect
collect将Stream对象转换为集合。

```java 
 private static void testCollect() {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
        List collect = list.stream().filter(x -> x % 2 == 0).collect(Collectors.toList());
        collect.forEach(x-> System.out.println(x));
    }
```
## Method reference

Method reference(方法引用)也是JDK8推出的一项新功能，是Lambda表达式的子集。能使用方法引用的，肯定能使用Lambda表达式，

反之则不然。使用方法引用，可以更简化代码。共有四种方法引用的类型，列举如下，并分别举例说明。

|类型|语法|方法引用|Lambda|
|:--:|:--:|:--:|:--:|
|应用静态方法|Class::staticMethod|String::valueOf|s->String.valueOf(s)|
|引用特定对象的实例方法|instance::instanceMethod|s::toString| () -> “string”.toString()|
|引用特性类型的实例方法|iClass:instanceMethod|String::toString| s -> s.toString()|
|引用构造器方法|Class::new|String::new|() -> new String()|

### 静态方法引用
静态方法的引用，以下面的代码举例，静态方法的入参要和List.forEach(Consumer<T>)中的泛型匹配。
```java 
    private void testStaticMethod() {
        List<String> list = Arrays.asList("aaa", "bbb", "ccc");
        // method reference
        list.forEach(System.out::println);
        // lambda
        list.forEach(value -> System.out.println(value));
        // normal
        for (String string : list) {
            System.out.println(string);
        }
    }
```
### 特定对象实例方法引用
与静态方法引用不同的是，调用者由类名变成了实例名，即由这个实例调用该实例的方法。
```java
    
     private static class MyComparator {
            
            private Integer integer;
    
            public MyComparator(Integer i) {
                this.integer = i;
            }
    
            public int compare(final Integer a, final Integer b) {
                return a.compareTo(b);
            }
    
            public void count() {
                System.out.println(integer);
            }
        }

    private void testInstanceMethod() {
        final List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        final MyComparator myComparator = new MyComparator();
        // Method reference
        Collections.sort(list, myComparator::compare);
        // Lambda expression
        Collections.sort(list, (a, b) -> myComparator.compare(a,b));
    }
```
### 特定类型实例方法引用
如果一组对象都有相同的方法，则可以使用类名::引用的方式来调用。
```java 
    private void testTypeInstanceMethod() {
        final List<MyComparator> list = Arrays.asList(new MyComparator(1), new MyComparator(2), new MyComparator(3));
        final MyComparator myComparator = new MyComparator();
        // Method reference
        list.forEach(MyComparator::count);
        // Lambda expression
        list.forEach(value -> myComparator.count());
        // normal
        for (final MyComparator comparator : list) {
            comparator.count();
        }
    }

```
这里MyComparator就是特定类型，循环中将依次调用列表里实例对象的`count`方法。与静态方法引用不同的地方在于，静态引用是将当前对象传给调用的方法，而这里的调用则是在

每个实例对象上进行特定方法调用。

### 构造函数引用


```java 
 @FunctionalInterface
    private interface ComparatorFactory{
        MyComparator getComparator(Integer i);
    }


    private static class MyComparator {

        private Integer integer;

        public MyComparator(Integer i) {
            this.integer = i;
        }

        public int compare(final Integer a, final Integer b) {
            return a.compareTo(b);
        }

        public void count() {
            System.out.println(integer);
        }
    }

```






