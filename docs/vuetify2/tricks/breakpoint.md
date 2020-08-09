---
id: breakpoint
title: 断点使用
sidebar_label: 断点使用
date: 2020-05-18 07:00:00
meta:
  - name: description
    content: vuetify 小技巧之如何使用 vuetify 断点
  - name: keywords
    content: vue vuetify breakpoint 断点 初学者 vuetify断点 vuetify小技巧 小技巧 vuetify使用断点
---

断点，英文名叫 breakpoint，其作用是检测页面宽度，判断是否在某个宽度之上或者之下

官方文档导航：

- 断点： [https://vuetifyjs.com/customization/breakpoints/](https://vuetifyjs.com/customization/breakpoints/)

## 简单使用

将下面代码嵌入到你的页面中，然后拖动窗口大小即可看到内容变化

```html
<!-- 简单使用 -->
<div>
  <!-- 判断当前宽度为 xs -->
  <v-btn v-if="$vuetify.breakpoint.xsOnly">xsOnly</v-btn>

  <!-- 判断当前宽度为 sm -->
  <v-btn v-if="$vuetify.breakpoint.smOnly">smOnly</v-btn>

  <!-- 判断当前宽度为 sm 和 sm 宽度之下的内容，也就是 xs sm -->
  <v-btn v-if="$vuetify.breakpoint.smAndDown">smAndDown</v-btn>

  <!-- 判断当前宽度为 sm 和 sm 宽度之上的内容，也就是 sm md lg xl -->
  <v-btn v-if="$vuetify.breakpoint.smAndUp">smAndUp</v-btn>

  <!-- 判断当前宽度为 md -->
  <v-btn v-if="$vuetify.breakpoint.mdOnly">mdOnly</v-btn>

  <!-- 判断当前宽度为 md 和 md 宽度之下的内容，也就是 xs sm md -->
  <v-btn v-if="$vuetify.breakpoint.mdAndDown">mdAndDown</v-btn>

  <!-- 判断当前宽度为 md 和 md 宽度之上的内容，也就是 md lg xl -->
  <v-btn v-if="$vuetify.breakpoint.mdAndUp">mdAndUp</v-btn>

  <!-- 判断当前宽度为 lg -->
  <v-btn v-if="$vuetify.breakpoint.lgOnly">lgOnly</v-btn>

  <!-- 判断当前宽度为 lg 和 lg 宽度之下的内容，也就是 xs sm md lg -->
  <v-btn v-if="$vuetify.breakpoint.lgAndDown">lgAndDown</v-btn>

  <!-- 判断当前宽度为 lg 和 lg 宽度之上的内容，也就是 lg xl -->
  <v-btn v-if="$vuetify.breakpoint.lgAndUp">lgAndUp</v-btn>

  <!-- 判断当前宽度为 xl -->
  <v-btn v-if="$vuetify.breakpoint.xlOnly">xlOnly</v-btn>
</div>
```

## 响应式布局中应用

案例：在导航栏中，存在多个按钮组件，但是在手机端的宽度下，这些按钮并不会自动消失，则会导致页面看起来不正常。

```html
<!-- 响应式布局中应用 -->
<div>
  <v-app-bar>
    <!-- 仅在 xs 宽度下才显示该组件 -->
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly"></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- md 和 md 宽度之上的才显示该组件 -->
    <v-btn icon v-if="$vuetify.breakpoint.mdAndUp">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</div>
```
