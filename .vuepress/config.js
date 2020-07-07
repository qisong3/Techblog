module.exports = {
  title: "Errison's blog center",
  description: 'A blog with altitude',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 引入百度统计
    ['script', {}, 
            `var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b16f225f97b3c7e88a6ecd6e49d45b37";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            `
    ],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/qisong3', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '朝花熙拾',
        desc: '一个关于文学和历史的分享网站',
        email: 'qisong3@gmail.com',
        link: 'https://www.errison.cn'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Errison',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '@CopyRight 2019 Errison 备案号 京ICP备19057613号-1',
    // 备案链接
    recordLink: 'http://beian.miit.gov.cn',
    // 项目开始时间
    startYear: '2020'


    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },

  // code theme
  codeTheme: 'tomorrow',
  
  markdown: {
    lineNumbers: true
  }
}  
