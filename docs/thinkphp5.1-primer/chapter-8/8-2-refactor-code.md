---
id: 8-2-refactor-code
title: 重构代码
sidebar_label: 8.2 重构代码
date: 2020-08-12 12:45:00
description: 在上一章因为中间件失效，我们采用了最原始也是最啰嗦的方法判断用户状态，升级版本之后则可以正常使用中间件。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 重构代码
  - 重构
  - 代码整洁
  - 架构
  - 架构设计
  - 免费书籍
---

## 升级框架

升级框架至最新的安全版本：

```shell title="shell"
composer update
```

## 中间件拦截

在上一章因为中间件失效，我们采用了最原始也是最啰嗦的方法判断用户状态，升级版本之后则可以正常使用中间件。  
之前判断的方式：

~~~php title="php"
if (SessionFacade::has('user'))
~~~

现在创建一个新的中间件,键入命令:

~~~shell title="shell"
php think make:middleware Auth
~~~

打开新建好的中间件文件 `application/http/middleware/Auth.php`：

~~~php title="application/http/middleware/Auth.php"
public function handle($request, \Closure $next)
{
    return $next($request);
}
~~~

`return $next($request);` 表示返回一个 `response` 对象，可以理解为进行下一步的操作。  

如果我们想往控制器内传参，则只需要编写：

~~~php title="application/http/middleware/Auth.php"
public function handle($request, \Closure $next)
{
    $request->hello = 'ThinkPHP';
    
    return $next($request);
}
~~~

然后在控制器内调用：

~~~php title="php"
public function index(Request $request)
{
	return $request->hello; // ThinkPHP
}
~~~

当然了，本节是要管理用户的状态，所以请删除前面的代码，并写入：

~~~php title="application/http/middleware/Auth.php"
if (session('?user')) {
    return $next($request);
} else {
    redirect('user/session/create')->with('validate', '请先登录');
}
~~~

上面代码是标准的流程控制语句，你也可以写成三元运算的方式：

~~~php title="application/http/middleware/Auth.php"
return
    session('?user')
        ? $next($request)
        : redirect('user/session/create')->with('validate', '请先登录');
~~~

这两段代码作用相同，以读者喜好为准。  

请注意，`session()` 方法是 ThinkPHP 框架的[助手函数](https://www.kancloud.cn/manual/thinkphp5_1/354117)。

在本段代码中，`session('?user') 与 Session::has('user')` 等效。  
`session('user') 与 Session::get('user')` 等效  

## 使用中间件

打开 `application/user/controller/Session.php`：

~~~php title="application/user/controller/Session.php"
class Session extends Controller
{
	protected $middleware = [
		'Auth' => [
			'except' => [
                'create',
				'save'
			]
		],
    ];
~~~

`protected $middleware` 则是初始化一个中间件，而 `except` 方法表示，当前控制器下有哪些方法是不使用中间件的。

然后看到 `public function create()` 并修改为：

~~~php title="application/user/controller/Session.php"
public function create()
{
    return $this->fetch();
}
~~~

可以对比之前的代码，我们删除了 `如果用户登录则自动跳转` 以及 `token` 输出，后续操作下面再进行说明。  

再看到 `public function delete($id)` 修改：

~~~php title="application/user/controller/Session.php"
public function delete($id)
{
    session('user', null);
    return redirect('user/session/create')->with('validate', '您已退出');
}
~~~

可以看到，使用中间件之后，代码干净了很多。  

再打开 `application/user/controller/Auth.php`：

~~~php title="application/user/controller/Auth.php"
class Auth extends Controller
{
	protected $middleware = [
		'Auth' => [
			'except' => [
				'create',
				'save'
			]
		],
    ];

	public function create()
	{
		return $this->fetch();
    }

	public function read($id)
	{
		$user = User::find($id);
		$this->assign([
			'user' => $user,
		]);
		return $this->fetch();
    }

~~~


基本的中间件已经使用了，但是现在不管访问什么链接，都会跳出 `未定义变量: token ` 的错误。  

现在来编写前端页面：

~~~html title="resources/views/_layout/header.blade.php"
<div class="dropdown-menu"
        aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item"
        href="{{ url('user/auth/read', ['id' => session('user.id')]) }}">个人主页</a>
    <a class="dropdown-item">
    <form action="{{ url('user/session/delete', ['id' => session('user.id')]) }}"
            method="POST">
        
        @php echo token() @endphp

        <button class="btn btn-block"
                type="submit"
                name="button">退出</button>
    </form>
    </a>
</div>
~~~

可以看到，我们将原先的：  

`<input type="hidden" name="__token__" value="{{ $token }}" />` 

修改为了：  

`@php echo token() @endphp`  

`token()` 方法是框架自带的 `token` 生成方式。

同样的，全局查找：

`<input type="hidden" name="__token__" value="{{ $token }}" />`

并且替换为：  

`@php echo token() @endphp`   

现在 token 输出的问题解决了。

还有一点：在用户以及登录的情况下，进入登录/注册页面都会显示输入框，我们再来进行优化。 
  
打开 `resources/views/user/session/create.blade.php` 和 `resources/views/user/auth/create.blade.php`：  

~~~html title="session/create.blade.php | auth/create.blade.php"
......
@if(session('validate'))
    <div class="alert alert-warning" role="alert">
        {{ session('validate') }}
    </div>
@endif
@if(session('user'))
    <div class="alert alert-success" role="alert">
        您已登入账户: {{ session('user')->name }}
    </div>
@endif
~~~

现在，在登录的状态下访问 http://thinkphp.test/user/session/create.html 看到绿色的已登录提示框。 