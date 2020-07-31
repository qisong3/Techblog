const NavConfig = require('./config/nav.config')
const SidebarConfig = require('./config/sidebar.config')
const PluginConfig = require('./config/plugin.config')

module.exports = {
    title: "Errison's share",
    description: 'A place to share IT tech',
    theme: '@vuepress/theme-default',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
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
    ],
    plugins: PluginConfig,

    themeConfig: {


        copyRight: '@copyright2019-2020 Errison  ',
        nav: NavConfig,
        sidebar: SidebarConfig,
        sidebarDepth: 1,
        displayAllHeaders: false,
        activeHeaderLinks: true,
        smoothScroll: true,
        logo: '/logo.png',

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
        editLinkText: '在Github上编辑此页',
        // 备案信息
        recordLink: 'http://beian.miit.gov.cn',
        record: '备案号 京ICP备19057613号-1'
    },


}
