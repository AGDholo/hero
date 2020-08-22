---
id: 2-3-create-backend-application
title: 创建后端应用
sidebar_label: 2.3 创建后端应用
date: 2020-08-13 17:50:00
description: 为了简便起见，我们使用 SQLite 来作为本系列的数据库。 那么我们需要在 Laravel 的配置文件中指定数据库驱动与地址。
keywords:
  - laravel
  - laravel-primer
  - primer
  - 创建应用
  - 后端
  - 初学者
  - sqlite
  - 数据库
  - php
---

:::note 提示

在 VSCode 中，你可以使用 Ctrl+Shift+` 组合键在当前目录下快速打开终端。 

:::

## 配置数据库

为了简便起见，我们使用 SQLite 来作为本系列的数据库。那么我们需要在 Laravel 的配置文件中指定数据库驱动与地址：

```env title="env" {3-8}
LOG_CHANNEL=stack

DB_CONNECTION=sqlite
DB_HOST=
DB_PORT=
DB_DATABASE=database\lp.db
DB_USERNAME=
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
```

接着在项目的 `database` 目录下创建一个名为 `lp.db` 的文件。

### 测试数据库

```powershell title="PowerShell"
# 运行数据库迁移
php artisan migrate

# 重置数据库
php artisan migrate:reset
```

如果没有报错，则表示数据库配置成功。

## 启动应用

```powershell title="PowerShell"
php artisan serve
```

然后访问 http://127.0.0.1:8000 即可看到页面呈现。

## Git 代码版本控制

```powershell title="PowerShell"
git init
git add -A
git commit -m "2.3 创建后端应用"
```
