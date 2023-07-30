---
id: 9-4-create-weibo
title: 发布微博
sidebar_label: 9.4 发布微博
date: 2020-08-12 13:25:00
description: 微博的创建与删除原理和用户的相关操作是一样的，只不过把对象换成了微博而已。
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

微博的创建与删除原理和用户的相关操作是一样的，只不过把对象换成了微博而已。

:::

## 微博控制器

现在来创建一个微博相关的控制器。  
打开命令行并键入：

```shell title="shell"
# `--plain` 表示生成一个空控制器。
php think make:controller user/Post --plain
```

```php title="application\user\controller\Post.php"
<?php

namespace app\user\controller;

use think\Controller;
use think\Request;
use app\User\model\Post as PostModel;

class Post extends Controller
{
	protected $middleware = [
		'UserAuthorize' => [
			'only' => [
				'save',
			]
		]
	];

	public function save(Request $request)
	{
		PostModel::create([
			'content' => $request->content,
			'user_id' => session('user.id')
		]);
		return redirect('/');
	}
}
```

虽然我们还未创建前端页面，但是能够从基本的发布流程中来编写后端逻辑，现在来编辑页面。

```html title="resources\views\welcome\index\home.blade.php"
@extends('_layout.default') @section('title', '主页') @section('content')
<div>
  <form action="{{ url('user/post/save') }}" method="POST">
    @php echo token() @endphp

    <div class="form-group">
      <textarea class="form-control" rows="3" name="content"></textarea>
    </div>

    <div class="text-right">
      <button type="submit" class="btn btn-primary mt-3">发布</button>
    </div>
  </form>
</div>
@stop
```

现在访问主页：http://thinkphp.test ，即可看到输入框，可是现在路由还未绑定，编辑路由：

```php title="route\route.php"
...
Route::resource('post', 'user/post')->only(['save']);
...
```

需要注意的是，后面的 `->only` 表示只通过控制器的某一个方法。  
再次访问：http://thinkphp.test 并在输入框内输入一些内容点击发布，正常跳转。  
访问个人资料页面：http://thinkphp.test/user/auth/read/id/1.html 就能够看到刚刚发布的内容了。
