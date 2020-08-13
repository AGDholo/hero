/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  'vuetify2-tricks': [
    'vuetify2-tricks/introduction',
    {
      type: 'category',
      label: '安装框架  ',
      collapsed: false,
      items: [
        'vuetify2-tricks/install/init',
        'vuetify2-tricks/install/vue-cli-4',
      ],
    },
    {
      type: 'category',
      label: '性能优化',
      collapsed: false,
      items: [
        'vuetify2-tricks/optimizing/icon-cdn',
      ],
    },
    {
      type: 'category',
      label: '小技巧',
      collapsed: false,
      items: [
        'vuetify2-tricks/tricks/breakpoint',
        'vuetify2-tricks/tricks/center-content-vertically',
        'vuetify2-tricks/tricks/grid-vertically',
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
            'vuetify2-tricks/styling/sass/variables',
            'vuetify2-tricks/styling/sass/set-background-color'
          ]
        },
        {
          type: 'category',
          label: '全局主题',
          collapsed: false,
          items: [
            'vuetify2-tricks/styling/themes/setting',
            'vuetify2-tricks/styling/themes/usage'
          ]
        },
      ],
    },
    {
      type: 'category',
      label: '开发者',
      collapsed: true,
      items: [
        'vuetify2-tricks/development/local-deployment-documentation',
      ],
    },
    {
      type: 'category',
      label: '教程源码',
      collapsed: true,
      items: [
        'vuetify2-tricks/source-code/layout-source-code',
        'vuetify2-tricks/source-code/source-code',
        'vuetify2-tricks/source-code/tricks-sources-code',
      ],
    },
    {
      type: 'category',
      label: '开箱即用的主题/模板',
      collapsed: true,
      items: [
        'vuetify2-tricks/themes/agency',
        'vuetify2-tricks/themes/giraffe',
        'vuetify2-tricks/themes/shock',
      ],
    },
  ],

  'development-guide': [
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

  'thinkphp5.1-primer': [
    'thinkphp5.1-primer/readme',
    {
      type: 'category',
      label: '第一章.基础信息',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-1/1-2-about-author',
        'thinkphp5.1-primer/chapter-1/1-3-source-code',
        'thinkphp5.1-primer/chapter-1/1-4-issues',
        'thinkphp5.1-primer/chapter-1/1-5-security-guide',
        'thinkphp5.1-primer/chapter-1/1-6-donate',
      ],
    },
    {
      type: 'category',
      label: '第二章.开发环境布置',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-2/2-1-ide',
        'thinkphp5.1-primer/chapter-2/2-2-command-line-tool',
        'thinkphp5.1-primer/chapter-2/2-3-development-guide',
        'thinkphp5.1-primer/chapter-2/2-4-browser',
        'thinkphp5.1-primer/chapter-2/2-5-git-flow',
        'thinkphp5.1-primer/chapter-2/2-6-first-app',
      ],
    },
    {
      type: 'category',
      label: '第三章.构建页面',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-3/3-1-introduction',
        'thinkphp5.1-primer/chapter-3/3-2-static-page',
        'thinkphp5.1-primer/chapter-3/3-3-think-command',
        'thinkphp5.1-primer/chapter-3/3-4-summary',
      ],
    },
    {
      type: 'category',
      label: '第四章.优化页面',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-4/4-1-introduction',
        'thinkphp5.1-primer/chapter-4/4-2-style-beautification',
        'thinkphp5.1-primer/chapter-4/4-3-partial-view',
        'thinkphp5.1-primer/chapter-4/4-4-route-path',
        'thinkphp5.1-primer/chapter-4/4-5-user-signin',
        'thinkphp5.1-primer/chapter-4/4-6-layout-view',
        'thinkphp5.1-primer/chapter-4/4-7-summary',
      ],
    },
    {
      type: 'category',
      label: '第五章.用户模型',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-5/5-1-introduction',
        'thinkphp5.1-primer/chapter-5/5-2-database-migration',
        'thinkphp5.1-primer/chapter-5/5-3-datatable-view',
        'thinkphp5.1-primer/chapter-5/5-4-model',
        'thinkphp5.1-primer/chapter-5/5-5-summary',
      ],
    },
    {
      type: 'category',
      label: '第六章.用户注册',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-6/6-1-introduction',
        'thinkphp5.1-primer/chapter-6/6-2-signin-form',
        'thinkphp5.1-primer/chapter-6/6-3-data-validation',
        'thinkphp5.1-primer/chapter-6/6-4-error-text',
        'thinkphp5.1-primer/chapter-6/6-5-sign-success',
        'thinkphp5.1-primer/chapter-6/6-6-summary',
      ],
    },
    {
      type: 'category',
      label: '第七章.会话管理',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-7/7-1-introduction',
        'thinkphp5.1-primer/chapter-7/7-2-session',
        'thinkphp5.1-primer/chapter-7/7-3-user-signin',
        'thinkphp5.1-primer/chapter-7/7-4-user-signout',
        'thinkphp5.1-primer/chapter-7/7-5-summary',
      ],
    },
    {
      type: 'category',
      label: '第八章.用户CRUD',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-8/8-1-introduction',
        'thinkphp5.1-primer/chapter-8/8-2-refactor-code',
        'thinkphp5.1-primer/chapter-8/8-3-update-user',
        'thinkphp5.1-primer/chapter-8/8-4-permission-system',
        'thinkphp5.1-primer/chapter-8/8-5-show-users',
        'thinkphp5.1-primer/chapter-8/8-6-delete-user',
        'thinkphp5.1-primer/chapter-8/8-7-guest-mode',
        'thinkphp5.1-primer/chapter-8/8-8-beautify-pages',
        'thinkphp5.1-primer/chapter-8/8-9-summary',
      ],
    },
    {
      type: 'category',
      label: '第九章.微博CRUD',
      collapsed: false,
      items: [
        'thinkphp5.1-primer/chapter-9/9-1-introduction',
        'thinkphp5.1-primer/chapter-9/9-2-weibo-model',
        'thinkphp5.1-primer/chapter-9/9-3-show-weibo',
        'thinkphp5.1-primer/chapter-9/9-4-create-weibo',
        'thinkphp5.1-primer/chapter-9/9-5-weibo-list',
      ],
    },
  ],

  'lp01-laravel-primer': [
    'lp01-laravel-primer/readme',
    {
      type: 'category',
      label: '第一章.基础信息',
      collapsed: false,
      items: [
        'lp01-laravel-primer/chapter-1/1-1-about-author',
        'lp01-laravel-primer/chapter-1/1-2-source-code',
        'lp01-laravel-primer/chapter-1/1-3-issues',
        'lp01-laravel-primer/chapter-1/1-4-donate',
      ],
    },
  ],
};
