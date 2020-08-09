---
id: center-content-vertically
title: 垂直居中
sidebar_label: 垂直居中
date: 2020-05-20 07:45:00
meta:
  - name: description
    content: 如何使用 vuetify 让内容垂直居中
  - name: keywords
    content: vue vuetify vertically center 布局 vuetify垂直居中 vuetify小技巧 初学者 小技巧
---

在 Vuetify2.0 版本中，布局组件从 _v-layout_ 更新为 _v-row_，但是核心都是基于 _flex_ 或 _grid_ 进行布局，所以我们只需要根据浏览器原生 API 以及官方文档，即可让内容垂直居中。

官方文档导航：

- 栅格（Grid）： [https://vuetifyjs.com/components/grids/](https://vuetifyjs.com/components/grids/)
- Flex： [https://vuetifyjs.com/styles/flex/](https://vuetifyjs.com/styles/flex/)

<br />

原生 CSS 文档导航：

- 栅格（Grid） MDN： [https://developer.mozilla.org/docs/Web/CSS/grid](https://developer.mozilla.org/docs/Web/CSS/grid)
- Flex MDN： [https://developer.mozilla.org/docs/Web/CSS/flex](https://developer.mozilla.org/docs/Web/CSS/flex)

## 使用 Grid 垂直居中

```html
<!-- fill-height 属性，将区块内容设置为 100%，这样才能够让页面可以在垂直方向居中 -->
<!-- 你也可以将 fill-height 作为 class 使用，以便应用到任何类上面，class="fill-height" -->
<v-container fill-height>
  <!-- align 属性，将内容块设置为垂直方向居中 -->
  <!-- justify 属性，将内容块设置为横向方向居中 -->
  <!-- 更多用例请查看官方文档 -->
  <v-row align="center" justify="center">
    <v-col></v-col>
  </v-row>
</v-container>
```
