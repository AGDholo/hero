---
id: 9-2-weibo-model
title: 微博模型
sidebar_label: 9.2 微博模型
date: 2020-08-12 13:18:00
description: 和之前创建 User 模型的步骤一致，我们需要创建数据表 Posts、建立微博模型 PostModel
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

和之前创建 User 模型的步骤一致，我们需要
1. 创建数据表 Posts
2. 建立微博模型 PostModel

## 创建数据表

打开命令行，键入命令：

```shell title="shell"
php think migrate:create Posts
```

~~~php title="database\migrations\20190728094237_posts.php"
<?php

use think\migration\Migrator;

class Posts extends Migrator
{
    /**
     * Migrate Up.
     */
    public function up()
    {
        // create the table
        $table = $this->table('posts');
        $table->addColumn('content', 'text')
            ->addColumn('user_id', 'integer')
            ->addTimestamps('created_at', 'updated_at')
            ->create();
    }
    /**
     * Migrate Down.
     */
    public function down()
    {
        $this->dropTable('posts');
    }
}
~~~

运行命令：

```shell title="shell"
php think migrate:run
```

其中，`user_id` 是为了和 `User` 表中的 `id` 字段关联，当我们创建关系模型时，只用一个 `id` 即可读取该用户发送过的所有推文。

## 创建微博模型

和之前一致，只用在控制台中键入命令：

```shell title="shell"
php think make:model User/Post
```

创建完成后并打开文件： 

~~~php title="application\user\model\Post.php"
<?php

namespace app\User\model;

use think\Model;

class Post extends Model
{
    // 定义数据表名
    protected $table = 'posts';

    // 定义时间戳字段名
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
}
~~~

这样，基本的模型我们已经定义。

## 模型关联

在用户推文获取的过程中，我们一个用户对应多条推文，如果不通过模型进行关联，在查询时则需要使用用户的 `id` 查询两遍模型，如  

~~~php title="php"
User::get($user_id)
Post::get($user_id)
~~~

这样的工作非常繁琐并且多次读库增加数据库压力，所以我们需要对模型进行关联定义。
1. 一个用户有多条推文
2. 一条推文只有一个用户

定义正向关联：

~~~php title="application\user\model\User.php"
<?php
...
class User extends Model
{
	// 正向关联 Post 模型
	public function posts()
	{
		return $this->hasMany('Post', 'user_id');
  }
...
~~~

定义反向关联：

~~~php title="application\user\model\Post.php"
<?php
...
class Post extends Model
{
  反向关联 User 模型
  public function user()
  {
      return $this->belongsTo('User');
  }
...
~~~

非常简单的，两个关联操作已经定义，下一节将展示出关联数据。