---
title: vuepress-低调不失风格的在线文档(博客)框架
date: 2020-07-10
last-update: 2020-07-13
tags:
 - vuepress
categories:
 - 技术
keywords:
 - vue 
 - vuepress
 - 博客 
---

[[toc]]

## vuepress简介
vuepress是大名鼎鼎的[vue](https://cn.vuejs.org/)框架的作者尤雨溪的又一力作，它基于vue，是一个极简静态网站
生成器。它的诞生初衷是为了支持 Vue 及其子项目的文档需求,后来由于其开箱即用的功能以及丰富的拓展，成为了很多人
创建在线文档或者技术博客的首选。下面就对在线文档，或者博客的搭建方式进行梳理。

### 搭建方式比较
  一般来说，开发人员如果要开设博客或者为项目搭建一个文档，有这么几种常用选择，对比如下:
  
  搭建方式|自定义形式|自主可控|复杂度|费用|样例|
  |:--:|:--:|:--:|:--:|:--:|:--:|
  |公共博客|低|低|低|无|[CSDN](https://blog.csdn.net/qisong3/article/details/85037769)，博客园，简书等|
  |公众号|低|低|低|无|微信公众号，支付宝公众号等|
  |自建前后台博客|低|低|低|高||
  |自建轻量级博客|低|低|低|低或无|[Errison's blog](https://blog.errison.cn)|

自建轻量级博客，不仅有很多现成可用的框架，而且几乎不需要任何成本(可直接在[github](https://github.com/)静态页或者[netlify](https://www.netlify.com/)上免费发布)，就成了很多人的首选。


## 为什么使用vuepress 
###  框架比较

1. Nuxt

VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。

2. Docsify / Docute

这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！

3. Hexo

Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。

4. GitBook

我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。


### 主题

vuepress的功能如果仅仅局限于此，则太过于简单，官方和开发者贡献了各种开箱即用的主题和插件，便于使用。


推荐几个比较优秀的主题：
 - [**vue原生主题**](https://www.vuepress.cn/)
 - [**reco**](https://www.recoluan.com/)
 - [**vdoing**](https://xugaoyi.com/)
::: tip
这些主题既都同时支持博客和文档的功能，还添加了标签管理等，十分方便，上手容易。
:::

### 插件

主题是网站的功能和呈现形式，插件则是为了实现某些功能，比较常用的插件总结如下：
  |插件名称|插件功能|官方介绍|
  |:--|:--|:--|
  |plugin-active-header-links|页面滚动时自动激活侧边栏链接的插件|[链接](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html)|
  |plugin-back-to-top|页面从任意位置回到头部|[plugin-back-to-to](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html)|
  |plugin-blog|分类：强大的分类系统让你快速将贴文分类。<br> 分页： 极其简单的开箱即用的分页功能。<br>客户端 API: 透过客户端 API 轻松地写一个博客主题。|[plugin-blog](https://vuepress-plugin-blog.ulivz.com/)|
  |plugin-google-analytics|页面插入谷歌分析脚本|[plugin-google-analytics](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html)|
  |plugin-medium-zoom|图片模态放大显示|[plugin-medium-zoom](https://github.com/francoischalifour/medium-zoom)|
  |plugin-pwa|页面支持pwa|[plugin-pwa](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)|
  |plugin-register-components|自动注册组件|[plugin-register-components](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-register-components.htm)|
  |plugin-search|基于 Headers 的搜索插件|[plugin-search](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-search.html)|
  |plugin-nprogress|进度条|[plugin-nprogress](https://github.com/rstacruz/nprogress)|
  |vuepress-plugin-export|将vuepress转换为一个pdf文档|[vuepress-plugin-export](https://github.com/ulivz/vuepress-plugin-export)||

## 后记
本文介绍了vuepress作为博客或者文档框架的优点。诚然，搭建vuepress，包括官方文档等晚上教程都有介绍，但搭建过程中，难免
有文档叙述不尽详细或者容易踩坑的地方，这篇[博客](从零开始搭建vuepress.md)将介绍一片vuepress从零搭建。
