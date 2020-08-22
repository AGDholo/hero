---
id: 7-2-session
title: 会话控制
sidebar_label: 7.2 会话控制
date: 2020-08-12 12:13:00
description: 在现代 Web 程序中，常见的 HTTP 会话机制有多种：JWT (JSON Web Token)、Session、Cookie
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 会话控制
  - 会话
  - session
  - php
  - 免费书籍
---

在现代 Web 程序中，常见的 HTTP 会话机制有多种：

- [JWT (JSON Web Token)](https://jwt.io/)
- Session
- Cookie
- ...

在本章的学习中,我们采用 `session` 来控制会话.

## 会话控制器

在控制器中键入 `php think make:controller user/Session` 创建会话控制器并编辑：

```php title="application\user\controller\Session.php"
use app\user\model\User;
...
public function create()
{
    $token = $this->request->token('__token__', 'sha1');
    $this->assign('token', $token);
    return $this->fetch();
}
```

```php title="route\route.php"
Route::resource('session', 'user/session');
```

```html title="resources\views\user\session\create.blade.php"
@extends('_layout.default') @section('title', '登入') @section('content')
<div class="col-md-offset-2 col-md-8">
  <div class="panel panel-default mt-5">
    <div class="panel-heading mb-3">
      <h4>登入</h4>
    </div>
    @if(session('validate'))
    <div class="alert alert-warning" role="alert">
      {{ session('validate') }}
    </div>
    @endif
    <div class="panel-body">
      <form method="POST" action="{{ url('save') }}">
        <input type="hidden" name="__token__" value="{{ $token }}" />

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">邮箱</span>
          </div>
          <input type="email" class="form-control" name="email" />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">密码</span>
          </div>
          <input type="password" class="form-control" name="password" />
        </div>

        <button type="submit" class="btn btn-primary btn-block">登入</button>
      </form>
    </div>
  </div>
</div>
@stop
```

以上创建的内容与上一章所建内容大多类似，不再详细说明。  
现在访问 http://thinkphp.test/user/session/create 即可看到登录页面。  
同样的，我们创建验证器，在控制台中键入：

```shell title="shell"
php think make:validate user/Session
```

```php title="application\user\validate\Session.php"
protected $rule = [
    '__token__' => 'token',
    'email|邮件' =>  'require|email|max:255',
    'password|密码' => 'require|min:6'
];
```

```php title="application\user\controller\Session.php"
public function save(Request $request)
{
    $result = $this->validate($request->post(), 'app\user\validate\Session');
    if (true !== $result) {
        return redirect('user/session/create')->with('validate',$result);
    } else {
        $user = User::where('email', $request->email)->find();
        if ($user !== null && password_verify($request->password, $user->password)) {
            return 'Password is valid!';
        } else {
            return 'Invalid password.';
        }
    }
}
```

在以上 `save` 方法中：`password_verify($request->password, $user->password)` 对应着上一章所用的 `password_hash` 方法。

目的是验证 `hash` 之后的数据。

`password_verify(请求数据, 待验证的数据)`：如果验证成功则抛出 `true`: http://php.net/manual/zh/function.password-verify.php

请注意，在 PHP 中判断 `null`：

| 标识  | empty == null | is_null === null | isset | array_key_exists |
| ----- | ------------- | ---------------- | ----- | ---------------- |
| ϕ     | T             | T                | F     | F                |
| null  | T             | T                | F     | T                |
| ""    | T             | F                | T     | T                |
| []    | T             | F                | T     | T                |
| 0     | T             | F                | T     | T                |
| false | T             | F                | T     | T                |
| true  | F             | F                | T     | T                |
| 1     | F             | F                | T     | T                |
| \0    | F             | F                | T     | T                |

- `$user != null` == 在 PHP 运算符中不检查类型
- `$user !== null` === 在 PHP 运算符中检查类型

意味着如果使用 `==`：PHP 将会转换成一致的类型再做判断。  
这也是动态弱类型语言的一大弱势，如果无法提前知晓接收的值的类型，也没有类型检查，解释器所转换的类型将不可控制。  
在要求高精度的程序中（例如财务系统），请使用静态强类型语言。  
在弱类型语言当中，一些高精度的浮点数将会丢失(int to double)。  
例如： `0.9999999999999^2`，甚至也有 `'0.999999999999' * 0.999999999999`  
下面是一些例子：

- 无类型： 汇编
- 弱类型、静态类型：C/C++
- 弱类型、动态类型检查：Perl/PHP
- 强类型、静态类型检查：Java/C#
- 强类型、动态类型检查：Python, Scheme
- 静态显式类型：Java/C
- 静态隐式类型：Ocaml, Haskell
- ...

:::note 笔者注

我经常遇到一些朋友想使用 PHP 来做通讯系统，爬虫系统甚至 GUI 程序，做一个一款语言就能集大成的程序，这是非常不可取的，软件行业没有银弹(Silver Bullet)，没有任何一款语言能做完所有的事情，也没有任何一款语言能够让你掌握了就吃到老，对阵下药，不要宰牛用杀猪刀。

:::

重新看到 `application\user\controller\Session.php` 并修改：

```php title="application\user\controller\Session.php"
if ($user !== null && password_verify($request->password, $user->password)) {
    return redirect('user/auth/read')->params(['id' => $user->id]);
} else {
    return redirect('user/session/create')->with('validate','邮件地址不存在或密码错误');
}
```

现在如果验证成功，那么就会跳转到上一章所编写的 `user/auth/read` 方法。

虽然现在已经成功验证账户对应的密码，但是还未做到权限的状态管理，用户不管登录是否，都可以访问 http://thinkphp.instudy.test/user/auth/read/id/:id 的地址。

## 中间件拦截

中间件相当于在 `路由至控制器` 之间修建一道门，如果通过中间件的规则则可以进行下一步的操作。

我们现在通过[中间件](https://www.kancloud.cn/manual/thinkphp5_1/564279)来验证 `是否已经登入`。

经过笔者两小时的测试，ThinkPHP 的中间件与路由有非常大的逻辑缺陷问题，中间件无法正确挂载至资源路由，资源路由生成规则错误及混乱，URL 绑定在资源路由中不起作用，以下是一些针对这一章节 ThinkPHP 框架的错误：

- 框架版本: V5.1.28 LTS（2018-10-28）
- PHP 版本: PHP 7.2.11-4+ubuntu18.04.1+deb.sury.org+1 (cli) (built: Nov 4 2018 05:11:49) ( NTS )

定义中间件：

```php title="php"
public function handle($request, \Closure $next)
{
    $request->mid = 'mid';
    return $next($request);
}
```

如果中间件不在路由注册：

```php title="php"
Route::resource('auth', 'user/auth')
~->middleware('Auth')~
```

那么在控制器不管怎么定义了中间件, dump 都是 null

```php title="php"
protected $middleware = [
  'Auth',
];
```

访问地址：http://thinkphp.test/user/auth/create.html 或者 http://thinkphp.test/auth/create.html  
都会提示：/home/vagrant/code/instudy/thinkphp/thinkphp/library/think/Debug.php:226:null

而如果在路由中进行注册中间件：

```php title="php"
Route::resource('auth', 'user/auth')->middleware('Auth')
```

基于完整的控制器路径 http://thinkphp.test/user/auth/create.html 仍然输出 `null`  
而进入绑定之后的地址 http://thinkphp.test/auth/create.html 却有值 `mid`  
更加神奇的是，如果要使用 URL 生成路由 `url('user/auth/create')`，只会生成到完整的控制器路径(http://thinkphp.test/user/auth/create.html)，而不会生成绑定的地址(http://thinkphp.test/auth/create.html)。

如果你要强行用绑定的地址，只能写死路径：

```php title="php
return redirect('/auth/read')->params(['id' => $user->id]);
```

当写死路径之后，`params()` 方法将不会传值到 `auth/read/:id`，只会跳转到 `/auth/read`。

关于路由的错误，在前面的章节已经遇到并且不得已才琢磨出了匹配完整路径的方法，可惜 [URL 生成](https://www.kancloud.cn/manual/thinkphp5_1/353977) 根本不工作，导致了路由中间件挂载无效。  
同时，无论怎么样在资源控制器中挂载中间件，都是无效的，不执行任何东西。

基于以上的问题，我们不再采用中间件的方式进行会话拦截。

## 手动拦截

此方法比较繁琐,代码复用程度极差,是一个临时解决中间件问题的办法.

```php title="application\user\controller\Session.php"
use think\facade\Session as SessionFacade;
...
if ($user !== null && password_verify($request->password, $user->password)) {
    SessionFacade::set('user', $user);
    return redirect('user/auth/read')->params(['id' => $user->id]);
}
```

可以看到，我们在顶部引入了 Session 的库，再引入之后，类就会默认挂载 `class Session`，可是这与我们当前 `Session` 的命名出现了冲突，所以使用 `as SessionFacade` 来为 `Session 外部类` 增加别名。

现在重新进行登录操作，就会重定向至 `'user/auth/read/:id'` 并且附带一个 `user` 的 `session`。

现在我们打开 `application\user\controller\Auth.php`：

```php title="application\user\controller\Auth.php"
use think\facade\Session;
...
public function read($id)
{
    if (Session::has('user')) {
        $user = User::find($id);
        $this->assign('user', $user);
        return $this->fetch();
    } else {
        return redirect('user/session/create')->with('validate','请先登录');
    }
}
```

`Session::has(param)` 是判断 `param` 的 `session` 值是否存在，现在访问 http://thinkphp.instudy.test/user/auth/read/id/1.html 则会跳转至登录页面。
