---
id: 5-4-model
title: 模型
sidebar_label: 5.4 模型
date: 2020-08-12 02:02:00
description: 模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计（可以实现具体的功能）。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 模型
  - 数据交互
  - thinkphp数据库
  - php数据库
  - orm
  - 免费书籍
---

:::note 提示
模型（Model） - 程序员编写程序应有的功能（实现算法等等）、数据库专家进行数据管理和数据库设计（可以实现具体的功能）。
:::

在 `MVC` 组件的互动中，
`模型(Model)` 用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法。  
`Model` 有对数据直接访问的权力，例如对数据库的访问。  
`Model` 不依赖 `View` 和 `Controller`，也就是说，`Model` 不关心它会被如何显示或是如何被操作。  
但是 `Model` 中数据的变化一般会通过一种刷新机制被公布。  
为了实现这种机制，那些用于监视此 `Model` 的 `View` 必须事先在此 `Model` 上注册，从而，View 可以了解在数据 `Model` 上发生的改变。

在本书中，主要使用 `Think-ORM` 与数据库进行交互。

## 创建模型文件

键入命令：

~~~shell title="shell"
# make:model 创建模型文件
php think make:model user/User
~~~

完成后，打开新建的模型文件 `application/user/model/User.php`。  
可以看到默认生成的模型文件已经为我们创建好了命令空间、继承等操作。

## 约定成俗的表名

在实际的模型处理当中，`Think-ORM` 会根据模型文件名自动找到表名进行操作。
默认情况下，会使用类的「下划线命名法」与「复数形式名称」来作为数据表的名称生成规则。如：

* User 对应 users 表
* BlogList 对应 blog_list 表

因此 `Think-ORM` 将会假设模型储存在对应的表中，如果你需要手动指定数据表，可以通过 `$table` 来指定：

~~~php title="model.php"
/* 指定 auths 表 */
protected $table = 'auths';
~~~

## 约定编程

:::note 提示
约定编程（convention over configuration），是一种软件设计范式，旨在减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。
:::

本质是说，开发人员仅需规定应用中不符约定的部分。例如，如果模型中有个名为 `Sale` 的类，那么数据库中对应的表就会默认命名为 `sales`。  
只有在偏离这一约定时，例如将该表命名为 `products_sold`，才需写有关这个名字的配置。  
如果您所用工具的约定与你的期待相符，便可省去配置；反之，你可以配置来达到你所期待的方式。