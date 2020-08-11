---
id: 5-3-datatable-view
title: 查看数据表
sidebar_label: 5.3 查看数据表
date: 2020-08-12 01:59:00
description: 在实际的线上环境中，如果我们使用宝塔面板，`PHPMyAdmin` 是最好的选择，面板已经为我们准备好了必要的环境，我们只需要进入 `Web` 面板即可管理。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据库
  - 数据表
  - 查看数据表
  - thinkphp数据库
  - php数据库
  - orm
  - 免费书籍
---

在实际的线上环境中，如果我们使用宝塔面板，`PHPMyAdmin` 是最好的选择，面板已经为我们准备好了必要的环境，我们只需要进入 `Web` 面板即可管理。

面板中数据库连接方式：

名称 | 数据
------------ | -------------
Host | 127.0.0.1
Port | 3306
database_name | 创建的表名
database_password | 对应表的密码

## PHPMyAdmin 的使用

进入 `PHPMyAdmin` 也是非常简单的，只需要进入 `宝塔 Web 面板-> 数据库-> PHPMyAdmin` 即可。  
然后，我们再选择对应的数据表，即可看到上一节迁移的结构。  
如果你运行命令再刷新表，此时结构就已经回滚。

~~~~ shell
/* 回滚 */
php think migrate:rollback

/* 迁移 */
php think migrate:run
~~~~