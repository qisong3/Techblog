const ThemeConfig = require('./config/theme.config')
const PluginConfig = require('./config/plugin.config')

module.exports = {
    title: "Errison's blog center",
    description: '不负光阴不负卿',
    dest: 'dist',
    plugins: PluginConfig,
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
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
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    theme: 'reco',
    themeConfig: ThemeConfig,
    // code theme
    codeTheme: 'tomorrow',
    markdown: {
        lineNumbers: true
    }
}
