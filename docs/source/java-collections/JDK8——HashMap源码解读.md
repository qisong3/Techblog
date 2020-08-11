---
title: JDK8——HashMap源码解读
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - HashMap
keywords:
 - Java
 - HashMap

---
## 概述
HashMap是最常用的Java数据结构之一，是一个具有常数级别的存取速率的高效容器。相对于List，Set等，结构相对复杂，本篇我们先对HashMap的做一个基本说明，对组成元素和构造方法进行介绍。
## 继承关系 
首先看HashMap的继承关系，实现了Map接口，复制接口和序列化接口。
![HashMap继承](/images/java-source/hashmap-1.jpg)
HashMap继承自Map，Map作为一个<Key,Value>形式的容器类型，在实际应用中应用范围极其广泛。看以下Map接口的定义
![HashMap继承](/images/java-source/hashmap-2.jpg)

 Map接口定义了一些通用方法，包括插入，删除，替换，遍历元素等常规集合方法。这里有必要重要关注的有：
1. Entry接口：

Entry<K,V>是Map元素的组成形式，它是一个键值对，Key是Map的索引，Value是存储的元素。由于Key是为了便于快速查找，并且能够唯一标识，所以推荐使用不变类，如String来做键，若是自己实现的类，则必须重写hashcode和equals方法。Entry是Map元素的组成形式，可以并且只能通过iterator来遍历。

2. forEach方法：
```java 
    default void forEach(BiConsumer<? super K, ? super V> action) {
        Objects.requireNonNull(action);
        for (Map.Entry<K, V> entry : entrySet()) {
            K k;
            V v;
            try {
                k = entry.getKey();
                v = entry.getValue();
            } catch (IllegalStateException ise) {
                // this usually means the entry is no longer in the map.
                throw new ConcurrentModificationException(ise);
            }
            action.accept(k, v);
        }
    }
```
注意着是一个接口中的default方法。Java自1.8以后支持在接口中实现默认方法，不同于抽象方法，子类必须重新实现，default方法是开箱即用。这里可以看到，forEach方法是对Entry进行遍历并且执行指定操作。
## 组成元素
### 类实例变量
```java 
    /**
     * Entry数组
     */
    transient Node<K,V>[] table;
 
    /**
     * Entry集合
     */
    transient Set<Map.Entry<K,V>> entrySet;
 
    /**
     * Entry的数量
     */
    transient int size;
 
    /**
     * HashMap被修改的次数
     */
    transient int modCount;
 
    /**
     * 扩容阈值
     *
     */
    int threshold;
 
    /**
     * HashMap的装载因子
     *
     */
    final float loadFactor;
```
可以看到，这其中的变量和HashTable中基本一致，事实上，HashMap就是HashTable的去同步锁以及提升单节点效率的优化版。为何需要提生效率，一方面同步操作没有必要使用synchronisd这种重量级锁，另一方面，HashTable的设计方式可能会发生性能机具下降。

需要注意的变量关系是capability * loadFactor = threshold。翻译一下就是HashMap的扩容阈值是当前容量乘以承载因子。这个阈值不是table中的下标数量，而是整个HashMap已经装载的元素。
![HashMap继承](/images/java-source/hashmap-2.jpg)
当HashTable的Key碰撞了以后，会在单一Node节点处形成单向链表。所以假设Key选取的不是很合适，冲突很多，HashTable就退化成LinkedList了，查找效率和插入效率都剧烈下降，这也背离了设计的初衷。  
HashMap要如何解决这个问题呢，可以从下面定义的变量中一窥一二。
```java
    /**
     * The default initial capacity - MUST be a power of two.
     */
    static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16
 
    /**
     * The maximum capacity, used if a higher value is implicitly specified
     * by either of the constructors with arguments.
     * MUST be a power of two <= 1<<30.
     */
    static final int MAXIMUM_CAPACITY = 1 << 30;
 
    /**
     * The load factor used when none specified in constructor.
     */
    static final float DEFAULT_LOAD_FACTOR = 0.75f;
 
    /**
     * The bin count threshold for using a tree rather than list for a
     * bin.  Bins are converted to trees when adding an element to a
     * bin with at least this many nodes. The value must be greater
     * than 2 and should be at least 8 to mesh with assumptions in
     * tree removal about conversion back to plain bins upon
     * shrinkage.
     */
    static final int TREEIFY_THRESHOLD = 8;
 
    /**
     * The bin count threshold for untreeifying a (split) bin during a
     * resize operation. Should be less than TREEIFY_THRESHOLD, and at
     * most 6 to mesh with shrinkage detection under removal.
     */
    static final int UNTREEIFY_THRESHOLD = 6;
 
    /**
     * The smallest table capacity for which bins may be treeified.
     * (Otherwise the table is resized if too many nodes in a bin.)
     * Should be at least 4 * TREEIFY_THRESHOLD to avoid conflicts
     * between resizing and treeification thresholds.
     */
    static final int MIN_TREEIFY_CAPACITY = 64;
```
为了避免出现HashMap变链表，HashMap引入了红黑树。红黑树是一种尽量保持平衡的搜索二叉树，简单而言对红黑树的增删改查都可以再O(lgn)时间内完成，较链表的O(n)有了巨大的提升，详细了解见[红黑树维基百科](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)。

这些变量也说明了链表与红黑树相互转化的条件：

1 当链表长度超过TREEIFY_THRESHOLD时，同时满足capacity大于MIN_TREEIFY_CAPACITY时，链表转化为树；

2 当树节点少于UNTREEIFY_THRESHOLD时，从树转化为链表

### 构造函数
HashMap的初始化构造方法有四个，都是围绕initialCapacity和loadFactor这两个变量展开的，由此可见这两个变量的重要性，最后一个是根据已有的Map集合初始化新的Map。
```java 
    /**
     * Constructs an empty <tt>HashMap</tt> with the specified initial
     * capacity and load factor.
     *
     * @param  initialCapacity the initial capacity
     * @param  loadFactor      the load factor
     * @throws IllegalArgumentException if the initial capacity is negative
     *         or the load factor is nonpositive
     */
    public HashMap(int initialCapacity, float loadFactor) {
        if (initialCapacity < 0)
            throw new IllegalArgumentException("Illegal initial capacity: " +
                                               initialCapacity);
        if (initialCapacity > MAXIMUM_CAPACITY)
            initialCapacity = MAXIMUM_CAPACITY;
        if (loadFactor <= 0 || Float.isNaN(loadFactor))
            throw new IllegalArgumentException("Illegal load factor: " +
                                               loadFactor);
        this.loadFactor = loadFactor;
        this.threshold = tableSizeFor(initialCapacity);
    }
 
    /**
     * Constructs an empty <tt>HashMap</tt> with the specified initial
     * capacity and the default load factor (0.75).
     *
     * @param  initialCapacity the initial capacity.
     * @throws IllegalArgumentException if the initial capacity is negative.
     */
    public HashMap(int initialCapacity) {
        this(initialCapacity, DEFAULT_LOAD_FACTOR);
    }
 
    /**
     * Constructs an empty <tt>HashMap</tt> with the default initial capacity
     * (16) and the default load factor (0.75).
     */
    public HashMap() {
        this.loadFactor = DEFAULT_LOAD_FACTOR; // all other fields defaulted
    }
 
    /**
     * Constructs a new <tt>HashMap</tt> with the same mappings as the
     * specified <tt>Map</tt>.  The <tt>HashMap</tt> is created with
     * default load factor (0.75) and an initial capacity sufficient to
     * hold the mappings in the specified <tt>Map</tt>.
     *
     * @param   m the map whose mappings are to be placed in this map
     * @throws  NullPointerException if the specified map is null
     */
    public HashMap(Map<? extends K, ? extends V> m) {
        this.loadFactor = DEFAULT_LOAD_FACTOR;
        putMapEntries(m, false);
    }
```


## 关键算法
HashMap的增删改查，都离不开元素查找。
查找分两部分，一是确定元素在table中的下标，二是确定以指定下标元素为首的具体位置。可以抽象理解为二维数组，第一个通过哈希函数得来，第二个下标则是链表或红黑树来得到，下面分别来说。
### 哈希函数
说到HashMap，最值得引起注意的自然是接近常数级别的操作速度，大家也都知道是利用哈希表来实现。这里面就涉及到几个问题：

1 如何计算哈希；

2 如何设置哈希表；

3 哈希冲突后的处理方式。

首先是哈希函数，HashMap中最关键的函数之一。官方给的注释也比较详细。先简单说一下算法的实现。计算哈希是针对HashMap中节点Node<Key,Value>中的Key进行。每个对象都有各自的hashcode方法，计算其哈希值，直接用这个哈希值，再对哈希表长度取余不可以吗，简单高效。答案是可以，但是这样哈希碰撞比较厉害，这样将大大降低HashMap的速度，也浪费空间。

目前使用的方法是，使用算出来的哈希值高16位与低16位相亦或，按照官方注释：这是速度，通用性，bit位均匀分布的折中。这里的位运算和移位运算速度都很快，在不同平台上都能找到直接指令操作，同时保留了高位和地位的特性。

```java 
 
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
```
哈希函数不能单独来看。上一篇中我们说到，HashMap的初始大小DEFAULT_INITIAL_CAPACITY是为16，计算出来的哈希值肯定是不可能全塞进去的，如何确定一个Key究竟应该放到哪个下标中呢？
```java  
    int index = (length - 1) & hash；
```
方法是表长度减一与哈希值相与。这里又引出了另外一个问题，HashMap的长度设定，选择比初始值大的最小的2的正整数次幂，计算方法如下。
```java 
    /**
     * Returns a power of two size for the given target capacity.
     */
    static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }
```
这个方法如何计算出2的N次幂呢？2的N次幂是最高bit位为1，其他位为0的正整数，那么2的N次幂减一就是最高位变0，后面的都变成1。为了达成这个目的，这个算法首先计算了2的N次幂减一。一个正整数最高bit位肯定为1，右移一位相或后，最高两位都为1，再右移两位后与原数相与，最高四位都为1，以此类推。
因为int最多也就32位，这种方式保证了最后所有位都为1，加一后得到2的N次幂。有一个问题，为什么刚开始的时候要减一呢？是为了防止一开始就是个2的N次幂，这样就对不上了。这是一个很巧妙的算法。

再回到上面这个int index = (length - 1) & hash 计算下标的算法。有了上面的分析，很容易得到，length-1是2的N次幂减一，除最高位外都为1，用这个数与哈希值相与，实际上就是取哈希比特位上的值。
注意之前已经说了，哈希算出来的是高16位与低16位相亦，保留了高低位的特性，这样一来就能有效利用元素的哈希进行区分同时加快计算速度。
### 位置查找
通过上面的哈希函数和下标函数，可以准确找到元素所在下标。接下来就是找到具体所在位置。前面说到了，HashMap冲突后的解决方式有两种，冲突数量少时用链表，数量多时用红黑树。下面就分别来看这两种不同方式的查找。
```java 
    /**
     * Implements Map.get and related methods.
     *
     * @param hash hash for key
     * @param key the key
     * @return the node, or null if none
     */
    final Node<K,V> getNode(int hash, Object key) {
        // 结点表
        Node<K,V>[] tab;
        // 首结点，临时结点，表长，Key临时变量
        Node<K,V> first, e; int n; K k;
        // 查找下标
        if ((tab = table) != null && (n = tab.length) > 0 &&
            (first = tab[(n - 1) & hash]) != null) {
            // 先看首元素是否匹配
            if (first.hash == hash && 
                ((k = first.key) == key || (key != null && key.equals(k))))
                return first;
            // 按红黑树查找
            if ((e = first.next) != null) {
                if (first instanceof TreeNode)
                    return ((TreeNode<K,V>)first).getTreeNode(hash, key);
                // 按单向链表查找
                do {
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        return e;
                } while ((e = e.next) != null);
            }
        }
        return null;
    }
```
在上面的代码中，基本注释很清楚了，链表查找就是顺序查找，时间复杂度是O(n)。按红黑树查找的方式如下所示。
```java
        /**
         * Calls find for root node.
         */
        final TreeNode<K,V> getTreeNode(int h, Object k) {
            return ((parent != null) ? root() : this).find(h, k, null);
        }        
 
 
        /**
         * Finds the node starting at root p with the given hash and key.
         * The kc argument caches comparableClassFor(key) upon first use
         * comparing keys.
         */
        final TreeNode<K,V> find(int h, Object k, Class<?> kc) {
            TreeNode<K,V> p = this;
            do {
                int ph, dir; K pk;
                TreeNode<K,V> pl = p.left, pr = p.right, q;
                if ((ph = p.hash) > h)
                    p = pl;
                else if (ph < h)
                    p = pr;
                else if ((pk = p.key) == k || (k != null && k.equals(pk)))
                    return p;
                else if (pl == null)
                    p = pr;
                else if (pr == null)
                    p = pl;
                else if ((kc != null ||
                          (kc = comparableClassFor(k)) != null) &&
                         (dir = compareComparables(kc, k, pk)) != 0)
                    p = (dir < 0) ? pl : pr;
                else if ((q = pr.find(h, k, kc)) != null)
                    return q;
                else
                    p = pl;
            } while (p != null);
            return null;
        }
```
由于红黑树也是一个二叉搜索树，所以查询过程近似二分查找法，时间复杂度是O(logn)，比链表查找要快得多。有一篇介绍HashMap红黑树非常详细的博客可以参考[HashMap红黑树解析](https://www.cnblogs.com/mfrank/p/9227097.html)。

## 基本操作
对于一个容器来说，核心操作无外乎增删改查，HashMap也不例外。相对于其他操作，查找都是首先要做的，才能进行相应的修改删除等操作。前面一节介绍了HashMap的查找实现，下面分析剩下的操作就比较轻松了。

### 分配大小
首先来看重新分配大小的操作，这个是HashMap的基础操作，也是最关键的操作之一。
```java
    final Node<K,V>[] resize() {
        Node<K,V>[] oldTab = table;
        int oldCap = (oldTab == null) ? 0 : oldTab.length;
        int oldThr = threshold;
        int newCap, newThr = 0;
        if (oldCap > 0) {
            if (oldCap >= MAXIMUM_CAPACITY) {
                threshold = Integer.MAX_VALUE;
                return oldTab;
            }
            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                     oldCap >= DEFAULT_INITIAL_CAPACITY)
                newThr = oldThr << 1; // double threshold
        }
        else if (oldThr > 0) // initial capacity was placed in threshold
            newCap = oldThr;
        else {               // zero initial threshold signifies using defaults
            newCap = DEFAULT_INITIAL_CAPACITY;
            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
        }
        if (newThr == 0) {
            float ft = (float)newCap * loadFactor;
            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                      (int)ft : Integer.MAX_VALUE);
        }
        threshold = newThr;
        @SuppressWarnings({"rawtypes","unchecked"})
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
        table = newTab;
        if (oldTab != null) {
            for (int j = 0; j < oldCap; ++j) {
                Node<K,V> e;
                if ((e = oldTab[j]) != null) {
                    oldTab[j] = null;
                    if (e.next == null)
                        newTab[e.hash & (newCap - 1)] = e;
                    else if (e instanceof TreeNode)
                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                    else { // preserve order
                        Node<K,V> loHead = null, loTail = null;
                        Node<K,V> hiHead = null, hiTail = null;
                        Node<K,V> next;
                        do {
                            next = e.next;
                            if ((e.hash & oldCap) == 0) {
                                if (loTail == null)
                                    loHead = e;
                                else
                                    loTail.next = e;
                                loTail = e;
                            }
                            else {
                                if (hiTail == null)
                                    hiHead = e;
                                else
                                    hiTail.next = e;
                                hiTail = e;
                            }
                        } while ((e = next) != null);
                        if (loTail != null) {
                            loTail.next = null;
                            newTab[j] = loHead;
                        }
                        if (hiTail != null) {
                            hiTail.next = null;
                            newTab[j + oldCap] = hiHead;
                        }
                    }
                }
            }
        }
        return newTab;
    }
```
这个步骤分为两步，首先是扩容，针对的是存放结点的table，分以下几种情况：

1 原table是空的，初始化为DEFAULT_INITIAL_CAPACITY；

2 原table大小是MAXIMUM_CAPACITY的，不进行改动；

3 对table不符合上述两个条件的，扩容至二倍大小。

扩容是声明一个指定大小的新table，再往下就是初始化新table。初始化的方式分下面成几种情况：

1 对原先table中指定位置为null的，不作处理；

2 对原先table中指定位置只有一个元素的，则计算哈希和下标后重新填充到新table；

3 对原table中为红黑树结点的，分配到新数组中，下面会专门介绍；

4 对原table中指定位置为链表的，要先将链表拆分成两个链表，拆分的依据是(e.hash & oldCap) == 0 这个判断，为何使用这个条件呢？首先要确认，进入条件四的，都是table扩容两倍的，原因比较显而易见。
oldCap是2的N次方，也就是第N+1位比特位为1，剩下的为0，取下标计算时，最高位为0，剩下的为1，扩容后的newCap，第N+2位为1，取下标计算时N+1以下都为1，具体可以看下图。
![HashMap](/images/java-source/hashmap-4.jpg)
这里以HashMap默认大小16举例， 回到扩容时(e.hash & oldCap) == 0 这个判断条件，满足这个条件的，第5个比特位为0，扩容以后，计算e.hash & 31 == e.hash & 15，所以在新的table中位置不变。而不满足这个条件的，第五个比特位为1，扩容以后 e.hash & 31 == e.hash & 15 + 2^4，也就是位置增加了原先的oldCap大小。这就是根据这个判断条件将链表分为hi和low两个链表的依据lo链表位置为newTab[j] = loHead，hi链表位置为newTab[j + oldCap] = hiHead。不需要重新计算哈希直接得出在新table中的下标，而且保持了原先链表的顺序，可以说是很巧妙的设计了。

多说一句，在jdk7中，扩容以后链表的顺序是颠倒的，而且需要计算哈希和下标，对比而言，jdk8在这方面还是有提升的。

现在再回到条件3，原先结点是红黑树的情况，看看如何实现。
```java 
        /**
         * Splits nodes in a tree bin into lower and upper tree bins,
         * or untreeifies if now too small. Called only from resize;
         * see above discussion about split bits and indices.
         *
         * @param map the map
         * @param tab the table for recording bin heads
         * @param index the index of the table being split
         * @param bit the bit of hash to split on
         */
        final void split(HashMap<K,V> map, Node<K,V>[] tab, int index, int bit) {
            TreeNode<K,V> b = this;
            // Relink into lo and hi lists, preserving order
            TreeNode<K,V> loHead = null, loTail = null;
            TreeNode<K,V> hiHead = null, hiTail = null;
            int lc = 0, hc = 0;
            for (TreeNode<K,V> e = b, next; e != null; e = next) {
                next = (TreeNode<K,V>)e.next;
                e.next = null;
                if ((e.hash & bit) == 0) {
                    if ((e.prev = loTail) == null)
                        loHead = e;
                    else
                        loTail.next = e;
                    loTail = e;
                    ++lc;
                }
                else {
                    if ((e.prev = hiTail) == null)
                        hiHead = e;
                    else
                        hiTail.next = e;
                    hiTail = e;
                    ++hc;
                }
            }
 
            if (loHead != null) {
                if (lc <= UNTREEIFY_THRESHOLD)
                    tab[index] = loHead.untreeify(map);
                else {
                    tab[index] = loHead;
                    if (hiHead != null) // (else is already treeified)
                        loHead.treeify(tab);
                }
            }
            if (hiHead != null) {
                if (hc <= UNTREEIFY_THRESHOLD)
                    tab[index + bit] = hiHead.untreeify(map);
                else {
                    tab[index + bit] = hiHead;
                    if (loHead != null)
                        hiHead.treeify(tab);
                }
            }
        }
```
有了前面的基础，这一部分就很容易理解了。同样是依据(e.hash & oldCap) == 0 这个条件，将红黑树退化拆分为两个链表，然后根据元素是否够转化为红黑树的阈值，来决定是否要将链表转为红黑树。
### 插入元素
插入元素也是关键操作之一，也可以是替换元素，可以是当元素为空时插入，直接看代码。这里有几个条件需要注意一下，onlyIfAbsent是判断是否需要替换原结点，evict是标识是否是新建Map的状态，put方法的返回值是原Value值，而不是现在要插入的Value值。
```java 
 /**
     * Associates the specified value with the specified key in this map.
     * If the map previously contained a mapping for the key, the old
     * value is replaced.
     *
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.
     *         (A <tt>null</tt> return can also indicate that the map
     *         previously associated <tt>null</tt> with <tt>key</tt>.)
     */
    public V put(K key, V value) {
        return putVal(hash(key), key, value, false, true);
    }
 
    /**
     * Implements Map.put and related methods.
     *
     * @param hash hash for key
     * @param key the key
     * @param value the value to put
     * @param onlyIfAbsent if true, don't change existing value
     * @param evict if false, the table is in creation mode.
     * @return previous value, or null if none
     */
    final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                   boolean evict) {
        Node<K,V>[] tab; Node<K,V> p; int n, i;
        if ((tab = table) == null || (n = tab.length) == 0)
            n = (tab = resize()).length;
        if ((p = tab[i = (n - 1) & hash]) == null)
            tab[i] = newNode(hash, key, value, null);
        else {
            Node<K,V> e; K k;
            if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
                e = p;
            else if (p instanceof TreeNode)
                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
            else {
                for (int binCount = 0; ; ++binCount) {
                    // 链表最后一个元素
                    if ((e = p.next) == null) {
                        p.next = newNode(hash, key, value, null);
                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                            treeifyBin(tab, hash);
                        break;
                    }
                    // 插入Node的key和链表中元素的key相同
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        break;
                    p = e;
                }
            }
            if (e != null) { // existing mapping for key
                V oldValue = e.value;
                if (!onlyIfAbsent || oldValue == null)
                    e.value = value;
                afterNodeAccess(e);
                return oldValue;
            }
        }
        ++modCount;
        if (++size > threshold)
            resize();
        afterNodeInsertion(evict);
        return null;
    }
```
代码中有需要解释的地方， if (p.hash == hash && ((k = p.key) == key || (key != null && key.equals(k))))，p是table[index]的元素，这句话是比较要插入Node的Key和原Node的Key，为何需要两种判断条件呢？因为HashMap支持null值，null不能用equals比较，所以要先判断Key为null的情况。

插入分以下几种情况：

1 原table指定下标为空的，直接新建结点插入；

2 原结点是红黑树结点的，调用putTreeVal插入；

3 原结点是链表中的结点的，直接返回找到的结点，如果遍历链表也没找到，那就作为链表的末尾元素（链表超过阈值需要转化为红黑树）。

### 删除元素
有了前面的基础，删除元素就比较好分析了。删除元素同样返回的是该元素的Value值。
```java 
    /**
     * Removes the mapping for the specified key from this map if present.
     *
     * @param  key key whose mapping is to be removed from the map
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.
     *         (A <tt>null</tt> return can also indicate that the map
     *         previously associated <tt>null</tt> with <tt>key</tt>.)
     */
    public V remove(Object key) {
        Node<K,V> e;
        return (e = removeNode(hash(key), key, null, false, true)) == null ?
            null : e.value;
    }
 
    /**
     * Implements Map.remove and related methods.
     *
     * @param hash hash for key
     * @param key the key
     * @param value the value to match if matchValue, else ignored
     * @param matchValue if true only remove if value is equal
     * @param movable if false do not move other nodes while removing
     * @return the node, or null if none
     */
    final Node<K,V> removeNode(int hash, Object key, Object value,
                               boolean matchValue, boolean movable) {
        Node<K,V>[] tab; Node<K,V> p; int n, index;
        if ((tab = table) != null && (n = tab.length) > 0 &&
            (p = tab[index = (n - 1) & hash]) != null) {
            Node<K,V> node = null, e; K k; V v;
            if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
                node = p;
            else if ((e = p.next) != null) {
                if (p instanceof TreeNode)
                    node = ((TreeNode<K,V>)p).getTreeNode(hash, key);
                else {
                    do {
                        if (e.hash == hash &&
                            ((k = e.key) == key ||
                             (key != null && key.equals(k)))) {
                            node = e;
                            break;
                        }
                        p = e;
                    } while ((e = e.next) != null);
                }
            }
            if (node != null && (!matchValue || (v = node.value) == value ||
                                 (value != null && value.equals(v)))) {
                if (node instanceof TreeNode)
                    ((TreeNode<K,V>)node).removeTreeNode(this, tab, movable);
                else if (node == p)
                    tab[index] = node.next;
                else
                    p.next = node.next;
                ++modCount;
                --size;
                afterNodeRemoval(node);
                return node;
            }
        }
        return null;
    }
```
也是分了几种情况：

1. 没找到，返回null；

2. 元素就是table下标元素的，该下标置为空；

3. 链表元素的，遍历查找删除；

4. 在红黑树中的，遍历查找删除。

### 其他方法
介绍了前面HashMap的几个关键方法以后，剩下的要么是前面方法的演变，要么是比较显而易见的。

按Key查找元素，实际上和查找结点是一样的。
```java 
    /**
     * Returns <tt>true</tt> if this map contains a mapping for the
     * specified key.
     *
     * @param   key   The key whose presence in this map is to be tested
     * @return <tt>true</tt> if this map contains a mapping for the specified
     * key.
     */
    public boolean containsKey(Object key) {
        return getNode(hash(key), key) != null;
    }
```
按Value查找元素，这个方法比较简单粗暴，就是逐个遍历。
```java 
    /**
     * Returns <tt>true</tt> if this map maps one or more keys to the
     * specified value.
     *
     * @param value value whose presence in this map is to be tested
     * @return <tt>true</tt> if this map maps one or more keys to the
     *         specified value
     */
    public boolean containsValue(Object value) {
        Node<K,V>[] tab; V v;
        if ((tab = table) != null && size > 0) {
            for (int i = 0; i < tab.length; ++i) {
                for (Node<K,V> e = tab[i]; e != null; e = e.next) {
                    if ((v = e.value) == value ||
                        (value != null && value.equals(v)))
                        return true;
                }
            }
        }
        return false;
    }
```
清空HashMap，就是将table各个结点置为空。
```java 
    /**
     * Removes all of the mappings from this map.
     * The map will be empty after this call returns.
     */
    public void clear() {
        Node<K,V>[] tab;
        modCount++;
        if ((tab = table) != null && size > 0) {
            size = 0;
            for (int i = 0; i < tab.length; ++i)
                tab[i] = null;
        }
    }
```
## 小结
行文至此，HashMap基本介绍完了，简单做个小结。HashMap是一种增删改查操作近似于常数时间的容器，JDK1.8以后引入红黑树，较之前版本效率又有了较大的提升。但是需要注意的是，HashMap不是一个线程安全的容器，在多线程的环境下可能会出异常，如需要使用同步容器，请参见ConcurrentHashMap的使用。
