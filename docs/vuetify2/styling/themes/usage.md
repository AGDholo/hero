---
title: 使用全局主题
id: usage
sidebar_label: 如何使用
date: 2020-05-18 07:00:00
description: vuetify 小技巧之如何使用 vuetify 主题
keywords:
  - vue
  - vuetify教程
  - vue教程
  - theme 
  - vuetify怎么用
  - 主题
  - 初学者
  - vuetify主题
  - vuetify使用主题
  - vuetify小技巧
  - 小技巧
---

如果我们已经设置了一个主题色，或者想在组件中使用框架默认的主题色，那么只需要很简单的应用类名即可

官方文档导航：

- 色彩表： [https://vuetifyjs.com/styles/colors/](https://vuetifyjs.com/styles/colors/)

## 组件 color 属性

对应的组件文档中，看到 props 那一栏，只需要搜索 color 关键词，即可列出所有可以设置颜色的属性，  
以下是几个例子：

```html title="vue"
<!-- 使用 color 属性添加颜色 -->
<v-btn color="primary">
  primary color
</v-btn>

<!-- 使用 background-color 属性添加颜色 -->
<v-tabs background-color="primary" color="accent">
  <v-tab>Item One</v-tab>
  <v-tab>Item Two</v-tab>
  <v-tab>Item Three</v-tab>
</v-tabs>
```

## 类名方法设置颜色

```html title="vue"
<!-- 类名方法设置颜色 -->
<v-btn class="primary">
  primary color
</v-btn>

<!-- 设置文字颜色 -->
<v-btn class="primary accent--text">
  text color
</v-btn>

<!-- 设置颜色亮度 -->
<v-btn class="primary darken-4">
  primary color
</v-btn>

<!-- 设置文字颜色亮度 -->
<v-btn class="primary accent--text text--darken-4">
  text color
</v-btn>
```
