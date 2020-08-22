---
id: 2-5-git-flow
title: Git 工作流
sidebar_label: 2.5 Git 工作流
date: 2020-08-11 17:51:00
description: Git 是 Linux 的创始人 Linus Torvalds 开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。简单来说，是一套集中进行 提交、回滚、发布 的工具。Git 应该是每一位开发者的标配。
keywords:
  - thinkphp
  - 实战
  - 入门
  - 初学者
  - git 工作流
  - 版本控制
  - git
  - 免费书籍
---

:::note 提示

Git 是 Linux 的创始人 Linus Torvalds 开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。  
简单来说，是一套集中进行 提交、回滚、发布 的工具。Git 应该是每一位开发者的标配。  
本书也将使用 Git 进行版本控制，安装过程请参阅章节 [2.2 命令行工具](2-2-command-line-tool)

:::

## 基本设置

1. 使用 VScode 打开上个章节创建的 网站目录。
2. 按下 Ctrl+Shift+G-> 看到顶部栏文字 “源代码管理” 右侧的一个小按钮-> 点击并初始化版本库-> 选择 网站根目录，并确定-> 你现在可以看到 VScode 中有一大排目录出现了
3. 在顶部消息栏中键入 “初始化 ThinkPHP” 并点击 ✔ 图标
4. 按下 Ctrl+Shift+P -> 键入 git

## Git 与 GitHub

1. 进入 GitHub 官方网站: https://github.com/ 并注册账号。
2. 点击 头像右边 + -> New repository，填写好对应的名称，点击绿色 [Create repository] 按钮完成创建。
3. 进入到刚刚创建的项目，找到蓝色背景的内容，我们会看到 [Quick setup — if you’ve done this kind of thing before] 一行，并将中间的链接进行复制。

## 线下与线上连接

返回 VScode 并打开终端，并键入：

```shell title="shell"
# 输入在 GitHub 创建的用户名
git config --global user.name "xxx"

# 输入在 GitHub 创建的邮箱地址
git config --global user.email "xxx"

# 请填写刚刚复制的地址
git remote add github https://github.com//xxxxx
```

按下 `Ctrl+Shift+G` ，点击顶部栏 “源代码管理” 文字最右边的按钮，选择 “全部提交” ，键入提交内容，然后再次点击这个按钮，选择 “推送到” 选择弹出框下面的远程地址。

现在，在浏览器中浏览刚刚创建的项目地址，提交的文件已全部更新。
