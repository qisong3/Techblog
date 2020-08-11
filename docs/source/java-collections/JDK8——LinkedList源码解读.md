---
title: JDK8——LinkedList源码解读
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
LinkedList继承自List，是一种常用的容器。虽然同为ArrayList和LinkedList同为List，但二者的实现方式完全不同，导致二者的性能和使用场景都有较大的不同，本文将从源码角度解析LinkedList。
![ArrayList继承](/images/java-source/linkedList-1.png)
LinkedList的类图关系如上图所示。简而言之，LinkedList是实现了可复制，可序列化的一种双向链表。虽然它同时实现了List和Deque接口，从内在基因上个人更倾向于将其归于双向队列。下面就从源码的角度看一看LinkedList的实现。

## 成员变量
```java
        /**
        *
        * LinkedList的结点
        */
        private static class Node<E> {
            E item;
            Node<E> next;
            Node<E> prev;
     
            Node(Node<E> prev, E element, Node<E> next) {
                this.item = element;
                this.next = next;
                this.prev = prev;
            }
        }
        
        // size of list
        transient int size = 0;
     
        /**
        *  Pointer to first node
        */
        transient Node<T> first；
        
        /**
        *  Pointer to lastnode
        */
        transient Node<T> last;   
```
 这里列出了几个关键的变量。首先重中之重是Node，即LinkedList的结点。每一个LinkedList由一个一个的Node连接起来。Node由三部分组成，前驱指针指向前一个Node，后继指针指向后面的Node，结点元素存储值。其他几个变量从字面上也都很容易理解。

## 函数解析

### 构造函数
```java
  /**
   * Constructs an empty list.
   */
  public LinkedList() {
  }
   
  /**
   * Constructs a list containing the elements of the specified
   * collection, in the order they are returned by the collection's
   * iterator.
   *
   * @param  c the collection whose elements are to be placed into this list
   * @throws NullPointerException if the specified collection is null
   */
  public LinkedList(Collection<? extends E> c) {
      this();
      addAll(c);
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
LinkedList的构造函数有两个，一个是从集合从生成List，一个是空的构造函数。对于空的构造函数，size初始化为0，首节点和尾结点都为空指针。
 
### 增删元素
LinkedList同时实现了List和Deque接口，这两种接口对数据的操作有不同的接口函数和表现形式，不过从本质上说，都是针对Node的操作，这里我们着重关注增加和删除结点，其他的接口都可以由此衍变而来。
 ```java
   /**
    * Inserts the specified element at the specified position in this list.
    * Shifts the element currently at that position (if any) and any
    * subsequent elements to the right (adds one to their indices).
    *
    * @param index index at which the specified element is to be inserted
    * @param element element to be inserted
    * @throws IndexOutOfBoundsException {@inheritDoc}
    */
   public void add(int index, E element) {
       checkPositionIndex(index);
    
       if (index == size)
           linkLast(element);
       else
           linkBefore(element, node(index));
   }
    
   /**
    * Inserts element e before non-null Node succ.
    */
   void linkBefore(E e, Node<E> succ) {
       // assert succ != null;
       final Node<E> pred = succ.prev;
       final Node<E> newNode = new Node<>(pred, e, succ);
       succ.prev = newNode;
       if (pred == null)
           first = newNode;
       else
           pred.next = newNode;
       size++;
       modCount++;
   }
    
   /**
    * Returns the (non-null) Node at the specified element index.
    */
   Node<E> node(int index) {
       // assert isElementIndex(index);
    
       if (index < (size >> 1)) {
           Node<E> x = first;
           for (int i = 0; i < index; i++)
               x = x.next;
           return x;
       } else {
           Node<E> x = last;
           for (int i = size - 1; i > index; i--)
               x = x.prev;
           return x;
       }
   }                                                                            

```
增加元素看add这个函数就够了。首先判断增加元素的下标是否合法，增加位置等于List长度则在尾结点后添加Node。更为一般的，则是在任意位置添加元素。添加时首先要找到这个结点要放置的位置，找位置的方式是先将List长度二分，然后根据index和二分位置的比较来决定是在前半部分还是后半部分遍历寻找。

由于LinkedList遍历需要从每一个结点找到指向下一个结点的指针，再如此循环，所以这种遍历比较耗时，时间复杂度为O(n)（n为List长度）。而在LinkedList的开头和结尾处添加元素则很快，只需要O(1)常数时间。

### 删除元素 
删除元素对ArrayList来说也有一定的工作量，需要将指定index位置以后的元素统统向前移位，如果ArrayList较长且删除元素的位置靠前，这就是一个比较耗时的操作了
```java
   /**
    * Removes the element at the specified position in this list.  Shifts any
    * subsequent elements to the left (subtracts one from their indices).
    * Returns the element that was removed from the list.
    *
    * @param index the index of the element to be removed
    * @return the element previously at the specified position
    * @throws IndexOutOfBoundsException {@inheritDoc}
    */
   public E remove(int index) {
       checkElementIndex(index);
       return unlink(node(index));
   }
    
   /**
    * Unlinks non-null node x.
    */
   E unlink(Node<E> x) {
       // assert x != null;
       final E element = x.item;
       final Node<E> next = x.next;
       final Node<E> prev = x.prev;
    
       if (prev == null) {
           first = next;
       } else {
           prev.next = next;
           x.prev = null;
       }
    
       if (next == null) {
           last = prev;
       } else {
           next.prev = prev;
           x.next = null;
       }
    
       x.item = null;
       size--;
       modCount++;
       return element;
   }                                                                                
```
删除结点同样也需要找到它的位置。如果前驱结点为空，说明是List首部，则后面的结点作为首结点。如果后续结点为空，则前驱结点作为List尾。如果在队列中间，则将前后两个结点连接起来，并将自身清空，缩短队列长度。

可以看到，删除的操作并不复杂，主要时间在查找结点位置上，同样也是O(n)的复杂度。


### 其他方法

```java
/**
 * Returns the element at the specified position in this list.
 *
 * @param index index of the element to return
 * @return the element at the specified position in this list
 * @throws IndexOutOfBoundsException {@inheritDoc}
 */
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}
 
/**
 * Replaces the element at the specified position in this list with the
 * specified element.
 *
 * @param index index of the element to replace
 * @param element element to be stored at the specified position
 * @return the element previously at the specified position
 * @throws IndexOutOfBoundsException {@inheritDoc}
 */
public E set(int index, E element) {
    checkElementIndex(index);
    Node<E> x = node(index);
    E oldVal = x.item;
    x.item = element;
    return oldVal;
}
 
/**
 * Adds the specified element as the tail (last element) of this list.
 *
 * @param e the element to add
 * @return {@code true} (as specified by {@link Queue#offer})
 * @since 1.5
 */
public boolean offer(E e) {
    return add(e);
}
 
/**
 * Pushes an element onto the stack represented by this list.  In other
 * words, inserts the element at the front of this list.
 *
 * <p>This method is equivalent to {@link #addFirst}.
 *
 * @param e the element to push
 * @since 1.6
 */
public void push(E e) {
    addFirst(e);
}
 
/**
 * Pops an element from the stack represented by this list.  In other
 * words, removes and returns the first element of this list.
 *
 * <p>This method is equivalent to {@link #removeFirst()}.
 *
 * @return the element at the front of this list (which is the top
 *         of the stack represented by this list)
 * @throws NoSuchElementException if this list is empty
 * @since 1.6
 */
public E pop() {
    return removeFirst();
}
                                                      
```
可以看到，常用的get，set方法，主要是在找元素的位置。其他如常见的队列方法，都是在add，remove的基础上做了封装。
## 小结
LinkedList是一个List，也是一个Deque，有较为丰富的接口。不同于ArrayList可以用下标找到地址，LinkedList的增删改查都需要遍历List，处理起来比较耗时，因此适用于经常对首尾元素操作且性能要求不高的场景。

此外，由于LinkedList是动态申请每一块内存，对内存的连续性要求不高，在虚拟机堆内存较少的情况下可以考虑使用。
