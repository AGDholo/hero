---
id: postman
title: Postman
sidebar_label: Postman
date: 2020-08-13 18:42:00
description: Postman 是一个 API 开发协作平台。它简化了协作构建 API 的步骤，从而可以更快更好地创建 API。
keywords:
  - postman
  - api
  - api测试
  - 测试
  - 安装
---

:::note 介绍
Postman 是一个 API 开发协作平台。它简化了协作构建 API 的步骤，从而可以更快更好地创建 API。
:::

## 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="shell"
  groupId="dg-install-stystem"
  values={[
    { label: '命令行安装', value: 'shell', },
    { label: '图形安装', value: 'GUI', },
  ]
}>
<TabItem value="shell">

:::info 前置条件
请先阅读 [Chocolatey](chocolatey)
:::

键入命令：

```powershell title="PowerShell"
choco install postman
```

</TabItem>
<TabItem value="GUI">

1. 进入 Postman 官网：https://www.postman.com/  
2. 点击右上角的黄色 Download 按钮  
3. 再次点击页面中部的黄色Download 按钮，并点击 Windows 64-bit
4. 等待下载安装完成
 

</TabItem>
</Tabs>

## 运行
安装完成之后，找到刚才安装好的 Postman 图标即可。  
如果第一次使用弹出登录但是你只想临时使用的话，直接关闭当前窗口重新打开，就不会要求登录了。