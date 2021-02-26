---
title: Java包装类源码解读
date: 2020-08-11
last-update: 2020-08-11
tags:
 - Java
 - Wrapper
keywords:
 - Java
 - Wrapper
 
---

## 概述

java中的包装类提供了将原始数据类型转换为对象，以及将对象转换为原始数据类型的机制。
自J2SE 5.0以来，自动装箱和取消装箱功能将原始对象和对象自动转换为原始数据类型。将原始数据类型自动转换为对象称为自动装箱，反之亦然。

java.lang包的八个类在java中称为包装类。八个包装类的列表如下：

<thead>
<tr>
<th>基本类型</th>
<th>包装类</th>
</tr>
</thead>
<tbody>
<tr>
<td>boolean</td>
<td>Boolean</td>
</tr>
<tr>
<td>char</td>
<td>Character</td>
</tr>
<tr>
<td>byte</td>
<td>Byte</td>
</tr>
<tr>
<td>short</td>
<td>Short</td>
</tr>
<tr>
<td>int</td>
<td>Integer</td>
</tr>
<tr>
<td>long</td>
<td>Long</td>
</tr>
<tr>
<td>float</td>
<td>Float</td>
</tr>
<tr>
<td>double</td>
<td>Double</td>
</tr>
</tbody>

包装类不仅是对基础类型的封装，还包含一些常用和基础的算法，值得研究源码以便深入了解。

## 包装类列表

[Integer](Integer.md)


