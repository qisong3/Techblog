---
title: Java-5
date: 2020-08-26
last-update: 2020-08-27
tags:
 - Java
keywords:
 - Java
 - JDK 
 - features

---
2004年9月30日，JDK1.5发布。1.5原先还是一个内部版本，为了体现J2SE的`成熟，稳定，安全，扩展`，JDK1.5正式命名为JDK5.0。

JDK1.5是JDK的一个重要里程碑，一些重要特性被引入。整体架构如图所示。
![JDK5.0 architecture](/images/java-history/j2se5.gif)

## Generic 泛型

JDK1.5之前，新建一个String类型的数组需要这样写
```java
    List list = new ArrayList();
    list.add("hello");
    String s = (String) list.get(0)
```
这样写，每次都要强制类型转换，既繁冗，还容易出错，而且不美观。

有了泛型以后，代码可以这样写，编译器帮我们做了类型推断和检查的工作
```java 
    List<String> list = new ArrayList<String>();
    list.add("hello");
    String s = list.get(0); 
```
### 泛型类
```java 
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}

/**
 * Generic接口
 *
 */
public interface Pair<K, V> {
    public K getKey();
    public V getValue();
}
```
在Java中，使用`<>`包裹的即是泛型类型，这里的泛型T可以传入任何有效的Object对象，如Integer，Double，String等。

::: tip 默认参数
按照惯例，类型参数名称是单个大写字母。
通常使用的类型参数名列举如下

    E - Element (used extensively by the Java Collections Framework)
    K - Key
    N - Number
    T - Type
    V - Value
    S,U,V etc. - 2nd, 3rd, 4th types

:::

### 泛型方法
泛型方法是引入它们自己的类型参数的方法。这类似于声明泛型类型，但是类型参数的作用域仅限于声明它的方法。允许使用静态和非静态泛型方法以及泛型类构造函数。

泛型方法的语法包括尖括号内的类型参数列表，它出现在方法的返回类型之前。对于静态泛型方法，类型参数部分必须出现在方法的返回类型之前。

泛型类定义如下，其中定义的get,set方法都是泛型方法。
```java 
public class Pair<K, V> {

    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public K getKey()   { return key; }
    public V getValue() { return value; }
}
```
定义一个工具类，其中一个静态的泛型方法
```java 
    public class Util {
        public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
            return p1.getKey().equals(p2.getKey()) &&
                   p1.getValue().equals(p2.getValue());
        }
    }
```
完整的调用方法逻辑如下：
```java 
    Pair<Integer, String> p1 = new Pair<>(1, "apple");
    Pair<Integer, String> p2 = new Pair<>(2, "pear");
    boolean same = Util.<Integer, String>compare(p1, p2);
```
### 泛型擦除

在Java现有的继承关系中，`Integer`继承自`Number`，类似的，可否认定`Box<Integer>`对`Box<Number>`也有继承关系呢？

实际上，这两者并没有继承关系，或者说对编译器来说，这两者是相同的。因为泛型是JDK5以后引入的，为了向前兼容，支持早期非泛型的代码，Java的泛型并不彻底，或者更通俗得说，只是编译阶段的语法糖。

在编译器编译包含泛型的代码时，会做如下操作：

- 如果泛型类型参数无边界，则用其边界或Object替换泛型类型中的所有类型参数
- 如果需要，插入类型强制转换以保持类型安全
- 生成桥接方法以在扩展泛型类型中保留多态性

类型擦除确保不会为参数化类型创建新类;因此，泛型不会产生运行时开销

因此`Box<Integer>`和`Box<Number>`在编译阶段都擦除成`Box<Object>`，也就不存在继承关系。

## Enum 枚举
直到JDK1.5，Java语言层面开始支持枚举类型。枚举类使用enum作为类型关键字。

```java 
/**
 * 枚举类定义
 */
public enum Day {

    // enumerate definition
    MONDAY("周一",1),
    TUESDAY("周二",2),
    WEDNESDAY ("周三",3),
    THURSDAY("周四",4),
    FRIDAY("周五",5),
    SATURDAY("周六",6),
    SUNDAY("周日",7);

    private final String name;
    private final int index;

    // get item
    public String getName(){
        return this.name;
    }

    public int getIndex(){
        return this.index;
    }

    // constructor
    Day(String name, int index){
        this.name = name;
        this.index = index;
    }

    public static Day getDayByName(String name){
        Day day = Day.FRIDAY;
        for (Day dayEnum : values()){
            if (dayEnum.name.equalsIgnoreCase(name)) {
                day = dayEnum;
            }
        }
        return null;
    }

}
```
枚举可以定义方法，构造函数，静态方法，也可以实现接口，由于枚举是单例的，也有一些单例通过枚举来实现。

下面是访问调用枚举中的方法。
```java 
public class VisitEnum {

    public static void getAll(){
        Day[] days = Day.values();
        System.out.println(days);
    }

    public static void getSingle(){
        Day day = Day.FRIDAY;
        System.out.println(day.getIndex());
        System.out.println(day.getName());
    }

    public static void getWithSet(){
        EnumSet<Day> set = EnumSet.allOf(Day.class);
        set.remove(Day.FRIDAY);
        System.out.println(set.toString());
    }

    public static void getDayByMethod(){
        Day day = Day.getDayByName("周六");
        System.out.println(day);
    }

    public static void main(String[] args) {
        getAll();
        getSingle();
        getWithSet();
        getDayByMethod();
    }
}
```

## for-each loop 循环增强
在JDK5之前，遍历容器需要定义迭代器或者使用下标来访问
```java 
  private static void loopWithIterator(){
        for (Iterator i = list.iterator(); i.hasNext(); ){
            System.out.println(i.next());
        }
    }

    private static void loopWithIndex(){
        for (int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }
    }
```
JDK5出现了一个新的语法糖，可以不用关心如何循环，直接遍历
```java 
    private static void loopWithForeach(){
        for (Integer i: list){
            System.out.println(i);
        }
    }
```
使用这种方式，不仅可以遍历数组，列表，也可以遍历无序的Map,Set。

## Auto-boxing Auto-un-boxing 自动拆解箱
在Java容器中，只能存放引用对象，无法存放基础类型，也即是说，可以声明`List<Integer>`，但是不可以声明`List<int>`。这样每次在List中存入基础类型时，
需要先将基础类型封装成对应的包装对象（Boxing)，取出时再将包装对象转换成基础类型。JDK5以后，这些代码就可以省略了，编译器自动帮我们处理了。
```java 
    private static void boxing() {
        
        int[] array = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        List<Integer> list = new ArrayList<>();
        for (int in : array) {
            list.add(in);
        }
        for (int out : list) {
            System.out.println(out);
        }
    }
```

## Annotation 注解
Java中的注解是带有附属信息的标记。可以标记在class,interface,methods,fields等上，可以被Java编译器和虚拟机所识别。

在Java代码中有一些内置的注解
- @Override 子类方法复写父类方法的标记
- @Deprecated 不推荐使用的方法，将在未来版本中弃用
- @SuppressWarnings 避免编译器报出警告

开发者也可以自定义注解，需要遵循如下原则：
- 注解需要以@interface来声明
- 注解中可以包含元素，以类似于方法的形式表现
- 注解都继承自java.lang.annotation.Annotation接口，注解不可以再继承其他接口

声明注解中，可以使用四个官方注解`@Documented`, `@Target`, `@Inherited`,`@Retention`

#### @Documented
使用@Documented注解去标记自定义注解，则在使用了自定义注解的地方在生成JavaDoc时将带有自定义注解

#### @Target
使用@Target注解，标记注解将要使用在什么范围，具体如下：

    ElementType.ANNOTATION_TYPE
    ElementType.CONSTRUCTOR
    ElementType.FIELD
    ElementType.LOCAL_VARIABLE
    ElementType.METHOD
    ElementType.PACKAGE
    ElementType.PARAMETER
    ElementType.TYPE

#### @Inherited
使用@Inherited，则使用了该注解的类的子类也继承该注解

#### @Retention
|保留策略|可见性|
|:--|:--|
|RetentionPolicy.SOURCE|只在源码中可见，编译后不可见|
|RetentionPolicy.CLASS|编译后在class文件中也可见，运行时不可见|
|RetentionPolicy.RUNTIME|运行时可见|

以一个例子说明，先声明一个注解类，然后在运行时取得注解内容，注意Retention策略。
```java 
    @Documented
    @Inherited
    @Target(ElementType.METHOD)
    @Retention(RetentionPolicy.RUNTIME)
    public @interface CopyRight {
    
        String author() default "nobody";
        int duration() default 365;
    }
```
通过反射的方式可以取得注解内容
```java 
    public class Demo1 {

        @CopyRight(author = "Errison")
        public void methodWithAnnotation() {
            System.out.println("this is a annotation tag method");
        }
    
        public String getAnnotation() throws Exception {
            Method method = this.getClass().getMethod("methodWithAnnotation");
            CopyRight copyRight = method.getAnnotation(CopyRight.class);
            return copyRight.author();
        }
    
    
        public static void main(String[] args) throws Exception {
            System.out.println("author of this method is " + new Demo1().getAnnotation());
        }
}
```
```
output: author of this method is Errison
```

## Varargs 不定参数
传入参数的变量可以不定数量。见一个例子。
```java
    public static void getVarargs(String param1, String param2, String... params){
        System.out.println(param1);
        System.out.println(param2);
        System.out.println(params);
    }
```
这个方法，最少可以传两个String类型的参数，三个以上的也可以匹配到此方法，不过如果有定量的多个String参数的方法，会有限选择定量的方法。

## Static Import 静态引入
Integer类中定义了Integer.MAX_VALUE值，在JDK5.0之前，为了使用这个值，不得不引入整个Integer，JDK5.0以后可以按需引入
```java 
   import static java.lang.Integer.MAX_VALUE;

   // 使用
   System.out.println(MAX_VALUE);
```

## Enhancement 增强

### Collections 集合
JDK5.0中的集合类新增了几个接口
- Queue 队列也加入Java容器范畴
- BlockingQueue 阻塞队列，在队列为空时会一直等待
- ConcurrentMap 同步Map

新增若干实现类
- 实现Queue接口的
  * PriorityQueue 基于堆的无界优先级队列
  * ConcurrentLinkedQueue 基于链表的先进先出队列
  * LinkedList 也实现了Queue接口
  * AbstractQueue Queue的抽象实现类
  
- 实现BlockingQueue接口的
  * LinkedBlockingQueue 基于链表的阻塞队列
  * LinkedBlockingQueue 基于数组的阻塞队列
  * PriorityBlockingQueue 基于堆的优先级阻塞队列
  * DelayQueue 时间延时队列
  * SynchronousQueue 阻塞队列的一个实现

- 实现ConcurrentMap接口的
  * ConcurrentHashMap 基于哈希表的高效率，同步Map
  
- CopyOnWriteArrayList 写时复制List。在执行更新或插入操作时会复制一份副本，读取时不需要。
- CopyOnWriteArrayList 写时复制Set。在执行更新或插入操作时会复制一份副本，读取时不需要。

- EnumSet 元素是enumerate中的元素的Set，基于bit掩码，效率极高
- EnumMap 所有Key元素是enumerate中的元素的Map，基于bit掩码，效率极高

### Concurrent 同步

- Task Scheduling Framework(任务调度框架): Executor框架是一个基于一系列执行策略来标准化调用，调度，执行，和同步控制的框架
- Concurrent Collections(同步集合)：如上一节所述
- Atomic Variables(同步变量)：基础类型的安全同步类型，如int-->AtomicInteger,long-AtomicLong等。
- Synchronizers(同步辅助类)：包括 semaphores, mutexes, barriers, latches, exchangers，用于线程同步
- Locks(锁)：更高效率的同步锁
- Nanosecond-granularity timing（纳秒粒度的时间）： System.nanoTime支持纳秒时间


