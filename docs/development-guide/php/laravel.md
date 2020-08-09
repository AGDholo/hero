---
id: laravel
title: Laravel
sidebar_label: Laravel
date: 2020-08-10 04:16:00
---

## 介绍

Laravel 是一个由 Taylor Otwell 所建立，免费的开源 PHP Web 框架，旨在实现的 Web 软件的 MVC 架构，并作为 CodeIgniter 的替代方案。其源代码托管于 GitHub，许可条款为 MIT 许可证。 

## 安装（Laravel）

> 请先阅读 [PHP](introduction)

打开 PowerShell，键入命令  
~~~PowerShell
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
> cd desktop

# 在当前路径下创建一个 laravel 目录并自动安装 Laravel 框架
> composer create-project --prefer-dist laravel/laravel laravel
~~~

### 运行

打开 PowerShell，键入命令  
~~~PowerShell
# 进入刚刚创建好的目录
> cd laravel

# 启动内置服务器
> php artisan serve

# 出现如下提示
Laravel development server started: <http://127.0.0.1:8000>

# 访问浏览器并进入地址 http://127.0.0.1:8000
~~~