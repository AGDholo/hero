---
id: 7-3-user-signin
title: 用户登录
sidebar_label: 7.3 用户登录
date: 2020-08-12 12:27:00
description: 虽然现在已经可以正常登录，但是登录之后的页面仍然有注册按钮，未登录的页面没有登录按钮，我们要对前端页面进行一些优化。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 会话
  - 登录
  - 用户登录
  - session
  - php
  - 免费书籍
---

## 美化前端页面

虽然现在已经可以正常登录，但是登录之后的页面仍然有注册按钮，未登录的页面没有登录按钮，我们要对前端页面进行一些优化。

~~~html title="resources\views\_layout\header.blade.php"
~<a class="btn btn-outline-success my-2 my-sm-0" href="{{ url('user/auth/create') }}">注册</a>~
@if(session('user'))
<a class="btn btn-outline-success my-2 my-sm-0"
    href="{{ url('user/auth/read', ['id' => session('user.id')]) }}">
  {{ session('user.name') }}
</a>
@else if
<a class="btn btn-outline-success my-2 my-sm-0"
    href="{{ url('user/auth/create') }}">注册</a>
<a class="btn btn-outline-success my-2 my-sm-0"
    href="{{ url('user/session/create') }}">登录</a>
@endif
~~~

基本的登录之后的前端提示已经完成。

## 自动登录

非常简单的，和前一章一样，我们只用在注册跳转的地方添加 `session` 即可：

~~~php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    $requestData = $request->post();
    $result = $this->validate($requestData, 'app\user\validate\Auth');
    if (true !== $result) {
        return redirect('user/auth/create')->with('validate',$result);
    } else {
        $user = User::create($requestData);
        +Session::set('user', $user);+
        return redirect('user/auth/read')->params(['id' => $user->id]);
    }
}
~~~

现在再访问 http://thinkphp.test/user/auth/create.html 进行一遍注册。  
则会自动登录并跳转至 http://thinkphp.test/user/auth/read/id/2.html

可是如果我们访问 http://thinkphp.test/user/session/create.html 仍然会出现登录的页面。  
所以也需要在 `Session` 控制器中进行判断：

~~~php title="application\user\controller\Auth.php"
public function create()
{
    if (Session::has('user')) {
        $user = Session::get('user');
        return redirect('user/auth/read')->params(['id' => $user->id]);
    } else {
        $token = $this->request->token('__token__', 'sha1');
        $this->assign('token', $token);
        return $this->fetch();
    }
}
~~~

~~~php title="application\user\controller\Session.php"
public function create()
{
    if (Session::has('user')) {
        $user = Session::get('user');
        return redirect('user/auth/read')->params(['id' => $user->id]);
    } else {
        $token = $this->request->token('__token__', 'sha1');
        $this->assign('token', $token);
        return $this->fetch();
    }
}
~~~

可以发现，如果不使用中间件，而是手动进行拦截的话，我们需要在每个控制器的每个方法上都写入 `if (Session::has('user'))`，这样的工程实在太繁琐了，到了后期也非常难以维护。

