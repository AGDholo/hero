---
id: nodejs
title: Node.js
sidebar_label: Node.js
date: 2020-08-24 16:38:00
description: Node.js 是能够在服务器端运行JavaScript 的开放源代码、跨平台 JavaScript 运行环境。
keywords:
  - node
  - nodejs
  - 安装node
  - 安装nodejs
  - 安装
---

:::note 简介

Node.js 是能够在服务器端运行JavaScript 的开放源代码、跨平台 JavaScript 运行环境。

:::

## 安装

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="shell" groupId="dg-install-stystem" values={[ { label: '命令行安装', value: 'shell', }, { label: '图形安装', value: 'GUI', }, ] }>

<TabItem value="shell">

:::info 前置条件

请先阅读 [Chocolatey](../base-software/chocolatey)

:::

```powershell title="PowerShell"
choco install nodejs
```

#### 安装包管理器

```powershell title="PowerShell"
choco install yarn
```

</TabItem>
<TabItem value="GUI">

等待编写

</TabItem>
</Tabs>

## 运行

安装完成之后，关闭当前所有命令行并运行 `PowerShell` 并键入命令出现如下类似内容则表示安装成功

```powershell title="PowerShell"
node -v
# v14.5.0

npm -v
# 6.14.7

yarn -v
# 1.22.4
```

## 配置包管理镜像（中国大陆地区）

```powershell title="PowerShell"
# npm
npm config set registry https://registry.npm.taobao.org

# yarn
yarn config set registry https://registry.npm.taobao.org/
```