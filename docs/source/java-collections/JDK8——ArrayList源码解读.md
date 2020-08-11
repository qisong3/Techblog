---
title: JDK8——ArrayList源码解读
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - List
keywords:
 - Java
 - List
 - ArrayList

---
## 概述
ArrayList是一种常用List类型实现，也是Java集合中的的常用类型，以遍历查询性能优异著称，继承关系如下：
![ArrayList继承](/images/java-source/arraylist-1.png)
可见ArrayList实现了Cloneable，Serializable，RandomAcess和List接口，继承了AbstractList抽象类，简而言之，ArrayList是一个实现了可复制，可序列化，支持快速随机访问的List类型。


这里最重要的是实现了List的接口，包括初始化，新增，查询，删除，销毁等函数，具体如何实现，请见下文分析。

## 成员变量
```java
     /**
     * List默认初始化长度
     */
    private static final int DEFAULT_CAPACITY = 10;
 
    /**
     * 存储ArrayList数据的数组
     */
    transient Object[] elementData;
 
    /**
     * List的实际长度
     */
    private int size;
 
    /**
     * ArrayList最大长度
     */
    ...
    private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;    
```
这里列出了三个重要的变量，具体释义见注释。ArrayList在初始化时默认为空的数组，当首个元素加入到List中时，长度扩容到10。size是数组的实际容量，也即是List的大小，初始化为0。

elementData是Object类型的数组，也是实际存放数据的数组。以Object作为数组元素使得List可以有效支持泛型。

这里有一点需要注意，既然elementData用来存放元素，那为何不使用elementData.length而是使用size这一变量作为ArrayList的长度呢？在下文中会结合使用进行说明。

## 函数解析

### 构造函数
```java
  /**                                                                               
   * Constructs an empty list with the specified initial capacity.                  
   *                                                                                
   * @param  initialCapacity  the initial capacity of the list                      
   * @throws IllegalArgumentException if the specified initial capacity             
   *         is negative                                                            
   */                                                                               
  public ArrayList(int initialCapacity) {                                           
      if (initialCapacity > 0) {                                                    
          this.elementData = new Object[initialCapacity];                           
      } else if (initialCapacity == 0) {                                            
          this.elementData = EMPTY_ELEMENTDATA;                                     
      } else {                                                                      
          throw new IllegalArgumentException("Illegal Capacity: "+                  
                                             initialCapacity);                      
      }                                                                             
  }                                                                                 
                                                                                    
  /**                                                                               
   * Constructs an empty list with an initial capacity of ten.                      
   */                                                                               
  public ArrayList() {                                                              
      this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;                         
  }                                                                                 
                                                                                    
  /**                                                                               
   * Constructs a list containing the elements of the specified                     
   * collection, in the order they are returned by the collection's                 
   * iterator.                                                                      
   *                                                                                
   * @param c the collection whose elements are to be placed into this list         
   * @throws NullPointerException if the specified collection is null               
   */                                                                               
  public ArrayList(Collection<? extends E> c) {                                     
      elementData = c.toArray();                                                    
      if ((size = elementData.length) != 0) {                                       
          // defend against c.toArray (incorrectly) not returning Object[]          
          // (see e.g. https://bugs.openjdk.java.net/browse/JDK-6260652)            
          if (elementData.getClass() != Object[].class)                             
              elementData = Arrays.copyOf(elementData, size, Object[].class);       
      } else {                                                                      
          // replace with empty array.                                              
          this.elementData = EMPTY_ELEMENTDATA;                                     
      }                                                                             
  }                                                                                  
```
构造函数有三个：
 - 无参构造函数：elementData初始化为空数组，此时size默认为0。
 - 初始化长度构造函数：elementData扩容为指定长度的未初始化数组。注意这里size并没有被设置为指定长度，此时elementData.length和size是不一致的。实际上elementData.length表示当前ArrayList的最大容量，而size则表示了实际存放元素的个数。
 - 容器初始化函数：通过容器已有数据构造ArrayList。

### 增加元素
```java
 /**                                                                          
  * Inserts the specified element at the specified position in this           
  * list. Shifts the element currently at that position (if any) and          
  * any subsequent elements to the right (adds one to their indices).         
  *                                                                           
  * @param index index at which the specified element is to be inserted       
  * @param element element to be inserted                                     
  * @throws IndexOutOfBoundsException {@inheritDoc}                           
  */                                                                          
 public void add(int index, E element) {                                      
     rangeCheckForAdd(index);                                                 
     modCount++;                                                              
     final int s;                                                             
     Object[] elementData;                                                    
     if ((s = size) == (elementData = this.elementData).length)               
         elementData = grow();                                                
     System.arraycopy(elementData, index,                                     
                      elementData, index + 1,                                 
                      s - index);                                             
     elementData[index] = element;                                            
     size = s + 1;                                                            
 }                                                                     
 
```
add函数重载的包括多个，这里只列出一个具有代表性的进行说明，其他的add方法可由它推演而来。这个函数做了这么几件事，首先检查要插入的下标是否越界，是的话直接抛异常退出。然后检查elementData.length和size是否一致，一致说明容量已满，需要扩容，增加一个元素的容量。将index之后的元素分别拷贝到原下标+1的位置，将index位置设为指定element，并将ArrayList的实际长度加一。

这一步骤的关键，或者说ArrayList的关键，在于扩容，来看一下扩容的实现。

```java
   /**                                                                    
    * Increases the capacity to ensure that it can hold at least the      
    * number of elements specified by the minimum capacity argument.      
    *                                                                     
    * @param minCapacity the desired minimum capacity                     
    * @throws OutOfMemoryError if minCapacity is less than zero           
    */                                                                    
   private Object[] grow(int minCapacity) {                               
       return elementData = Arrays.copyOf(elementData,                    
                                          newCapacity(minCapacity));      
   }                                                                      
                                                                          
   private Object[] grow() {                                              
       return grow(size + 1);                                             
   }                                                                      
                                                                          
   /**                                                                    
    * Returns a capacity at least as large as the given minimum capacity. 
    * Returns the current capacity increased by 50% if that suffices.     
    * Will not return a capacity greater than MAX_ARRAY_SIZE unless       
    * the given minimum capacity is greater than MAX_ARRAY_SIZE.          
    *                                                                     
    * @param minCapacity the desired minimum capacity                     
    * @throws OutOfMemoryError if minCapacity is less than zero           
    */                                                                    
   private int newCapacity(int minCapacity) {                             
       // overflow-conscious code                                         
       int oldCapacity = elementData.length;                              
       int newCapacity = oldCapacity + (oldCapacity >> 1);                
       if (newCapacity - minCapacity <= 0) {                              
           if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA)          
               return Math.max(DEFAULT_CAPACITY, minCapacity);            
           if (minCapacity < 0) // overflow                               
               throw new OutOfMemoryError();                              
           return minCapacity;                                            
       }                                                                  
       return (newCapacity - MAX_ARRAY_SIZE <= 0)                         
           ? newCapacity                                                  
           : hugeCapacity(minCapacity);      
   }                              
```
当ArrayList容量不够时，默认需要增加一个元素的长度。在实际执行过程中，是扩容到之前容量的1.5倍，然后判断是否超过最大限制，超过则报内存溢出错误。在扩容过程中，最大不得超过MAX_ARRAY_SIZE，即ArrayList的最大长度。

由此可见，向ArrayList插入元素时，当元素个数小于实际容量大小时，只要进行部分数组的拷贝工作，容量已满时，需要扩容则要将ArrayList的所有元素拷贝到新建数组中，这个步骤是比较耗时的。元素的插入确实不是ArrayList的强项。

### 查找 修改元素
查询和修改实际是通过下标来访问和修改数组元素，时间复杂度只有O(1)，相对于LinkedList和其他容器，都具有绝对的速度优势。
```java
   /**                                                                                  
    * Returns the element at the specified position in this list.                       
    *                                                                                   
    * @param  index index of the element to return                                      
    * @return the element at the specified position in this list                        
    * @throws IndexOutOfBoundsException {@inheritDoc}                                   
    */                                                                                  
   public E get(int index) {                                                            
       Objects.checkIndex(index, size);                                                 
       return elementData(index);                                                       
   }                                                                                    
                                                                                        
   /**                                                                                  
    * Replaces the element at the specified position in this list with                  
    * the specified element.                                                            
    *                                                                                   
    * @param index index of the element to replace                                      
    * @param element element to be stored at the specified position                     
    * @return the element previously at the specified position                          
    * @throws IndexOutOfBoundsException {@inheritDoc}                                   
    */                                                                                  
   public E set(int index, E element) {                                                 
       Objects.checkIndex(index, size);                                                 
       E oldValue = elementData(index);                                                 
       elementData[index] = element;                                                    
       return oldValue;                                                                 
   }                                                                                    

```
只是进行下标检测，获取或者替换指定index位置的元素。

### 删除元素 
删除元素对ArrayList来说也有一定的工作量，需要将指定index位置以后的元素统统向前移位，如果ArrayList较长且删除元素的位置靠前，这就是一个比较耗时的操作了
```java
   /**                                                                                
    * Removes the element at the specified position in this list.                     
    * Shifts any subsequent elements to the left (subtracts one from their            
    * indices).                                                                       
    *                                                                                 
    * @param index the index of the element to be removed                             
    * @return the element that was removed from the list                              
    * @throws IndexOutOfBoundsException {@inheritDoc}                                 
    */                                                                                
   public E remove(int index) {                                                       
       Objects.checkIndex(index, size);                                               
                                                                                      
       modCount++;                                                                    
       E oldValue = elementData(index);                                               
                                                                                      
       int numMoved = size - index - 1;                                               
       if (numMoved > 0)                                                              
           System.arraycopy(elementData, index+1, elementData, index,                 
                            numMoved);                                                
       elementData[--size] = null; // clear to let GC do its work                                                                                              
       return oldValue;                                                               
   }                                                                                  
```
这里还需要注意，实际上，删除元素时，并没有新建一个数组将原数组拷贝进去，而拷贝元素后将原先末尾的位置置为null并且减小size。这里再提出一个问题，将数组元素的最后一位设为null后，虚拟机会对该位置进行垃圾回收吗，数组的实际长度变化了吗？

### 列表销毁
最后看ArrayList的销毁。销毁比较简单，只是把数组各元素置为null，并且将size设为0。
```java
  /**                                                              
   * Removes all of the elements from this list.  The list will    
   * be empty after this call returns.                             
   */                                                              
  public void clear() {                                            
      modCount++;                                                  
      final Object[] es = elementData;                             
      for (int to = size, i = size = 0; i < to; i++)               
          es[i] = null;                                            
  }                                                                
```
## 小结
容器最重要的功能是存储和获取元素，本文从源码角度介绍了ArrayList的增删改查和原理，ArrayList还有一些其他未提到的特性，将在后面的文章中展示。
