---
id: 2-3-development-guide
title: 开发环境搭建
sidebar_label: 2.3 开发环境搭建
date: 2020-08-11 17:39:00
description: 搭建与本书一致的开发环境来获得良好的阅读体验。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 开发环境
  - 免费书籍
---

你可以参考本书作者编写的另一个 [环境搭建指南（推荐）](/docs/development-guide/introduction)

:::caution 警告

本章节以下部分所用的宝塔面板年代久远，5.x Windows 版本已经停止维护，所以以下内容可忽略，但是以下的安装步骤仍然可用（不推荐）  
宝塔面板是非强制性的，你也可以使用你自己喜欢的面板

:::

本书所有操作环境都使用 宝塔面板 ，<del>为了避免不一样的麻烦，请和笔者保持一致</del>。 本书涉及的软件都在官方网站进行下载安装，请不要使用未知来源的软件，如 百度云 或 各种网站 上下载的版本。

宝塔面板 是笔者线下和线上都在使用的一键部署及管理工具。 选用它主要有几点：

- 对新手及其友好，不需要掌握运作原理，也不需要掌握各类文件配置方法，只需要一条命令/一个安装包，即可实现部署
- 全中文化支持，所有设置选项都简单易读
- 商业支持，已经和阿里云达成合作，线上环境稳定，可以投入生产环境
- 更新频率高，各种补丁和新特性都会第一时间发布

## 安装宝塔面板

1. 进入 宝塔面板官网 ，选择 Windows 版，下载解压安装。
2. 安装完成后请点击 顶部栏-> 环境 ，安装所需软件(Nginx PHP Mysql).

## 配置 PHP

找到安装 宝塔面板 的根目录并且进入 `%:\BtSoft >>> %:\BtSoft\WebSoft\php\7.1`  
在本地计算机进入: 控制面板-> 系统和安全-> 系统

1. 点击左侧栏： 高级系统设置-> 环境变量
2. 编辑下方 系统变量 的 Path-> 新建-> 将前面打开的路径复制进去-> 保存并重启计算机

## Composer

打开 PowerShell/CMD 命令行工具，键入 php -v，出现所示的类似语句表示 php 环境正确配置:

```
PHP 7.1.2 (cli) (built: Feb 14 2017 21:38:39) ( NTS MSVC14 (Visual C++ 2015) x86 )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.1.0， Copyright (c) 1998-2017 Zend Technologies
```

若出现 `无法将“php”项识别为 cmdlet、函数、脚本文件或可运行程序的名称` 则环境变量没有正确配置，请检查路径并重新修改(保存后请务必重启计算机)

## 安装 Composer

依次键入以下命令：

1. 直接下载 composer.phar，地址：https://dl.laravel-china.org/composer.phar
2. 把下载的 composer.phar 放到 PHP 安装目录
3. 新建 composer.bat， 添加如下内容，并保存：@php "%~dp0composer.phar" %\*
4. 键入 `composer --version` 查看是否正确安装

## 配置镜像加速

众所周知的原因，Composer 在国内使用原生下载链接速度缓慢，键入命令即可使用，国外用户请忽略:  
`composer config -g repo.packagist composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/`
