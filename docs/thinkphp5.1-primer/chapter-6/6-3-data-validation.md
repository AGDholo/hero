---
id: 6-3-data-validation
title: 数据验证
sidebar_label: 6.3 数据验证
date: 2020-08-12 03:10:00
description: 通过依赖注入验证方法来快速简便地验证表单传入的数据
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 表单
  - 数据验证
  - 依赖注入
  - 用户
  - 数据库
  - 免费书籍
---

## 使用资源路由及控制器

修改路由 `route\route.php`:

```php title="route\route.php"
# 删除 Route::get('/signup', 'user/auth/create');
Route::resource('auth', 'user/auth');
```

在 ThinkPHP 的资源路由解析中，以上语句表示注册了一个名称为 `auth` 的资源路由到 `user` 模块的 `auth` 控制器。  
实际注册的路径就是 `application\user\controller\Auth.php`。

打开 `Auth` 控制器 `application\user\controller\Auth.php`，在之前的章节中我们已经使用 `Think` 命令行来创建了一个资源控制器，可以看到系统为我们自动生成了 7 个 模块，其中包括：

| 标识   | 请求类型 | 生成路由规则  | 对应操作方法（默认） |
| ------ | -------- | ------------- | -------------------- |
| index  | GET      | auth          | index                |
| create | GET      | auth/create   | create               |
| save   | POST     | auth          | save                 |
| read   | GET      | auth/:id      | read                 |
| edit   | GET      | auth/:id/edit | edit                 |
| update | PUT      | auth/:id      | update               |
| delete | DELETE   | auth/:id      | delete               |

可以看到，我们在表单注册页面的 `URL` 路径是 http://thinkphp.test/user/auth/create.html  
在 [6.2 表单构建](6-2-signin-form) 中我们写入的 HTML 代码 `<form method="POST" action="{{ url('save') }}">`。  
其中 `url('save')` 就是对应上面路由规则的 `save` 方法，  
也就是在 `auth` 控制器中的 `public function save(Request $request)`。

在 `save` 方法下添加：

```php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    dump($request->post());
}
```

`$request` 是 ThinkPHP 提供的一个[请求方法](https://www.kancloud.cn/manual/thinkphp5_1/353985)，用于获取所有发送至当前控制器的方法/值。  
而这一段 `save(Request $request)` 则是通过 `依赖注入` 将 `use think\Request;` 注入到此控制器。

## 依赖注入

:::note 提示

依赖注入其实本质上是指对类的依赖通过构造器完成自动注入，例如在控制器架构方法和操作方法中一旦对参数进行对象类型约束则会自动触发依赖注入，由于访问控制器的参数都来自于 `URL` 请求，普通变量就是通过参数绑定自动获取，对象变量则是通过依赖注入生成。[ThinkPHP5.1 容器和依赖注入](https://www.kancloud.cn/manual/thinkphp5_1/353958) 

:::

依赖注入与控制反转相辅相成,大多数面向对象的编程语言,在调用一个类时都需要先进行实例化 `$class = new class()` 生成一个对象，那么当我们在一个 `function` 中使用 `class()` 类的方法则需要：

```php title="php"
class x{
  a = new b()
}
```

如果要传递参数,则要改为:

```php title="php"
class x{
  a = new b(param)
}
```

如果我们有一个对 `class b` 的改动，那么我们在 `class x` 当中也需要对之修改，这就是 `x` 对 `b` 的依赖，例如现在 `class b` 将接收至少两个参数，在 `class x` 当中我们就要修改为：

```php title="php"
class x{
  a = new b(param1, param1)
}
```

这也就要分别修改两次，这样的传递参数是高度耦合的，在一个中大型项目中这样的依赖可能多大几十个，如果一个依赖的构造改变，那么其余的几十个也要随之修改，这样的工程繁琐且易错，程序也会极难维护，要解决这个问题，就出现了 `控制反转` 的思想。  
把 `class b` 从 `class x` 中抽离出来，交给第三方的构造器去控制依赖，ThinkPHP 通过 [容器和依赖注入](https://www.kancloud.cn/manual/thinkphp5_1/353958) 方法，注入到 `class b`，这样就进行了解耦。

## 提交表单

我们在 [6.2 表单构建](6-2-signin-form) 上的页面随意填写些字符，并提交，则会出现:

```php title="php"
array (size=5)
  '__token__' => string '7831e09189d70586bd3145bb486ea556e1f9dd4b' (length=40)
  'name' => string 'test' (length=4)
  'email' => string 'test@test' (length=9)
  'password' => string 'test' (length=4)
  'password_confirmation' => string 'test' (length=4)
```

可以看到, `$request` 方法已经能够获取到从前端应用发送过来的值，现在再修改控制器：

```php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    dump($request->name);
}
```

`$request->name` 就是获取提交表单中 `<input type="text" class="form-control" name="name">` `name` 字段的值。  
也是上面打印出来的 `'name' => string 'test' (length=4)` 的值。

## 创建验证器

在控制台中键入：

```shell title="shell"
php think make:validate user/Auth
```

会创建 `application\user\validate\Auth.php`，打开此文件并键入：

```php title="application\user\validate\Auth.php"
protected $rule = [
    '__token__' => 'token',
    'name|名字'  =>  'require|max:50',
    'email|邮件' =>  'require|email|unique:users|max:255',
    'password|密码' => 'require|confirm|min:6'
];
```

在验证规则中：  
`name|名字(验证字段|别名)`，别名的作用是在验证出错之后会发送 `别名+错误信息`，在未设置别名之前，错误信息会输出 `name 不能为空`，而设置之后则会输出 `名字不能为空`。  
`unique:users` 则是值在 users 表里唯一字段，不得重复。  
`confirm` 将会自动对比 `密码(name="password")` `确认密码(name="password_confirm")` 字段的值。

更多内置的验证规则请查看：[ThinkPHP5.1 内置规则](https://www.kancloud.cn/manual/thinkphp5_1/354107)

## 设置验证器

打开控制器 `application\user\controller\Auth.php` 并修改：

```php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    $requestData = $request->post();
    $result = $this->validate($requestData, 'app\user\validate\Auth');
    if (true !== $result) {
        dump($result);
    } else {
        dump($requestData);
    }
}
```

`validate($requestData, 'app\user\validate\Auth')` 的前部分表示传入的值，后半部分表示要使用的验证器。

现在在重新返回前端页面进行尝试提交不同的表单，则可以看到传入值正确/错误而返回的不同提示/值。
