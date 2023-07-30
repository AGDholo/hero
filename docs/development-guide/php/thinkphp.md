---
id: thinkphp
title: ThinkPHP
sidebar_label: ThinkPHP
date: 2020-08-10 04:17:00
description: ThinkPHP 是一个免费开源的，快速、简单的面向对象的轻量级PHP开发框架，是为了敏捷WEB应用开发和简化企业应用开发而诞生的。
keywords:
  - php
  - thinkphp
  - 安装thinkphp
  - 安装
---

:::note 简介

ThinkPHP 是一个免费开源的，快速、简单的面向对象的轻量级 PHP 开发框架，是为了敏捷 WEB 应用开发和简化企业应用开发而诞生的。

:::

## 安装

:::info 前置条件

:::

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="6-x" groupId="dg-install-thinkphp"
values={[ { label: '6.x', value: '6-x', }, { label: '5.1.x', value: '5-1-x', }, ] }>

<TabItem value="6-x">

```powershell title="PowerShell"
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
cd desktop

# 在当前路径下创建一个 tp 目录并自动安装 ThinkPHP 框架
composer create-project topthink/think tp "6.*"
```

</TabItem>
<TabItem value="5-1-x">

```powershell title="PowerShell"
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
cd desktop

# 在当前路径下创建一个 tp 目录并自动安装 ThinkPHP 框架
composer create-project topthink/think tp "5.1.*"
```

</TabItem>
</Tabs>

### 运行

```powershell title="PowerShell"
# 进入刚刚创建好的目录
cd tp

# 启动内置服务器
php think run

# 出现如下提示
ThinkPHP Development server is started On <http://127.0.0.1:8000/>
You can exit with `CTRL-C`

# 访问浏览器并进入地址 http://127.0.0.1:8000
```
