/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'HeroUI',
  tagline:
    'HeroUI 提供免费下载的开源前端主题、模板和框架使用小技巧，指南和教程，帮助您学习更多关于前端、Vuetify 的设计和开发。',
  url: 'https://heroui.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'https://wx2.sbimg.cn/2020/08/10/oexuk.png',
  organizationName: 'HeroUI', // Usually your GitHub org/user name.
  projectName: 'HeroUI', // Usually your repo name.
  themeConfig: {
    plugins: ['@docusaurus/plugin-debug'],
    prism: {
      additionalLanguages: ['php', 'powershell', 'nginx', 'ini'],
    },
    googleAnalytics: {
      trackingID: 'UA-166899095-1',
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
        src: 'https://wx2.sbimg.cn/2020/08/10/oenDj.png',
      },
      items: [
        {
          href: 'https://theme.heroui.net',
          activeBasePath: 'docs',
          label: '全新！Vue 主题模板',
          position: 'left',
        },
        {
          label: 'ThinkPHP Primer 实战系列书籍',
          items: [
            {
              href: 'https://www.kancloud.cn/agdholo/tp6-p01',
              activeBasePath: 'docs',
              label: '全新！ThinkPHP 6 Primer 前后端分离实战入门 [01]',
            },
            {
              to: 'docs/thinkphp5.1-primer/readme',
              activeBasePath: 'docs',
              label: 'ThinkPHP 5.1 入门开发实战',
            },
          ],
        },
        {
          to: 'docs/development-guide/introduction',
          activeBasePath: 'docs',
          label: '开发环境搭建指南',
          position: 'left',
        },
        {
          to: 'docs/vuetify2-tricks/introduction',
          activeBasePath: 'docs',
          label: 'Vuetify2 技巧',
          position: 'left',
        },
        {
          to: 'docs/design-resources/readme',
          activeBasePath: 'docs',
          label: '设计资源',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AGDholo/hero/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/AGDholo/hero/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
