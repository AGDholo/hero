---
title: 设置 Vuetify SASS 变量
id: variables
sidebar_label: 初始化
date: 2020-05-18 07:00:00
description: vuetify 小技巧之如何利用 SASS 变量设置 vuetify 全局背景色
keywords:
  - vue
  - vuetify教程
  - vue教程
  - sass变量 
  - vuetify怎么用
  - vuetify变量
  - vuetify设置sass变量
  - vuetify小技巧
  - 小技巧
---

Vuetify-loader 已经为我们处理好了一切，我们只需要创建一个变量文件即可

官方文档导航：

- SASS 变量： [https://vuetifyjs.com/customization/sass-variables](https://vuetifyjs.com/customization/sass-variables)

- 可用的变量列表：[https://vuetifyjs.com/customization/sass-variables/#variable-api](https://vuetifyjs.com/customization/sass-variables/#variable-api)

在单个组件文档的 API 里面，也可以找到 SASS 选项

## Vue CLI 项目设置

```scss title="src\scss\variables.scss"
/* 设置项目的基础根字体大小 */
$font-size-root: 30px;
```

## 检查效果

启动项目：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="npm"
  groupId="operating-systems"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```shell title="shell"
npm run serve
```

</TabItem>
<TabItem value="yarn">

```shell title="shell"
yarn serve
```

</TabItem>
</Tabs>

然后再访问首页，即可看到字体大小的变化
