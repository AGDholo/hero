---
id: thinkphp
title: ThinkPHP
sidebar_label: ThinkPHP
date: 2020-08-10 04:17:00
---

## 介绍

ThinkPHP 是一个免费开源的，快速、简单的面向对象的轻量级PHP开发框架，是为了敏捷WEB应用开发和简化企业应用开发而诞生的。

## 安装（ThinkPHP 5.1）

> 请先阅读 [4.2 PHP](4.2PHP.md)

打开 PowerShell，键入命令  
~~~PowerShell
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
> cd desktop

# 在当前路径下创建一个 tp5 目录并自动安装 ThinkPHP 框架
> composer create-project topthink/think=5.1.* tp5
~~~

### 运行

打开 PowerShell，键入命令  
~~~PowerShell
# 进入刚刚创建好的目录
> cd tp5

# 启动内置服务器
> php think run

# 出现如下提示
ThinkPHP Development server is started On <http://127.0.0.1:8000/>
You can exit with `CTRL-C`

# 访问浏览器并进入地址 http://127.0.0.1:8000
~~~