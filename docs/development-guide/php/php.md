---
id: php
title: PHP
sidebar_label: PHP
date: 2020-08-10 04:15:00
---

PHP（全称：PHP：Hypertext Preprocessor，即“PHP：超文本预处理器”）是一种开源的通用计算机脚本语言，尤其适用于网络开发并可嵌入HTML中使用。PHP的语法借鉴吸收C语言、Java和Perl等流行计算机语言的特点，易于一般程序员学习。PHP的主要目标是允许网络开发人员快速编写动态页面，但PHP也被用于其他很多领域。

## 安装（Windows）

### 方式一：Chocolatey（推荐）

> 请先阅读 [Chocolatey](chocolatey)

键入命令  
~~~PowerShell
choco install php
~~~

如果你使用的是 apache（阿帕奇），请安装线程安全版

键入命令  
~~~PowerShell
choco install php --package-parameters='"/ThreadSafe "'
~~~

#### 包管理器

键入命令  
~~~PowerShell
choco install composer
~~~

### 方式二：GUI

等待编写

## 运行

安装完成之后，关闭当前所有命令行并运行 `PowerShell` 并键入命令出现如下类似内容则表示安装成功  
~~~PowerShell
> php -v
PHP 7.3.7 (cli) (built: Jul  2 2019 13:41:47) ( NTS MSVC15 (Visual C++ 2017) x64 )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.3.7, Copyright (c) 1998-2018 Zend Technologies

> composer -V
Composer version 1.9.0 2019-08-02 20:55:32
~~~

## 配置 Composer 镜像（中国大陆地区）

键入命令  
~~~PowerShell
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
~~~