---
id: 2-2-product-decomposition
title: 产品分析
sidebar_label: 2.2 产品分析
date: 2020-08-13 17:33:00
description: 作为本系列的第一本书籍，我们的目标是模仿 Twitter 的基础功能。
keywords:
  - laravel
  - laravel-primer
  - primer
  - 产品
  - 产品分析
  - 初学者
---

作为本系列的第一本书籍，我们的目标是模仿 Twitter 的基础功能：

* 用户会话管理
* 用户 CRUD
* 推文 CRUD
* 推文流

## 用户会话管理

包含两种角色：

1. 游客
2. 登入用户

### 游客

只能够浏览推文，不能够进行回复点赞等操作。

### 登入用户

可以使用大部分 CRUD 操作。

## 用户 CRUD

* 注册
* 登入
* 登出
* 注销
* 关注用户
* 屏蔽用户
* 设置个人资料

## 推文 CRUD

* 发送推文
* 转发推文
* 喜欢推文
* 收藏推文

## 推文流

* 已关注用户的所有推文