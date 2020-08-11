---
title: 使用 CDN 加载图标
id: icon-cdn
sidebar_label: 使用 CDN 加载图标
date: 2020-05-19 08:03:00
description: vuetify 性能优化之如何使用 cdn 加载图标
keywords:
  - vue
  - vuetify
  - 性能优化 
  - 优化
  - vuetify图标 
  - cdn 
  - vuetify设置cdn 
  - vuetify性能优化
  - 初学者
---

Vuetify 默认使用 [@mdi](https://materialdesignicons.com/) 图标库，该库非常强大，图标种类众多，但是因为太过于丰富，所以整个图标库接近 1M，在线上环境中，如果服务器带宽不足，那么将会长时间加载该库，为了解决这个问题，在互联网应用中，我们只需要将该库使用公共 CDN 加载即可。

官方文档导航：

- 图标： [https://vuetifyjs.com/customization/icons/](https://vuetifyjs.com/customization/icons/)

## Vue CLI 项目设置

```js title="src/plugins/vuetify.js"
// 确保没有这一行，如果有，请删除
import '@mdi/font/css/materialdesignicons.css'
```

然后找到项目主入口静态文件：

```html title="public\index.html"
<head>
  ...
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
  />
</head>
```

检查 `package.json` 如果有 `@mdi/font` 这个库，键入以下命令移除：

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
npm uninstall @mdi/font
```

</TabItem>
<TabItem value="yarn">

```shell title="shell"
yarn remove @mdi/font
```

</TabItem>
</Tabs>
