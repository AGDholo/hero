---
id: grid-vertically
title: 栅格垂直排列
sidebar_label: 栅格垂直排列
date: 2020-05-21 06:54:00
description: vuetify 小技巧之如何使用 vuetify 让栅格垂直排列
keywords:
  - vue
  - vuetify
  - grid
  - 栅格 
  - 初学者
  - vuetify栅格
  - vuetify垂直
  - vuetify小技巧
  - 小技巧
  - vuetify使用栅格
---

在官方文档的例子中，栅格是没有垂直排列的例子的，但是利用 Flex，我们就能很轻松的实现这样的布局。

官方文档导航：

- 栅格（Grid）： [https://vuetifyjs.com/components/grids/](https://vuetifyjs.com/components/grids/)
- Flex： [https://vuetifyjs.com/styles/flex/](https://vuetifyjs.com/styles/flex/)

<br />

原生 CSS 文档导航：

- 栅格（Grid） MDN： [https://developer.mozilla.org/docs/Web/CSS/grid](https://developer.mozilla.org/docs/Web/CSS/grid)
- Flex MDN： [https://developer.mozilla.org/docs/Web/CSS/flex](https://developer.mozilla.org/docs/Web/CSS/flex)

## 使用 Flex 垂直 Grid 排列

```html title="vue"
<!-- 只需要添加 class="flex-column" 这个类名即可让布局垂直排列 -->
<!-- 更多用例请查看 Flex 文档 -->
<v-row no-gutters class="flex-column">
  <v-col v-for="n in 3" :key="n" cols="12">
    One of three columns
  </v-col>
</v-row>
```
