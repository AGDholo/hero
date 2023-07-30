---
id: laravel
title: Laravel
sidebar_label: Laravel
date: 2020-08-10 04:16:00
description: Laravel 是一个由 Taylor Otwell 所建立，免费的开源 PHP Web 框架，旨在实现的 Web 软件的 MVC 架构，并作为 CodeIgniter 的替代方案。其源代码托管于 GitHub，许可条款为 MIT 许可证。
keywords:
  - php
  - laravel
  - 安装laravel
  - 安装
---

:::note 介绍

Laravel 是一个由 Taylor Otwell 所建立，免费的开源 PHP Web 框架，旨在实现的 Web 软件的 MVC 架构，并作为 CodeIgniter
的替代方案。其源代码托管于 GitHub，许可条款为 MIT 许可证。

:::

## 安装

:::info 前置条件

:::

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="8-x" groupId="dg-install-laravel"
values={[ { label: '8.x', value: '8-x', }, { label: '7.x', value: '7-x', }, { label: '6.x', value: '6-x', }, ] }>

<TabItem value="8-x">

```powershell title="PowerShell"
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
cd desktop

# 在当前路径下创建一个 laravel 目录并自动安装 Laravel 框架
composer create-project --prefer-dist laravel/laravel laravel "8.*"
```

## 开启扩展

:::info 提示

Laravel 需要开启以下 PHP 扩展，我们推荐阅读 [PHP 搭建指南] 来学习如何开启扩展。  
PDO PHP 扩展是泛指一类数据库链接扩展，例如 pdo_sqlite、pdo_pgsql、pdo_mysql

:::

- PHP >= 7.3
- BCMath PHP 拓展
- Ctype PHP 拓展
- Fileinfo PHP 拓展
- JSON PHP 拓展
- Mbstring PHP 拓展
- OpenSSL PHP 拓展
- PDO PHP 拓展
- Tokenizer PHP 拓展
- XML PHP 拓展

</TabItem>
<TabItem value="7-x">

```powershell title="PowerShell"
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
cd desktop

# 在当前路径下创建一个 laravel 目录并自动安装 Laravel 框架
composer create-project --prefer-dist laravel/laravel laravel "7.*"
```

## 开启扩展

:::info 提示

Laravel 需要开启以下 PHP 扩展，我们推荐阅读 [PHP 搭建指南] 来学习如何开启扩展。  
PDO PHP 扩展是泛指一类数据库链接扩展，例如 pdo_sqlite、pdo_pgsql、pdo_mysql

:::

- PHP >= 7.2.5
- BCMath PHP 拓展
- Ctype PHP 拓展
- Fileinfo PHP 拓展
- JSON PHP 拓展
- Mbstring PHP 拓展
- OpenSSL PHP 拓展
- PDO PHP 拓展
- Tokenizer PHP 拓展
- XML PHP 拓展

</TabItem>
<TabItem value="6-x">

```powershell title="PowerShell"
# 你可以进入到任何你想进入的目录，只需要将 cd 后面的 desktop 换成其他路径即可。
cd desktop

# 在当前路径下创建一个 laravel 目录并自动安装 Laravel 框架
composer create-project --prefer-dist laravel/laravel laravel "6.*"
```

## 开启扩展

:::info 提示

Laravel 需要开启以下 PHP 扩展，我们推荐阅读 [PHP 搭建指南] 来学习如何开启扩展。  
PDO PHP 扩展是泛指一类数据库链接扩展，例如 pdo_sqlite、pdo_pgsql、pdo_mysql

:::

- PHP >= 7.2.5
- BCMath PHP 拓展
- Ctype PHP 拓展
- JSON PHP 拓展
- Mbstring PHP 拓展
- OpenSSL PHP 拓展
- PDO PHP 拓展
- Tokenizer PHP 拓展
- XML PHP 拓展

</TabItem>
</Tabs>

## 运行

```powershell title="PowerShell"
# 进入刚刚创建好的目录
cd laravel

# 启动内置服务器
php artisan serve

# 出现如下提示
Laravel development server started: <http://127.0.0.1:8000>

# 访问浏览器并进入地址 http://127.0.0.1:8000
```
