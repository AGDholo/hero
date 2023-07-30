---
id: 7-4-user-signout
title: 用户登出
sidebar_label: 7.4 用户登出
date: 2020-08-12 12:27:00
description: 退出会话的原理也非常简单，我们在前面检验是否登录都是通过 `Session` 来判断，现在只需要删除对应的 `Session` 就大功告成了。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 会话
  - 登录
  - 用户登录
  - 登出
  - 用户登出
  - 退出
  - session
  - php
  - 免费书籍
---

:::note 提示

退出会话的原理也非常简单，我们在前面检验是否登录都是通过 `Session` 来判断，现在只需要删除对应的 `Session` 就大功告成了。

:::

首先修改前端，添加一个退出的按钮：

```html title="resources\views_layout\header.blade.php"
~
<a
  class="btn btn-outline-success my-2 my-sm-0"
  href="{{ url('user/auth/read', ['id' => session('user.id')]) }}"
>
  {{ session('user.name') }}
</a>
~ @if(session('user'))
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    {{ session('user.name') }}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a
      class="dropdown-item"
      href="{{ url('user/auth/read', ['id' => session('user.id')]) }}"
      >个人主页</a
    >
    <a class="dropdown-item">
      <form
        action="{{ url('user/session/delete', ['id' => session('user.id')]) }}"
        method="POST"
      >
        <input type="hidden" name="__token__" value="{{ $token }}" />
        <button class="btn btn-block" type="submit" name="button">退出</button>
      </form>
    </a>
  </div>
</div>
@else
<a
  class="btn btn-outline-success my-2 my-sm-0"
  href="{{ url('user/auth/create') }}"
  >注册</a
>
<a
  class="btn btn-outline-success my-2 my-sm-0"
  href="{{ url('user/session/create') }}"
  >登录</a
>
@endif
```

此时再刷新页面，会提示 `token` 未定义,我们需要为 `read` 方法添加 `token`：

```php title="application\user\controller\Auth.php"
public function read($id)
{
    if (Session::has('user')) {
        $user = User::find($id);
        $token = $this->request->token('__token__', 'sha1');
        $this->assign([
            'user' => $user,
            'token' => $token
        ]);
        return $this->fetch();
    } else {
        return redirect('user/session/create')->with('validate','请先登录');
    }
}
```

现在再次刷新前端页面,可以正常输出了。  
在前端的 `退出` 按钮里，我们创建了一个 `DELETE` 方法的表单，现在需要实现退出功能。

```php title="application\user\controller\Session.php"
public function delete($id)
{
    if (SessionFacade::has('user') && $id === SessionFacade::get('user.id')) {
        SessionFacade::delete('user');
        return redirect('user/session/create')->with('validate','您已退出');
    } else {
        return '非法请求';
    }
}
```

删除 `Session` 并重定向到登录页面，退出功能已经完成。
