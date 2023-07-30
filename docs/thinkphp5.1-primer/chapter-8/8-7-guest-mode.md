---
id: 8-7-guest-mode
title: 访客模式
sidebar_label: 8.7 访客模式
date: 2020-08-12 13:00:00
description: 在前面几节的中间件策略中，我们始终没有放开 `Auth/@index` 的访客访问，在未登录的情况下，直接访问将会跳转到登录页面，并且已登录用户无法浏览其他用户的页面，接下来的步骤将会解决这个问题。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据展示
  - 用户
  - 权限
  - 权限系统
  - 访客
  - 访客模式
  - 免费书籍
---

:::note 提示

在前面几节的中间件策略中，我们始终没有放开 `Auth/@index` 的访客访问，在未登录的情况下，直接访问将会跳转到登录页面，并且已登录用户无法浏览其他用户的页面，接下来的步骤将会解决这个问题。

:::

## 放开权限

由于在控制器中多个方法都被中间件拦截，现在重新编辑：

```php title="application\user\controller\Auth.php"
...
protected $middleware = [
  'UserAuthorize' => [
    'except' => [
      'create',
      'save',
      'index',
      'read'
    ]
  ],
...
```

退出登录后再次访问 http://thinkphp.test/user/auth/index ，即可看到所有用户的列表，然后我们随意点击一个用户的名字，发现页面中出现 `欢迎您` 的字样和 `编辑资料` 按钮，这是访客模式不可见的，现在我们需要一一解决。

## 判断访客

访客分为两种：

1. 未登录用户
2. 已登录用户访问其他用户页面

非常简单的，虽然拥有两种状态，但是我们只需要在控制器中传入 `Session` 即可判断。

```php title="application\user\controller\Auth.php"
public function read($id)
{
  $user = User::find($id);
  $this->assign([
    'user' => $user,
    'session' => Session::get('user')
  ]);
  return $this->fetch();
}
```

再编辑前端页面：

```html title="resources\views\user\auth\read.blade.php"
@extends('_layout.default') @section('title', $user->name) @section('content')
<div class="col-md-offset-2 col-md-8">
  <div class="panel panel-default mt-5">
    <div class="panel-heading mb-3">
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
  </div>
</div>
@stop
```

现在用不登录和登录状态随意访问其他用户的页面，可以看到以上问题均解决了。  
在上一节添加删除按钮的时候，我们删除逻辑中排除了管理员自己删除自己，现在需要在前端页面中移除这个按钮。

```html title="resources\views\user\auth\index.blade.php"
@if ($god && !$user->god)
<form
  action="{{ url('user/auth/delete', ['id' => $user->id]) }}"
  method="post"
  class="float-right"
>
  @php echo token() @endphp
  <input type="hidden" name="_method" value="DELETE" />
  <button type="submit" class="btn btn-sm btn-danger delete-btn">删除</button>
</form>
@endif
```

非常简单的，只需要判断循环列表的用户 `god` 属性就行。  
使用管理员登录并访问所有用户页面，可以看到所有是管理员的删除按钮全部消失了。
