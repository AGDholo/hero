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
    {
      type: 'category',
      label: 'Vuetify2 教程',
      items: [
        'index',
        {
          type: 'category',
          label: '性能优化',
          collapsed: false,
          items: [
            'optimizing/icon-cdn',
          ],
        },
        {
          type: 'category',
          label: '小技巧',
          collapsed: false,
          items: [
            'tricks/breakpoint',
            'tricks/center-content-vertically',
            'tricks/grid-vertically',
          ],
        },
        {
          type: 'category',
          label: '样式修改',
          collapsed: false,
          items: [
            'styling/sass-variables',
            'styling/set-background-color'
          ],
        },
        {
          type: 'category',
          label: '教程源码',
          collapsed: true,
          items: [
            'source-code/layout-source-code',
            'source-code/source-code',
            'source-code/tricks-sources-code',
          ],
        },
        {
          type: 'category',
          label: '开发者',
          collapsed: true,
          items: [
            'development/local-deployment-documentation',
          ],
        },
        {
          type: 'category',
          label: '增强主题',
          collapsed: true,
          items: [
            'themes/agency',
            'themes/giraffe',
            'themes/shock',
          ],
        },
      ],
    },
  ]
};
