---
id: pwsh
title: PowerShell Core
sidebar_label: PowerShell Core
date: 2020-08-13 04:12:00
description: PowerShell 是构建于 . NET 上基于任务的命令行 shell 和脚本语言。 PowerShell 可帮助系统管理员和高级用户快速自动执行用于管理操作系统（Linux、macOS 和 Windows）和流程的任务。使用 PowerShell 命令可以从命令行管理计算机。 PowerShell 提供程序可让你访问数据存储（如注册表和证书存储），与你访问文件系统一样方便。 PowerShell 具有丰富的表达式分析器和完全开发的脚本语言。
keywords:
  - git
  - 版本控制
  - 版本
  - 安装
---

:::note 介绍

PowerShell Core 是跨平台的 PowerShell 是构建于 . NET 上基于任务的命令行 shell 和脚本语言。 PowerShell 可帮助系统管理员和高级用户快速自动执行用于管理操作系统（Linux、macOS 和 Windows）和流程的任务。  
使用 PowerShell 命令可以从命令行管理计算机。 PowerShell 提供程序可让你访问数据存储（如注册表和证书存储），与你访问文件系统一样方便。 PowerShell 具有丰富的表达式分析器和完全开发的脚本语言。

:::

## 安装

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="shell" groupId="dg-install-stystem" values={[ { label: '命令行安装', value: 'shell', }, { label: '图形安装', value: 'GUI', }, ] }>

<TabItem value="shell">

:::info 前置条件

请先阅读 [Chocolatey](../base-software/chocolatey)

:::

键入命令：

```powershell title="PowerShell"
choco install powershell-core --install-arguments='"ADD_EXPLORER_CONTEXT_MENU_OPENPOWERSHELL=1 REGISTER_MANIFEST=1 ENABLE_PSREMOTING=1"'
```

</TabItem>
<TabItem value="GUI">

1. 进入 PowerShell Core 源代码仓库：https://github.com/PowerShell/PowerShell/releases/latest
2. 往下翻页并点击 `PowerShell-(xxx)-win-x64.msi`  
   ![eczDC8.png](https://s2.ax1x.com/2019/08/05/eczDC8.png)
3. 下载完成后运行软件，并点击下一步至如图红框处，请全部选中并安装  
   ![eczI8U.png](https://s2.ax1x.com/2019/08/05/eczI8U.png)

</TabItem>
</Tabs>

### 运行

- 在开始菜单中找到 PowerShell  
  ![eczXUx.png](https://s2.ax1x.com/2019/08/05/eczXUx.png)
- 搜索框中搜索 PowerShell  
  ![eczj56.png](https://s2.ax1x.com/2019/08/05/eczj56.png)
- 任意位置鼠标右键  
  ![eczxPK.png](https://s2.ax1x.com/2019/08/05/eczxPK.png)

## 基本命令

cd：切换目录  
例： `cd C:\Windows`  
![egpAOJ.png](https://s2.ax1x.com/2019/08/05/egpAOJ.png)

ls：列出当前目录文件  
例： `ls`  
![egpUtP.png](https://s2.ax1x.com/2019/08/05/egpUtP.png)
