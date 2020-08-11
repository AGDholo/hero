/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  docs: [
    'vuetify2/introduction',
    {
      type: 'category',
      label: '安装框架  ',
      collapsed: false,
      items: [
        'vuetify2/install/init',
        'vuetify2/install/vue-cli-4',
      ],
    },
    {
      type: 'category',
      label: '性能优化',
      collapsed: false,
      items: [
        'vuetify2/optimizing/icon-cdn',
      ],
    },
    {
      type: 'category',
      label: '小技巧',
      collapsed: false,
      items: [
        'vuetify2/tricks/breakpoint',
        'vuetify2/tricks/center-content-vertically',
        'vuetify2/tricks/grid-vertically',
      ],
    },
    {
      type: 'category',
      label: '样式修改',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'SASS 变量',
          collapsed: false,
          items: [
            'vuetify2/styling/sass/variables',
            'vuetify2/styling/sass/set-background-color'
          ]
        },
        {
          type: 'category',
          label: '全局主题',
          collapsed: false,
          items: [
            'vuetify2/styling/themes/setting',
            'vuetify2/styling/themes/usage'
          ]
        },
      ],
    },
    {
      type: 'category',
      label: '开发者',
      collapsed: true,
      items: [
        'vuetify2/development/local-deployment-documentation',
      ],
    },
    {
      type: 'category',
      label: '教程源码',
      collapsed: true,
      items: [
        'vuetify2/source-code/layout-source-code',
        'vuetify2/source-code/source-code',
        'vuetify2/source-code/tricks-sources-code',
      ],
    },
    {
      type: 'category',
      label: '开箱即用的主题/模板',
      collapsed: true,
      items: [
        'vuetify2/themes/agency',
        'vuetify2/themes/giraffe',
        'vuetify2/themes/shock',
      ],
    },
  ],

  docs2: [
    'development-guide/introduction',
    'development-guide/issues',
    'development-guide/donate',
    {
      type: 'category',
      label: '必备软件',
      collapsed: false,
      items: [
        'development-guide/base-software/chocolatey',
        'development-guide/base-software/vscode',
        'development-guide/base-software/git',
      ],
    },
    {
      type: 'category',
      label: 'Shell',
      collapsed: false,
      items: [
        'development-guide/shell/pwsh',
      ],
    },
    {
      type: 'category',
      label: 'PHP',
      collapsed: false,
      items: [
        'development-guide/php/introduction',
        'development-guide/php/laravel',
        'development-guide/php/thinkphp',
      ],
    },
  ],

  docs3: [
    'thinkphp5.1/readme',
    {
      type: 'category',
      label: '第一章.基础信息',
      collapsed: false,
      items: [
        'thinkphp5.1/chapter-1/1-2-about-author',
        'thinkphp5.1/chapter-1/1-3-source-code',
        'thinkphp5.1/chapter-1/1-4-issues',
        'thinkphp5.1/chapter-1/1-5-security-guide',
        'thinkphp5.1/chapter-1/1-6-donate',
      ],
    },
    {
      type: 'category',
      label: '第二章.开发环境布置',
      collapsed: false,
      items: [
        'thinkphp5.1/chapter-2/2-1-ide',
        'thinkphp5.1/chapter-2/2-2-command-line-tool',
        'thinkphp5.1/chapter-2/2-3-development-guide',
        'thinkphp5.1/chapter-2/2-4-browser',
        'thinkphp5.1/chapter-2/2-5-git-flow',
        'thinkphp5.1/chapter-2/2-6-first-app',
      ],
    },
    {
      type: 'category',
      label: '第三章.构建页面',
      collapsed: false,
      items: [
        'thinkphp5.1/chapter-3/3-1-introduction',
        'thinkphp5.1/chapter-3/3-2-static-page',
        'thinkphp5.1/chapter-3/3-3-think-command',
        'thinkphp5.1/chapter-3/3-4-summary',
      ],
    },
    {
      type: 'category',
      label: '第四章.优化页面',
      collapsed: false,
      items: [
        'thinkphp5.1/chapter-4/4-1-introduction',
        'thinkphp5.1/chapter-4/4-2-style-beautification',
        'thinkphp5.1/chapter-4/4-3-partial-view',
        'thinkphp5.1/chapter-4/4-4-route-path',
        'thinkphp5.1/chapter-4/4-5-user-signin',
        'thinkphp5.1/chapter-4/4-6-layout-view',
        'thinkphp5.1/chapter-4/4-7-summary',
      ],
    },
    {
      type: 'category',
      label: '第五章.用户模型',
      collapsed: false,
      items: [
        'thinkphp5.1/chapter-5/5-1-introduction',
        'thinkphp5.1/chapter-5/5-2-database-migration',
        'thinkphp5.1/chapter-5/5-3-datatable-view',
        'thinkphp5.1/chapter-5/5-4-model',
        'thinkphp5.1/chapter-5/5-5-summary',
      ],
    },
  ],
};
