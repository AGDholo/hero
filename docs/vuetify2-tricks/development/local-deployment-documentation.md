---
title: 文档离线部署
sidebar_label: 文档离线部署
id: local-deployment-documentation
date: 2020-05-23 09:08:00
description: 如何离线部署 vuetify 官方文档
keywords:
  - vue
  - vuetify教程
  - vue教程
  - docs
  - vuetify怎么用
  - vuetify文档
  - 初学者
  - 离线部署
  - 部署
  - 文档部署
---

非常简单的，我们只需要拉取最新源码，然后键入几个命令即可部署。

官方文档导航：

- 贡献指南： [https://vuetifyjs.com/getting-started/contributing/](https://vuetifyjs.com/getting-started/contributing/)

## 拉取源码

```shell title="shell"
git clone https://github.com/vuetifyjs/vuetify.git
```

## 构建文档

:::info 须知

Vuetify 使用 yarn 管理包程序，所以你首先需要安装 yarn。

:::

```shell title="shell"
# 进入目录
cd vuetify

# 安装依赖
yarn

# 打包项目
yarn build
```

## 运行项目

```shell
# 从根目录运行命令行
# 运行文档
yarn dev docs

# 访问你的本地文档演示: http://localhost:8095
```
