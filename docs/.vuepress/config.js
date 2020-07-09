module.exports = {
  title: "Errison's blog center",
  description: '不负光阴不负卿',
  dest: 'dist',
  plugins: [
    [
        '@vuepress/search',
          {
            searchMaxSuggestions: 10
          }
    ],
    [
        '@vuepress/pwa',
            {
              serviceWorker: true,
              updatePopup: {
                message: "发现新内容",
                buttonText: "刷新"
              }
            }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-172114031-1'
      }
    ],
  ],

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
            })();
            `
    ],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs',
        icon: 'reco-message',
        items: [
          { text: 'blog-setting', link: '/docs/blog-setting/' },
          { text: 'atittude', link: '/docs/atittude/' }
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

    sidebarDepth: 2,
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

    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'r6o8BYsCAFqvRFP0OPLl7bk5-gzGzoHsz',// your appId
      appKey: 'cNGiIw55BEnEWYtIWUngp3dx', // your appKey

      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true, //
      recordIP: true,
      showComment: false
    },
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
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
    startYear: '2020',


    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },



    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }

    // github配置
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
     repo: 'https://github.com/qisong3/Techblog.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
     repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/qisong3/Techblog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Edit this page！'
  },

  // code theme
  codeTheme: 'tomorrow',

  markdown: {
    lineNumbers: true
  }
}
