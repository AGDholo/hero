---
id: 9-3-show-weibo
title: 显示微博
sidebar_label: 9.3 显示微博
date: 2020-08-12 13:21:00
description: 本节将为每个人显示自己发布的微博。
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
  - 数据展示
  - 免费书籍
---

本节将为每个人显示自己发布的微博。

## 关联查询

在上一节中，我们定义了

```php
// 正向关联 Post 模型
public function posts()
{
  return $this->hasMany('Post', 'user_id');
}
```

非常简单的，在控制器中只需要多加一句 `with('posts')` 即可展示该用户的所有微博  
`application\user\controller\Auth.php`

```php
public function read($id)
{
  $user = User::with('posts')->find($id);
  return $user;
}
```

接着，访问 http://thinkphp.test/user/auth/read/id/1.html ，可以看到一行 `"posts":[]`  
这是因为现在 `posts` 表中还未有数据，我们需要为用户填充一些假数据。

命令行键入 `php think seed:create Posts`  
`database\seeds\Posts.php`

```php
<?php

use think\migration\Seeder;

class Posts extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();
        $data = [];
        for ($i = 0; $i < 200; $i++) {
            $user_id = !($i % 2) ? 1 : 2;

            $data[] = [
                'content'      => $faker->text,
                'user_id'      => $user_id,
            ];
        }

        $this->table('posts')->insert($data)->save();
    }
}
```

上面代码中，`$i % 2` 表示能否被 2 整除。  
创建完毕后运行 `php think seed:run` 再次访问 http://thinkphp.test/user/auth/read/id/1.html 就可以看到刚刚装填好的假数据了。

## 前端显示

现在数据库中已经有填充好的假数据，我们只需要在前端中输出即可。  
`application\user\controller\Auth.php`

```php
public function read($id)
{
  $user = User::with(['posts' => function ($query) {
    $query->limit(8);
    $query->order('created_at', 'desc');
  }])->find($id);
  $this->assign([
    'user' => $user,
    'session' => Session::get('user')
  ]);
  return $this->fetch();
}
```

注意，`with(['posts' => function ($query)` 是一个闭包操作，下面的 `limit` 等语句都是针对关联模型 `posts` 操作而不是 `User`

切换到前端页面  
`resources\views\user\auth\read.blade.php`

```html
@extends('_layout.default') @section('title', $user->name) @section('content')
<div class="panel panel-default list-group-flush">
  <div class="panel-heading">
    <h4>
      @if(!is_null($session) && $session->id === $user->id)
      <a
        class="btn btn-primary"
        href="{{ url('user/auth/edit', ['id' => session('user.id')]) }}"
      >
        编辑资料
      </a>
      欢迎您 @else 您正在查看 @endif {{ $user->name }}
    </h4>
  </div>
  @foreach ($user->posts as $post)
  <div class="list-group-item">
    <p>
      {{ $post->content }}
    </p>
    {{ $post->created_at }}
  </div>
  @endforeach
</div>
@stop
```

再次访问 http://thinkphp.test/user/auth/read/id/1.html 即可看到前端内容完整的被渲染出来了。
