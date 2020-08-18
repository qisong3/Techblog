---
title: JDK8——Vector源码解读
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - List
keywords:
 - Java
 - List
 - Vector

---
## 概述
Vector是Java早期实现的容器，自JDK1.0就存在。目前在日常使用中逐渐被ArrayList或同步的ConcurrentLinkedQueue等代替，不过在早期的代码中和类库中，仍经常能见到Vector，因此有必要对其的组成和原理进行基本的了解。

Vector的继承关系如上图所示，可以看到，Vector和ArrayList的继承关系完全一致[ArrayList源码解读](JDK8——ArrayList源码解读.md)。那为何有了ArrayList还要构造出一个Vector呢？那下面从源码角度来了解一下Vector。
## 组成元素

```java 
    /**
     *
     * 存储元素的数组
     *
     * @serial
     */
    protected Object[] elementData;
     
    /**
     *
     * 元素个数
     */
    protected int elementCount;
     
    /**
     * 扩容数量
     * 
     */
protected int capacityIncrement; 
```
这几个变量从字面意思都比较容易理解，其中最后一个capacityIncrement是当vector容量不够了，需要一次性进行扩容的数量。
 
需要说明的是，同ArrayList一样，capacity（也就是elementData.length）和elementCount是两个值，一个显示了当前vector能承载多少元素，一个是已经存放的元素。
 
## 关键函数
### 构造函数
```java
    public Vector(int initialCapacity, int capacityIncrement) {
        super();
        if (initialCapacity < 0)
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        this.elementData = new Object[initialCapacity];
        this.capacityIncrement = capacityIncrement;
    }
 
    public Vector(int initialCapacity) {
        this(initialCapacity, 0);
    }
 
  
    public Vector() {
        this(10);
    }
 
    public Vector(Collection<? extends E> c) {
        elementData = c.toArray();
        elementCount = elementData.length;
        // defend against c.toArray (incorrectly) not returning Object[]
        // (see e.g. https://bugs.openjdk.java.net/browse/JDK-6260652)
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, elementCount, Object[].class);
    }
```
构造函数都比较简单明了，围绕着initialCapacity和capacityIncrement展开，设置了初始化长度和每次增长的长度。
### 增删改查
```java
 public synchronized void insertElementAt(E obj, int index) {
        if (index > elementCount) {
            throw new ArrayIndexOutOfBoundsException(index
                                                     + " > " + elementCount);
        }
        modCount++;
        final int s = elementCount;
        Object[] elementData = this.elementData;
        if (s == elementData.length)
            elementData = grow();
        System.arraycopy(elementData, index,
                         elementData, index + 1,
                         s - index);
        elementData[index] = obj;
        elementCount = s + 1;
    }
```
插入元素前，首先判断下标和扩容，然后将旧数组拷贝到新创建的数组中，实现过程比较清晰。需要注意的是，插入元素使用了synchronized关键字，即这个操作是加锁的操作，而且是对整个vector操作加锁，这就使得vector的性能急剧降低。

```java
    public synchronized void removeElementAt(int index) {
        if (index >= elementCount) {
            throw new ArrayIndexOutOfBoundsException(index + " >= " +
                                                     elementCount);
        }
        else if (index < 0) {
            throw new ArrayIndexOutOfBoundsException(index);
        }
        int j = elementCount - index - 1;
        if (j > 0) {
            System.arraycopy(elementData, index + 1, elementData, index, j);
        }
        modCount++;
        elementCount--;
        elementData[elementCount] = null; /* to let gc do its work */
    }
```   
```java
    public synchronized E set(int index, E element) {
        if (index >= elementCount)
            throw new ArrayIndexOutOfBoundsException(index);
 
        E oldValue = elementData(index);
        elementData[index] = element;
        return oldValue;
    }   
```
删除操作是将指定删除位置以后的元素依次前移一位，设置元素是将指定位置的元素用给定元素代替，也都是加锁的操作。
```java
    public synchronized E get(int index) {
        if (index >= elementCount)
            throw new ArrayIndexOutOfBoundsException(index);
 
        return elementData(index);
    }
```
如果说前面的增删改操作涉及到对vector的修改，加锁为了保证线程安全性可以理解。而获取元素这个对vector来说并不改变其本身同时也是最体现List性能的方法上，加锁就只能是拖累性能了。

## 小结
vector由于其功能和实现与ArrayList基本一致，不过对重要操作都使用了加锁导致其性能有较大损失，在实际使用过程中使用并不太多。将其get功能去锁的有CopyOnWriteArrayList，既不影响其线程安全性，又有效提升随机访问速度。
