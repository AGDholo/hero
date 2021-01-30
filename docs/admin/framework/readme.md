---
id: readme
title: "安装 Hero Admin Laravel 程序"
sidebar_label: "安装 Hero Admin Laravel"
date: 2021-01-31 00:14:00
description: Hero Admin Laravel 程序的安装步骤介绍等。
keywords:
- hero-admin
- heroadmin
- framework
- 开发框架
- 业务框架
- 安装
---

:::info 提示
当前项目处于快速迭代过程中，任何 API 或功能都会发生更改，仅供预览使用。
:::

介绍：该项目底层使用 PHP 和 Laravel 框架构成。

项目地址：https://github.com/hero-admin/hero-admin-laravel

前置条件
- PHP
- Composer
- Mysql

在本地安装
1. 克隆项目到本地：git clone https://github.com/hero-admin/hero-admin-laravel
2. 切换到开发者分支： git checkout dev
3. 键入 composer install
   启动项目
4. 直接运行 php artisan hero:install
5. 命令行会提示是否要进行迁移等，全部输入 YES
6. 运行 php artisan serve 即可开始调试

