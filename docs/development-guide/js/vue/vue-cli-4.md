---
id: vuecli4
title: Vue CLI 4
sidebar_label: Vue CLI 4
date: 2020-08-24 16:38:00
description: Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。
keywords:
  - vuecli
  - vue
  - 安装vuecli
  - 安装
---

:::note 简介

Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

:::

## 安装

:::info 前置条件

请先阅读 [Node.js](../nodejs)

:::

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="npm" groupId="operating-systems" values={[ { label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }, ] }>

<TabItem value="npm">


```powershell title="PowerShell"
npm install -g @vue/cli
```

</TabItem>
<TabItem value="yarn">

```powershell title="PowerShell"
yarn global add @vue/cli
```

</TabItem>
</Tabs>

## 运行

安装完成之后，关闭当前所有命令行并运行 `PowerShell` 并键入命令出现如下类似内容则表示安装成功

```powershell title="PowerShell"
vue -V
# @vue/cli 4.4.6
```