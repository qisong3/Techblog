---
title: 数组类算法类概述
description: 数组类算法类概述
date: 2020-07-10
last-update: 2020-08-12
---

## 概述

数组是在程序设计中，为了处理方便， 把具有相同类型的若干元素按有序的形式组织起来的一种形式。

首先，数组会利用 索引 来记录每个元素在数组中的位置，且在大多数编程语言中，索引是从 0 算起的。我们可以根据数组中的索引，快速访问数组中的元素。事实上，这里的索引其实就是内存地址。

![leetcode-array-1](/images/algorithm-array/leetcode-array-1.png)

其次，作为线性表的实现方式之一，数组中的元素在内存中是 连续 存储的，且每个元素占用相同大小的内存。

例如对于一个数组 ['oranges', 'apples', 'bananas', 'pears', 'tomatoes']，为了方便起见，我们假设每个元素只占用一个字节，它的索引与内存地址的关系如下图所示。

![leetcode-array-2](/images/algorithm-array/leetcode-array-2.png)

在具体的编程语言中，数组的实现方式具有一定差别。比如 C++ 和 Java 中，数组中的元素类型必须保持一致，而 Python 中则可以不同。相比之下，Python 中的数组（称为 list）具有更多的高级功能。

## 算法列表

以下是数组的经典题目。


[4. 寻找两个正序数组的中位数](4.%20寻找两个正序数组的中位数.md)<Badge text="简单" type="tip"/>  

[15. 三数之和](15.%20三数之和.md)<Badge text="简单" type="tip"/> 

[26. 删除排序数组中的重复项](26.%20删除排序数组中的重复项.md)<Badge text="简单" type="tip"/>  

[80. 删除排序数组中的重复项 II](80.%20删除排序数组中的重复项%20II.md)<Badge text="中等" type="warning"/> 

[41. 缺失的第一个正数](41.%20缺失的第一个正数.md)<Badge text="中等" type="warning"/> 
