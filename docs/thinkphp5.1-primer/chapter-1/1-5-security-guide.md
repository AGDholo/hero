---
id: 1-5-security-guide
title: 安全指南
sidebar_label: 1.4 安全指南
date: 2020-08-11 17:31:00
description: PHP 程序开发安全指南
keywords:
  - thinkphp
  - php
  - 安全指南
  - 安全
  - 免费书籍
---

请保证你项目使用的依赖项都在安全维护周期范围内

## 依赖管理

:::note 提示
Composer 安装、配置及使用请参考本书 第二章：[2.3 开发环境搭建](../chapter-2/2-3-development-guide)
:::

Composer：https://getcomposer.org/ 在 PHP 生态中是重要的一环，大部分的扩展包都是通过 Composer 进行管理。 
如果你是手动下载扩展包并进行手动加载，那么在大型应用上，你无法检测某个框架是否过时， 
也无法知晓某个框架的重大安全漏洞并及时更新到最新版本，过老的版本是非常不安全的。

## HTTPS 和浏览器安全

HTTPS，一种通过计算机网络进行安全通信的传输协议
在 2018 年，所有现代安全的浏览器已经不在接受 HTTP，用户打开 HTTP 协议的网站时， 
浏览器会警告该网站的连接不安全。 
不过你可以从各大云厂商免费的申请一个 TLS 证书， 或者使用 Let's Encrypt certificate authority：https://letsencrypt.org/

## 开发安全的 PHP 程序

避免 PHP 程序存在 SQL 注入
如果你是自己编写 SQL 代码， 请确保使用 prepared 语句， 
并且从网络或文件系统提供的信息都作为参数传递， 而不是字符串拼接的形式。 
此外，确保你没有使用 模拟的 prepared 语句：https://stackoverflow.com/questions/134099

## 文件上传处理

接受未知来源的问题，意味着这些文件可能恶意攻击服务器， 
请保证服务器文件权限不超过 775， 
上传的新文件应该是 只读或读写， 
不要在网站根目录保存文件， 
同大多数 PHP 框架一样，不在根目录运行 index.php 目的是为恶意代码提供最少的执行环境， 
例如：

` /var/www/example.com-uploaded/ `

或者直接将文件往下移动一个层级

` /var/www/example.com/public `

## 跨站请求伪造

跨站请求伪造(CSRF)是一种混淆的代理攻击，通过诱导用户的浏览器代表攻击者执行恶意的 HTTP 请求(使用的是该用户的权限).。
首先使用 HTTPS，没有 HTTPS 的话，任何保护都是脆弱的，因为所有数据都是明文传输。 
如果你是用的是现代 PHP 框架，请在框架中开启 CSRF 验证 。
如果你是原生用户，只需要：

* 增加基本的 Challenge-response authentication。
* 为每个表单添加一个隐藏的表单属性。
* 填充一个密码安全的随机值(称为令牌)。
* 验证是否提供了隐藏的表单属性，以及是否匹配上期望值。

## 密码散列

:::note 提示
安全的密码存储曾经是一个激烈争论的话题，但现在实现起来相当微不足道
:::

~~~php
$hash = password_hash($password， PASSWORD_DEFAULT); 
if (password_verify($password， $hash)) { 
        // Authenticated. 
        if (password_needs_rehash($hash， PASSWORD_DEFAULT)) { 
        // Rehash， update database. 
    } 
}
~~~

甚至不需要知道在后台使用什么算法，因为如果你使用最新版本的 PHP ，你也将使用当前最新的技术，用户的密码将会自动进行升级（只要有新的默认算法可用）。

:::danger 禁止
请不要错误的将摘要算法当作加密算法使用，比如 md5 摘要算法，这不是一种可用于加密的东西。
