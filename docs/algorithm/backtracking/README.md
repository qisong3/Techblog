---
title: 回溯(backtracking)算法类概述
description: 回溯(backtracking)算法类概述
date: 2021-02-21
last-update: 2021-02-21
---

## 概述

回溯算法实际上一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就 “回溯” 返回，尝试别的路径。回溯法是一种选优搜索法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为 “回溯点”。许多复杂的，规模较大的问题都可以使用回溯法，有“通用解题方法”的美称。

回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。

## 算法列表

下面是回溯一些经典题目。

[17. 电话号码的字母组合](17.%20电话号码的字母组合.md)<Badge text="中等" type="warning"/>

[22. 括号生成](22.%20括号生成.md)<Badge text="中等" type="warning"/>

[39. 组合总和](39.%20组合总和.md)<Badge text="中等" type="warning"/>

[51. N 皇后](51.%20N%20皇后.md)<Badge text="中等" type="warning"/>

