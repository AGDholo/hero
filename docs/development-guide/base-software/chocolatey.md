---
id: chocolatey
title: Chocolatey
sidebar_label: Chocolatey
date: 2020-08-10 04:10:00
description: Chocolatey 是 Windows 下的包管理器，只需一行命令就能够完全自动化安装软件。
keywords:
  - Chocolatey
  - Windows
  - 自动化安装
  - 脚本安装
  - 无人值守
---

:::note 提示

Chocolatey 仅可在 Windows 平台使用

:::

## 介绍

Chocolatey 是 Windows 下的包管理器，只需一行命令就能够完全自动化安装软件。

## 安装

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="shell" groupId="dg-install-stystem" values={[ { label: '命令行安装', value: 'shell', }, { label: '图形安装', value: 'GUI', }, ] }>

<TabItem value="shell">

1. 使用管理员模式运行 PowerShell  
   ![eouu5j.png](https://s2.ax1x.com/2019/08/08/eouu5j.png)
2. 键入命令

```powershell title="PowerShell"
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System. Net. WebClient). DownloadString('https://chocolatey.org/install.ps1'))
```

3. 输入 `choco -v` 出现类似 `0.10.15` 内容表示安装成功

</TabItem>

<TabItem value="GUI">

:::info 提示

Chocolatey 仅支持命令行安装

:::

</TabItem>
</Tabs>

## 基本使用

:::note 注意

使用 Chocolatey 时需要**管理员模式**运行 PowerShell  
你可以在 https://chocolatey.org/packages 找到你需要的程序

:::

1. 使用管理员模式运行 PowerShell
2. 键入命令

```powershell title="PowerShell"
choco install powershell-core --install-arguments='"ADD_EXPLORER_CONTEXT_MENU_OPENPOWERSHELL=1 REGISTER_MANIFEST=1 ENABLE_PSREMOTING=1"'
```

3. 控制台会出现如下内容，请键入 A 并回车

```powershell title="PowerShell"
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): A
```

4. 安装完毕之后，在搜索框中键入 `PowerShell` 出现如图所示内容则安装成功  
   ![eoK5tJ.png](https://s2.ax1x.com/2019/08/08/eoK5tJ.png)
