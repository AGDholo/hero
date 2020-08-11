---
title: 初始化全局主题
id: setting
sidebar_label: 初始化
date: 2020-05-18 07:00:00
description: vuetify 小技巧之如何设置 vuetify 主题
keywords:
  - vue
  - vuetify教程
  - vue教程
  - theme 
  - vuetify怎么用
  - 主题
  - 初学者
  - vuetify主题
  - vuetify设置主题
  - vuetify小技巧
  - 小技巧
---

非常简单的，我们只需要在插件初始化的时候注入主题配置就可以了。

官方文档导航：

- 主题配置： [https://vuetifyjs.com/customization/theme/](https://vuetifyjs.com/customization/theme/)

## Vue CLI 项目设置

```js title="src\plugins\vuetify.js"
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  // 添加主题配置
  theme: {
    dark: false, // 如果指定为 true，那么整个页面主题将为下面的 dark 配色
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#0000",
      },
    },
  },
});
```
