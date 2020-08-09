---
id: git
title: Git
sidebar_label: Git
date: 2020-08-10 04:11:00
---

Git 是一个分布式版本控制软件，最初由林纳斯·托瓦兹创作，于 2005 年以 GPL 发布。最初目的是为更好地管理 Linux 内核开发而设计。应注意的是，这与 GNU Interactive Tools（一个类似 Norton Commander 界面的文件管理器）有所不同。

Git 最初的开发动力来自于 BitKeeper 和 Monoton。Git 最初只是作为一个可以被其他前端（比如 Cogito 或 Stgit）包装的后端而开发的，但后来 Git 内核已经成熟到可以独立地用作版本控制。很多著名的软件都使用 Git 进行版本控制，其中包括 Linux 内核、X. Org 服务器和 OLPC 内核等项目的开发流程。

## 安装（Windows）

### 方式一：Chocolatey（推荐）

> 请先阅读 [2.2 Chocolatey](2.2Chocolatey.md)

键入命令 `choco install git`

### 方式二：GUI

1. 进入 VSCode 官网：https://git-scm.com/
2. 点击首页绿色大按钮 `Download 2.22.0 for Windows` 
![ecX3O1.png](https://s2.ax1x.com/2019/08/05/ecX3O1.png)
3. 下载完成后运行软件，并点击下一步至如图红框处，请选中 `Use Visual Studio Code as Git's default editor` 
![egCQqH.png](https://s2.ax1x.com/2019/08/05/egCQqH.png)

## 运行
安装完成之后，关闭当前所有命令行并运行 `PowerShell` 并键入命令 `git --version` ，出现如图所示的类似内容即安装成功  
![egCBZj.png](https://s2.ax1x.com/2019/08/05/egCBZj.png)

