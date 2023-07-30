---
id: 8-5-show-users
title: 列出用户
sidebar_label: 8.5 列出用户
date: 2020-08-12 13:00:00
description: 本节与下一节联动，通过添加管理员权限然后对所有用户进行查看，删除等操作。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据展示
  - 用户
  - 数据库
  - orm
  - 免费书籍
---

:::note 提示

本节与下一节联动，通过添加管理员权限然后对所有用户进行查看，删除等操作。

:::

## 列出用户

非常简单的，我们只需要在控制器里使用模型返回所有值即可。

```php title="application\user\controller\Auth.php"
public function index()
{
  return User::all();
}
```

打开浏览器访问 http://thinkphp.test/user/auth/index ，却直接跳转到“非法操作”的提示，原因在于我们上一节创建用户一致性策略时，判断了传入 `id` 和 `session id` 的一致性，可是在 index 控制器内，我们并没有传入 `id`，那么则会返回 `false`。

```php title="application\behavior\UserPolicy.php"
public function run($params)
{
    $user_id = Session::get('user.id');

    if (!is_null($params)) {
        // 存在传入 ID $params
        return
            (int) $user_id === (int) $params
            ? true
            : false;
    } elseif (is_null($user_id)) {
        // 用户未登录
        return false;
    } else {
        /**
         * 不存在传入 ID 但是用户已登录
         * 效果等同于 if(is_null($params) && !is_null($user_id))
        */
        return true;
    }
}
```

再访问 http://thinkphp.test/user/auth/index ，即可看到从数据库拿到的 JSON 数据。

## 创建 Web 页面

```html title="resources\views\user\auth\index.blade.php"
@extends('_layout.default') @section('title', '查看所有用户')
@section('content')
<div class="offset-md-2 col-md-8">
  <h2 class="mb-4 text-center">所有用户</h2>
  <div class="list-group list-group-flush">
    @foreach ($users as $user)
    <div class="list-group-item">
      <a href="{{ url('user/auth/read', ['id' => $user->id]) }}">
        {{ $user->name }}
      </a>
    </div>
    @endforeach
  </div>
</div>
@stop
```

控制器中传入 users 数据：

```php title="application\user\controller\Auth.php"
public function index()
{
  $this->assign([
    'users' => User::all()
  ]);
  return $this->fetch();
}
```

访问 http://thinkphp.test/user/auth/index 即可看到刚刚创建好的 Web 页面。  
用户页面中，我们可以看到只有仅仅的几条手动创建的数据，数据太少不利于接下来进行删除操作的测试，所以我们添加一个“批量生成用户”的功能。

## 假数据填充

我们现在去创建一个 Users 的数据填充。

1. 键入命令 `php think seed:create Users`
2. 提示 `Create seeds directory? [y]/n (yes/no) [yes]:`
3. 键入 y 并回车
4. 提示创建成功 `created .\database\seeds\Users.php`

打开刚刚创建好的填充文件：

```php title="database\seeds\Users.php"
<?php

use think\migration\Seeder;

class Users extends Seeder
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $data = [];
        for ($i = 0; $i < 200; $i++) {
            $data[] = [
                'name'      => $faker->userName,
                'password'      => $faker->password,
                'email'         => $faker->email,
            ];
        }

        $this->table('users')->insert($data)->save();
    }
}
```

以上方法中，我们使用了 `Faker\Factory` 方法，但是现在项目还未安装此包，我们现在在命令行中键入

```shell title="shell"
# 由于 Laravel-China 维护的公共镜像过期，之前在 2.3开发环境搭建 这一节使用的镜像地址请更换为 阿里云镜像。键入命令
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

composer require fzaninotto/faker
```

等待 `faker` 包安装安装完成之后，运行数据填充命令：

```shell title="shell"
php think seed:run
```

再次访问 http://thinkphp.test/user/auth/index 则会看到刚刚生成好的假数据。

## 分页

```php title="application\user\controller\Auth.php"
public function index()
{
  $this->assign([
    'users' => User::paginate(10)
  ]);
  return $this->fetch();
}
```

`paginate` 为分页方法，参数 10 表示每页提取 10 个。

```html title="resources\views\user\auth\index.blade.php"
@extends('_layout.default') @section('title', '查看所有用户')
@section('content')
<div class="offset-md-2 col-md-8">
  <h2 class="mb-4 text-center">
    所有用户
  </h2>

  <div class="list-group list-group-flush">
    @foreach ($users as $user)
    <div class="list-group-item">
      <a href="{{ url('user/auth/read', ['id' => $user->id]) }}">
        {{ $user->name }}
      </a>
    </div>
    @endforeach
  </div>

  <div class="mt-3">
    {!! $users !!}
  </div>
</div>
@stop
```

可以看到，我们在之前的基础上添加了个 `{!! $users !!}`，要说明的是，`{!! !!}` 代表不通过安全过滤直接输出。  
如果我们换成 {{ $users }}，则会输出已经过滤好的 HTML 代码

```html title="html"
<ul class="pagination"><li class="disabled"><sp...
```

现在刷新页面，可以看到已经能够输出分页。可是每次都要通过手动输入链接才能够看到所有用户，这样用户体验不好，现在添加一个所有用户按钮：

```html title="resources\views_layout\header.blade.php"
...
<li class="nav-item">
  <a class="nav-link" href="{{ url('welcome/index/help') }}">帮助</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="{{ url('welcome/index/about') }}">关于</a>
</li>
+++
<li class="nav-item">
  <a class="nav-link" href="{{ url('user/auth/index') }}">所有用户</a>
</li>
+++ ...
```

现在刷新页面，顶部栏的所有用户按钮就显示出来了，点击进去也就是本节所创建好的页面。
