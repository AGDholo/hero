---
id: 2-6-first-app
title: 创建第一个应用
sidebar_label: 2.6 第一个应用
date: 2020-08-11 19:07:00
description: 创建你的一个 thinkphp5.1-primer 应用程序。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 应用程序
  - 免费书籍
---

打开 宝塔面板 ，选择顶部栏的 Web 面板，第一次使用会提示安装，并再次点击

1. 选择进入内网网址也就是 `http://127.0.0.1:888` 并设置相关账号密码。
2. 点击左侧栏 “网站” 按钮，并选择 “添加站点” .
3. 在弹出框内输入你想访问的域名(推荐后缀结尾为 ".test"，例如 thinkphp.test)，并选择数据库(mysql)，PHP(使用最高版本) .
4. 如图所示:

![img](https://box.kancloud.cn/d9f2b5321715e5608fd8784e76e0d3aa_562x581.png)

## Hosts

Hosts 的作用是 将指定域名 转发到特定 IP 上，例如 `thinkphp.test 127.0.0.2` 当我们访问 thinkphp.test 时，实际上是访问了 127.0.0.2 这个 IP，通过这样，我们就可以在本地实现自定义域名访问。

## 修改 Hosts

1. 打开 资源管理器 ，在地址栏键入：%SystemRoot%\System32\drivers\etc\ .
2. 请右键 文件 hosts 并找到 属性 -> 安全，选择你登录的用户名，点击 编辑 ，勾选 写入 .
3. 再次右键 文件 hosts 选择 Open With Code .
4. 添加一行：thinkphp.test 127.0.0.2 并保存。
5. 打开浏览器，在地址栏键入 `http://thinkphp.test` ，此时出现 宝塔面板 的欢迎界面表示成功。

## 安装 ThinkPHP

:::danger 禁止 

禁止将 public/index.php 移动到根目录，这是不安全的，详细内容请参阅本书 [1.5 安全指南](../chapter-1/1-5-security-guide)。 

:::

1. 打开 资源管理器 ，找到你创建网站的目录，全选并且删除。
2. 右键当前目录，选择： Open With Code .
3. 按下组合键： Ctrl+Shift+` 打开终端。

在终端中键入: `composer create-project topthink/think .`

打开浏览器，在地址栏键入 `http://thinkphp.test/public` ，此时出现 ThinkPHP 的欢迎界面表示成功。

## 链接优化

1. 打开 宝塔 Web 面板。
2. 点击左侧栏 “网站” 按钮，并点击右侧你创建网站的 “设置” 按钮。
3. 选择 “网站目录”-> “运行目录”-> “public” 并保存。
4. 选择 “伪静态” 键入下列代码并保存：

```nginx title="nginx"
location / {
    if (!-e $request_filename) {
        rewrite ^(.*)$ /index.php?s=/$1 last;
    }
}
```

以上操作的作用：

1. 隐藏 /Public
2. 隐藏 /index.php/

现在，只需要访问 `http://thinkphp.test` 就大功告成！
