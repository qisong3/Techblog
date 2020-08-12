---
title: vuepress简介&搭建
date: 2020-07-10
last-update: 2020-07-13
tags:
 - vuepress
 - blog
keywords:
 - vue 
 - vuepress
 - 博客 
---

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

## 搭建

### 脚手架搭建

下面的文章将会在一个已有项目中，建立一个vuepress的文档项目。

::: warning
首先确定已经安装好npm,yarn,nodejs，并且配好了环境变量。
请确保你的 Node.js 版本 >= 8。
:::

1. 建立一个基础项目

手动创建一个vuepress目录，进入目录并初始化项目。

``` bash
mkdir vuepress-demo && cd vuepress-demo
yarn init # 或者 npm init
``` 

2. 安装vuepress

将 VuePress 作为一个本地依赖安装，同时安装默认主题
``` bash
yarn add -D vuepress # 或者：npm install -D vuepress
yarn add -D @vuepress/theme-vue 或者：npm install -D @vuepress/theme-vue
``` 
::: warning
如果在webpack3.x构建的项目中使用vuepress,推荐使用 [Yarn](https://classic.yarnpkg.com/lang/en/) 而不是npm作为包管理工具。
:::

在 package.json 里加一些脚本:
``` javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
``` 
3. 建立目录结构如下
::: tip
.<br>
├── docs<br>
│   ├── .vuepress _(用于存放全局的配置、组件、静态资源等)_<br>
│   │   ├── `public` _(静态资源目录)_<br>
│   │   ├── `config.js` _(配置文件的入口文件)_<br>
│   │<br>
│   ├── README.md _(首页)_<br>
│   ├── guide _(文档目录)_<br>
│   │   └── README.md _(guide首页)_<br>
│   │   └── FIRST.md _(guide首页)_<br>
│   │   └── SECOND.md _(guide首页)_<br>
│   └── config.md<br> _(config页面)_
│ 
└── package.json _(项目配置页面)_<br>
:::

::: warning
**不要按官网**建立完整的目录结构，对于不需要定制化修改主题的没有必要先把自己弄迷糊。
:::


### 内容编辑

至此，准备工作已经完成了，下面就是对页面的编辑了。需要注意的是，vuepress中的md文件即是默认生成
html页面的基础文件，每个目录下的README.md文件，即相当于当前页面的index.html。<br>
对于上述的目录结构，默认页面路由地址如下：

|    文件的相对路径   |  页面路由地址    |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |


在已经配置好目录文件的基础上，可以着手开始编写具体内容了。

首先编辑`./vuepress/config.js`,内容如下
``` javascript
module.exports = {
    title: 'Hello VuePress',
    description: 'My first vuepress demo!',
    theme: '@vuepress/vue',
}
```
主页`README.md`
``` bash
---
home: true
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
配置好这些，执行一下`uepress dev docs`

不出意外，就可以看到主页了，应该是空空如也，不过至此已经入门了。
![avatar](/images/从零开始搭建vuepress/empty_home.png)

### 主题配置
当然，一个空旷的主页是没法做文档或者博客的，下面我们需要稍加内容，让主页像vuepress的主页那样。
下面我们开始进行主题方面的配置。

首先设置导航栏，首先`.vuepress`目录下新建config文件夹，创建nav.config文件，内容如下
``` javascript
module.exports =
    [
        {
            text: 'guide nav',
            link: '/guide/'
        },
        {
            text: 'config nav',
            link: '/config.html'
        },
        {
            text: 'github',
            link: 'https://github.com/qisong3'
        }

    ]
```
再在`config.js`中引入即可。
``` javascript
const NavConfig = require('./config/nav.config')
...
themeConfig: {
    nav: NavConfig
}
```
其中每一个text对应的是导航标签的名称，link对应的是链接的地址，可以是内部的相对链接，也可以是外网链接。
点击导航栏的链接，即可进入相应的页面，不过此时，侧边栏还是空的，而且从guide的首页，也没法跳转到其他页面。

下面就是配置**侧边栏**。
config目录下建一个`sidebar.config`，内容如下
``` javascript
module.exports = {
    '/guide/': [{
        title: 'guide',
        collapse: false,
        children: [
            '/guide/FIRST',
            '/guide/SECOND',
            '/guide/THIRD'
        ]
    }]
}
```
再在`config.js`中引入
``` javascript
const SidebarConfig = require('./config/sidebar.config')
...
sidebar: SidebarConfig,
sidebarDepth: 2,            // 最多显示两级标签链接
displayAllHeaders: true,    // 展示所有目录
activeHeaderLinks: true     // 激活在点击的链接
```

这样就可以从侧边栏看到所有标签链接了，可是，是不是还是少了点什么?
目前每一篇文章还是割裂的，没法像官网中可以点击前一篇和后一篇文章，这个需要在具体文章中配置，以`FIRST.md`举例。
在文章开头的[Front Matter](https://vuepress.docschina.org/guide/markdown.html#front-matter)中设置。
``` javascript
---
title: guide first article
description: guide first article
prev: ./        // 前一页
next: ./SECOND  // 后一页
---
```
::: warning
注意:  如果配置了 `sidebar: 'auto'`,则只能在侧边栏显示当前的文章，没法看到所有文章的标题链接！
:::

至此，一篇官网格式的在线文档/博客已经搭建完毕，形式如下。
![avatar](/images/从零开始搭建vuepress/default_full.png)
本问所述的样例可以在[vuepress-demo](https://github.com/qisong3/vuepress-demo)找到。

### 博客主题推荐
使用vuepress生成一个在线文档是足够简洁和方便的，不过如果作为博客模板，缺少分类和标签还是略显不足。
这里推荐两款vuepress主题，可以直接用作博客搭建。
-[**vuepress-blog**](https://vuepress-theme-blog.ulivz.com/#intro) 官方的博客主题，有文档介绍，尤雨溪本人在用
-[**vuepress-reco**](https://https://vuepress-theme-reco.recoluan.com/) 着重推荐的主题，界面精美，功能齐全，文档清晰，
而且一直处于开发维护过程中，是建站的好选择。效果如[本站](https://blog.errison.cn)和[作者主页](https://www.recoluan.com/)。


