---
id: introduction
title: PHP
sidebar_label: PHP
date: 2020-08-10 04:15:00
description: PHP（全称：PHP：Hypertext Preprocessor，即“PHP：超文本预处理器”）是一种开源的通用计算机脚本语言，尤其适用于网络开发并可嵌入HTML中使用。PHP的语法借鉴吸收C语言、Java和Perl等流行计算机语言的特点，易于一般程序员学习。PHP的主要目标是允许网络开发人员快速编写动态页面，但PHP也被用于其他很多领域。
keywords:
  - php
  - 脚本语言
  - 安装php
  - 安装
---

:::note 简介 

PHP（全称：PHP：Hypertext Preprocessor，即“PHP：超文本预处理器”）是一种开源的通用计算机脚本语言，尤其适用于网络开发并可嵌入 HTML 中使用。PHP 的语法借鉴吸收 C 语言、Java 和 Perl 等流行计算机语言的特点，易于一般程序员学习。PHP 的主要目标是允许网络开发人员快速编写动态页面，但 PHP 也被用于其他很多领域。 

:::

## 安装

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="shell" groupId="dg-install-stystem" values={[ { label: '命令行安装', value: 'shell', }, { label: '图形安装', value: 'GUI', }, ] }>

<TabItem value="shell">

:::info 前置条件

请先阅读 [Chocolatey](../base-software/chocolatey) 

:::

```powershell title="PowerShell"
choco install php
```

如果你使用的是 apache（阿帕奇），请安装线程安全版

```powershell title="PowerShell"
choco install php --package-parameters='"/ThreadSafe "'
```

#### 安装包管理器

```powershell title="PowerShell"
choco install composer
```

</TabItem>
<TabItem value="GUI">

等待编写

</TabItem>
</Tabs>

## 运行

安装完成之后，关闭当前所有命令行并运行 `PowerShell` 并键入命令出现如下类似内容则表示安装成功

```powershell title="PowerShell"
php -v
PHP 7.3.7 (cli) (built: Jul  2 2019 13:41:47) ( NTS MSVC15 (Visual C++ 2017) x64 )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.3.7, Copyright (c) 1998-2018 Zend Technologies

composer -V
Composer version 1.9.0 2019-08-02 20:55:32
```

## 配置 Composer 镜像（中国大陆地区）

```powershell title="PowerShell"
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## 开启扩展

打开 PHP 的安装目录，  
其中 Chocolatey 的默认安装目录是位于 `C:\tools\php74`。  
用 VSCode 打开 `php.ini` 文件，并搜索字段 `Dynamic Extensions`。

:::info 开启扩展的方法

很简单，我们只需要将扩展名前面的分号去掉即可，如下高亮所示。 

:::

```ini title="php.ini" {31}
;;;;;;;;;;;;;;;;;;;;;;
; Dynamic Extensions ;
;;;;;;;;;;;;;;;;;;;;;;

; If you wish to have an extension loaded automatically, use the following
; syntax:
;
;   extension=modulename
;
; For example:
;
;   extension=mysqli
;
; When the extension library to load is not located in the default extension
; directory, You may specify an absolute path to the library file:
;
;   extension=/path/to/extension/mysqli.so
;
; Note : The syntax used in previous PHP versions ('extension=<ext>.so' and
; 'extension='php_<ext>.dll') is supported for legacy reasons and may be
; deprecated in a future PHP major version. So, when it is possible, please
; move to the new ('extension=<ext>) syntax.
;
; Notes for Windows environments :
;
; - Many DLL files are located in the extensions/ (PHP 4) or ext/ (PHP 5+)
;   extension folders as well as the separate PECL DLL download (PHP 5+).
;   Be sure to appropriately set the extension_dir directive.
;
;extension=bz2
extension=curl
;extension=ffi
;extension=ftp
;extension=fileinfo
;extension=gd2
;extension=gettext
;extension=gmp
;extension=intl
;extension=imap
;extension=ldap
;extension=mbstring
;extension=exif      ; Must be after mbstring as it depends on it
;extension=mysqli
;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client
;extension=odbc
;extension=openssl
;extension=pdo_firebird
;extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
;extension=pdo_sqlite
;extension=pgsql
;extension=shmop

; The MIBS data available in the PHP distribution must be installed.
; See http://www.php.net/manual/en/snmp.installation.php
;extension=snmp

;extension=soap
;extension=sockets
;extension=sodium
;extension=sqlite3
;extension=tidy
;extension=xmlrpc
;extension=xsl

;;;;;;;;;;;;;;;;;;;
; Module Settings ;
;;;;;;;;;;;;;;;;;;;
```
