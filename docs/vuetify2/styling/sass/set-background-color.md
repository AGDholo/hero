---
title: 设置背景色
id: set-background-color
sidebar_label: 设置背景色
date: 2020-05-20 08:13:00
description: vuetify 小技巧之如何利用 SASS 变量设置 vuetify 全局背景色
keywords:
  - vue
  - vuetify教程
  - vue教程
  - vuetify源码 
  - vuetify怎么用
  - vuetify主题
  - 主题
  - 背景色
  - vuetify背景色
  - 源码
  - sass变量
---

本节教程使用 SASS 变量来设置全局背景色，所以你首先需要阅读：

- [Vuetify SASS 变量设置](variables)

## 全局背景色变量

```scss title="src\scss\variables.scss"
/* 设置亮色主题全局背景色 */
$material-light: (
  "background": #e0e0e0
);

/* 设置暗色主题全局背景色 */
$material-dark: (
  "background": #263238
);
```

设置完成之后，刷新页面即可看到背景色的变化。
