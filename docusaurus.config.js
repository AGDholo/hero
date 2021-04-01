module.exports = {
  title: 'HeroUI',
  tagline:
    'HeroUI 提供免费下载的开源前端主题、模板和框架使用小技巧，指南和教程，帮助您学习更多关于前端、Vuetify 的设计和开发。',
  url: 'https://heroui.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: '/feather.svg',
  organizationName: 'HeroUI', // Usually your GitHub org/user name.
  projectName: 'HeroUI', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    plugins: ['@docusaurus/plugin-debug'],
    prism: {
      additionalLanguages: ['php', 'powershell', 'nginx', 'ini'],
    },
    googleAnalytics: {
      trackingID: '267580398',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: 'e5b607cd5573aa988709ba1c80231dfb',
      indexName: 'heroui',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    navbar: {
      title: 'HeroUI',
      logo: {
        alt: 'HeroUI',
        src: '/feather.png',
      },
      items: [
        {
          activeBasePath: 'docs/development-guide',
          label: '指南',
          position: 'right',
          items: [
            {
              to: 'docs/development-guide/introduction',
              activeBasePath: 'docs/development-guide',
              label: '开发环境搭建',
              position: 'right',
            },
            {
              to: 'docs/vuetify2-tricks/introduction',
              activeBasePath: 'docs/vuetify2-tricks',
              label: 'Vuetify2 技巧',
              position: 'right',
            },
          ],
        },

        {
          to: 'docs/design-resources/readme',
          activeBasePath: 'docs/design-resources',
          label: '设计资源',
          position: 'right',
        },
        {
          to: '/themes',
          activeBasePath: 'themes',
          label: 'Vue 主题模板',
          position: 'right',
        },
        {
          label: 'ThinkPHP 实战书籍',
          position: 'right',
          items: [
            {
              to: 'https://www.kancloud.cn/agdholo/tp6-p01',
              activeBasePath: 'docs',
              label: 'ThinkPHP 6 前后端分离实战入门（￥28）',
            },
            {
              to: 'docs/thinkphp5.1-primer/readme',
              activeBasePath: 'docs/thinkphp5.1-primer',
              label: 'ThinkPHP 5.1 入门开发实战',
            },
          ],
        },

        {
          label: '下一代业务框架',
          position: 'right',
          to: '/admin',
          items: [
            {
              to: '/admin',
              activeBasePath: 'admin',
              label: '介绍 Hero Admin',
            },
            {
              to: 'docs/admin/framework/readme',
              activeBasePath: 'docs/admin/framework',
              label: '后端框架文档（PHP）',
            },
            {
              to: 'docs/admin/ui/readme',
              activeBasePath: 'docs/admin/ui',
              label: '前端框架文档（Vue）',
            },
          ],
        },
        {
          href: 'https://github.com/AGDholo/hero',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: 'Vuetify2 教程',
              to: 'docs/vuetify2-tricks/introduction',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/P1kaP1kaChu_',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AGDholo/hero',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} HeroUI, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AGDholo/hero/tree/master',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          routeBasePath: 'docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
