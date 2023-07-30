---
id: 9-5-weibo-list
title: 微博数据流
sidebar_label: 9.5 微博数据流
date: 2020-08-12 13:29:00
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

上一节中，我们虽然创建了发布微博的功能，可是发布之后并不能实时的看到自己发布的内容，也无法在首页看到大家发布的内容，所以本节将会在首页添加微博动态的功能。

## 读取微博表

要获取整个微博的内容，非常简单的，我们只需要读取微博表并倒序即可：

```php title="application\welcome\controller\Index.php"
<?php

namespace app\welcome\controller;

use think\Controller;
use app\User\model\Post;

class Index extends Controller
{
	public function home()
	{
		$this->assign([
			'posts' => Post::with('user')->order('created_at', 'desc')->paginate(20)
		]);
		return $this->fetch();
  }
  ...
}
```

编辑前端页面：

```html title="resources\views\welcome\index\home.blade.php"
...
<div>
  <div class="list-group list-group-flush">
    @foreach ($posts as $post)
    <div class="list-group-item">
      <div>
        {{ $post->user->name }} -- {{ $post->created_at }}
      </div>
      <div>
        {{ $post->content }}
      </div>
    </div>
    @endforeach
  </div>

  {!! $posts !!}
</div>
@stop ...
```

再次访问首页，即可看到所有微博已经呈现出来。
