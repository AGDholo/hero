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
};
