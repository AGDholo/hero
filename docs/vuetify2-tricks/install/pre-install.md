---
id: init
title: 开发环境准备
sidebar_label: 开发环境准备
date: 2020-05-17 15:38:00
description: 准备前端开发环境，安装 nodejs 和配置 npm 镜像
keywords:
  - nodejs
  - npm镜像
  - 开发环境
  - 加速下载
---

你需要预先安装的软件：

1. 运行环境：[Node.js](https://nodejs.org/)
2. 代码编辑器：[Visual Studio Code](https://code.visualstudio.com/)

## 配置 Node.js

安装完成 Node.js 之后，在命令行内键入：

```shell title="shell"
# 12.16.1 或类似版本号输出
node -v

# 6.13.4 或类似版本号输出
npm -v
```

## 安装 yarn（可选）

请参考 [yarn 官方文档](https://classic.yarnpkg.com/zh-Hans/docs/install)

## 配置镜像加速下载

由于众所周知的原因，在国内使用 NPM/YARN 下载包的时候速度非常缓慢，我们只需要这一行命令即可配置成国内镜像节点来达到加速下载的目的：

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="npm" groupId="operating-systems" values={[ { label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }, ] }>

<TabItem value="npm">

```shell title="shell"
# 配置镜像
npm config set registry https://registry.npm.taobao.org

# 查看当前镜像地址
npm config get registry

# 取消镜像
npm config delete registry
```

</TabItem>
<TabItem value="yarn">

```shell title="shell"
# 配置镜像
yarn config set registry https://registry.npm.taobao.org/

# 查看当前镜像地址
yarn config get registry

# 取消镜像
yarn config delete registry
```

</TabItem>
</Tabs>
