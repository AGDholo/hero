---
id: 6-5-sign-success 
title: 注册成功 
sidebar_label: 6.4 注册成功 
date: 2020-08-12 03:30:00 
description: 数据的校验已经完成，现在我们进行数据的存储。
keywords:

- thinkphp
- 入门
- 实战
- 初学者
- 表单
- 数据存储
- 数据库
- 用户
- 免费书籍

---

## 存储数据

数据的校验已经完成，现在我们进行数据的存储。

打开控制器 `application\user\controller\Auth.php` 并修改:

```php title="application\user\controller\Auth.php"
use app\user\model\User;
...
if (true !== $result) {
    return redirect('user/auth/create')->with('validate',$result);
} else {
    return User::create($requestData);
}
```

此时再重新提交数据，系统会抛出错误 `user` 表不存在。  
ThinkPHP 并未完全遵守前面章节所提到的约定俗称标准。  
即 `UserModel` 对应 `users` 的约定。  
我们现在打开 `application\user\model\User.php` 并修改：

```php title="application\user\model\User.php"
class User extends Model
{
    // 指定数据表名
    protected $table = 'users';
}
```

设置完成之后，再次提交，则会返回类似数据：

```json title="json"
{
  "__token__": "884e7770f55ac2d29964499b1ffabb0a35e8cf88",
  "name": "1123",
  "email": "agdholo@outlook.com",
  "password": "protected $table = 'think_user';",
  "password_confirm": "protected $table = 'think_user';",
  "id": "1"
}
```

这表明我们的数据已经添加进数据库，现在我们打开数据库来查看，会发现 `updated_at` 字段并未自动维护，我们则需要手动设置维护字段：

```php title="config\database.php"
// 自动写入时间戳字段
'auto_timestamp'  => 'timestamp',
```

```php title="application\user\model\User.php"
// 定义数据表名
protected $table = 'users';

// 定义时间戳字段名
protected $createTime = 'created_at';
protected $updateTime = 'updated_at';
```

现在重新添加提交数据，我们的字段已经自动由框架进行维护了。  
可是现在的密码还是明文提交的，我们需要在控制器中对密码进行加密：

```php title="application\user\model\User.php"
// 设置修改器
public function setPasswordAttr($value)
{
    return password_hash($value, PASSWORD_DEFAULT);
}
```

这段代码使用了 `ThinkPHP Model` 提供的修改器功能，`setPasswordAttr($value)` 可以拆分为 `set|Password|Attr`，中部的 `Password`
就是我们要设置的字段值，同样的，如果我们要设置 `name` 字段就写入 `setnameAttr` 就可以了。

[password_hash](http://php.net/manual/zh/function.password-hash.php) 是 PHP 语言内置的一个非对称加密算法，此加密算法不可逆向，只能通过验证取得。

:::danger 禁止

在任何时候都不要使用 `md5` 极其一类的 `摘要算法`，它们属于 `摘要算法` 而不属于 `加密算法`，不可用做加密功能。  
为了您的生命安全，请牢记此项。

:::

同样的,我们只对邮箱做出了 `是否符合邮箱地址规则` 的校验，并没有筛选大小写。

```php title="application\user\model\User.php"
// 设置修改器
public function setPasswordAttr($value)
{
    return password_hash($value, PASSWORD_DEFAULT);
}

public function setEmailAttr($value)
{
    return strtolower($value);
}
```

现在传入的 `email` 字段也会自动转化为小写，对提交的数据已经转换完成了，这时候千万不要已经收工，一个潜在的安全漏洞已经出现。

在控制器 `application\user\controller\Auth.php` 中，我们通过 `User::create($requestData);` 来批量提交所有的字段。  
在数据表中我们有一项 `god` 字段，目的是判断是否是超级管理员。  
如果这时候在前端伪造一个 `god` 字段进行提交，后果不堪设想，所以我们在入库的时候需要进行字段过滤：

```php title="application\user\model\User.php"
// 定义运行操作的字段
protected $field = ['name', 'email', 'password', 'avatar'];
```

允许用户自主提交的字段就不存在 `god` 等能够手动提权的操作了。

## 跳转至成功页面

前面的数据操作都进行完成之后，我们还剩最后一项跳转的任务：

```php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    $requestData = $request->post();
    $result = $this->validate($requestData, 'app\user\validate\Auth');
    if (true !== $result) {
        return redirect('user/auth/create')->with('validate',$result);
    } else {
        $user = User::create($requestData);
        return redirect('user/auth/read')->params(['id' => $user->id]);
    }
}
```

`redirect('user/auth/read')->params(['id' => $user->id])` 中 `params(['id' => $user->id])` 是传递的参数。  
当路由的 `read` 等操作绑定的是 `$id` 时，我们传入 `$id` 将会自动跳转到 `user/auth/read/$id`。

可是现在跳转过去的页面任然是空白，所以我们需要添加一些操作：

```php title="application\user\controller\Auth.php"
public function read($id)
{
    $user = User::find($id);
    $this->assign('user', $user);
    return $this->fetch();
}
```

`User::find($id)` 是模型的一个查询语法，默认查询 `$id(主键值)`。  
接着创建前端文件：

```html title="resources\views\user\auth\read.blade.php"
@extends('_layout.default') @section('title', $user->name) @section('content')
<div class="col-md-offset-2 col-md-8">
  <div class="panel panel-default mt-5">
    <div class="panel-heading mb-3">
      <h4>欢迎您 {{ $user->name }}</h4>
    </div>
  </div>
</div>
@stop
```

现在重新注册个用户,即可自动跳转至欢迎页面了。
