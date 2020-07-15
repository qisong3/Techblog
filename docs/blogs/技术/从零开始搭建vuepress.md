---
title: 从零开始搭建vuepress
date: 2020-07-13
last-update: 2020-07-15
tags:
 - vuepress
categories:
 - 技术
keywords:
 - vue 
 - vuepress
 - 博客 
---

## 前言

在之前的一篇[博客](vuepress-低调不失风格的在线文档(博客)框架.md)中介绍了vuepress作为博客或者文档的优点，这篇文章将使用vuepress从零开始搭建一篇
属于自己的在线文档(博客)。

## 原生主题搭建

在vuepress的[官网](https://www.vuepress.cn)，已经较为详尽的介绍了整个搭建过程，不过其中还是有一些不容易注意的地方或者容易踩坑之处，在后面的教程
中会特别提醒。

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
![avatar](/img/从零开始搭建vuepress/empty_home.png)

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
点击导航栏的链接，即可进入相应的页面，不过此时，侧边栏还是空的，而且从guide的首页，也没法跳转到其他页面。





### 一些提示与提醒



