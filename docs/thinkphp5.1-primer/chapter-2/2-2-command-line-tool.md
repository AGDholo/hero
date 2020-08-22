---
id: 2-2-command-line-tool
title: 命令行工具
sidebar_label: 2.2 命令行工具
date: 2020-08-11 17:38:00
description: 本书使用 Git 管理代码和进行版本控制，一些必备的命令行工具你需要掌握。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 命令行工具
  - 工具
  - git
  - 免费书籍
---

:::note 提示

本书使用 Git 管理代码和进行版本控制。 

:::

会涉及一些简单命令，不用担心，如果你完全按照本书的步骤进行，那完全不用担心！

本书涉及的软件都在官方网站进行下载安装，请不要使用未知来源的软件，如 百度云 或 各种网站 上下载的版本。 这对你的应用和开发环境有潜在危害。 为什么有危害？ XcodeGhost 事件: https://baike.baidu.com/item/XcodeGhost

## 下载安装

进入 Git 官方网站: https://git-scm.com/ 下载安装，安装时请不要改动安装路径，这可能会导致系统环境变量无法生效。

## 验证 Git 配置

打开 PowerShell/CMD ，键入

```shell title="shell"
git --version
```

若成功输出类似 `git version 2.16.0.windows.2，Git` 则表明环境变量已启用。  
若未成功输出，请转到本书 [2.3 开发环境搭建](2-3-development-guide) 参考配置 PHP 环境变量的方式配置 Git

## PowerShell/CMD

Windows 环境中已经自带了 PowerShell/CMD ，不需要额外安装。
