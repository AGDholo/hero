---
id: vue-cli-4
title: Vue CLI 4 安装
sidebar_label: Vue CLI 4 安装
date: 2020-05-18 06:39:00
meta:
  - name: description
    content: 使用 vue cli 来安装 vuetify 项目
  - name: keywords
    content: vue vue-cli vuetify 安装 初学者
---

[Vue CLI](https://cli.vuejs.org/) 是一个快速初始化 Vue 项目的工具，非常简单易于上手。

## 安装 Vue CLI 4

```shell
$ npm install -g @vue/cli

# 或者
$ yarn global add @vue/cli
```

## 检查安装是否成功

```shell
$ vue -V
# @vue/cli 4.2.2 或类似版本号输出
```

## 初始化项目

```shell
$ cd 你自己想要创建的项目位置
# 在命令行下，cd 的作用就是将当前作用域移动到对应的目录

$ vue create my-app
# 使用 Vue CLI 创建一个名为 my-app 的项目，my-app 这个名字也可以自行随意替换

$ cd my-app
# 进入到 my-app 目录

$ vue add vuetify
# 添加 vuetify 插件，vuetify 插件会自动帮你配置你所有需要的一切，所以直接添加即可
```

## 启动项目

```shell
$ cd my-app
# 将命令行目录切换到刚刚创建的项目位置，my-app 对应为上面安装时候创建的名字

$ npm run serve
# 使用 npm 启动项目

$ yarn serve
# 如果你使用的是 yarn 包管理，则键入这一行
```

启动完成之后，终端会显示一串类似于以下的代码：

```shell
  App running at:
  - Local:   http://localhost:8081/
  - Network: http://192.168.123.205:8081/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

那么我们只需要进入对应的 _Local_ 域名，即可开始本地的开发
