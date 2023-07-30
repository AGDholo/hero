---
id: 8-4-permission-system
title: 权限系统
sidebar_label: 8.4 权限系统
date: 2020-08-12 12:57:00
description: 我们在上一节的开发当中，使用了大量重复的权限检验方法，例如 `$user_id = Session::get('user.id');`，可是每次使用都要进行复制一遍，长期下来代码将会变成又长又臭的面条，改一发而动全身，这样的代码可维护性大大降低，所以我们需要把这些代码抽离，进行解耦。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 权限
  - 权限系统
  - 架构
  - 架构设计
  - 中间件
  - 免费书籍
---

:::note 提示

我们在上一节的开发当中，使用了大量重复的权限检验方法，例如 `$user_id = Session::get('user.id');`，可是每次使用都要进行复制一遍，长期下来代码将会变成又长又臭的面条，改一发而动全身，这样的代码可维护性大大降低，所以我们需要把这些代码抽离，进行解耦。

:::

## 权限架构

我们前面的章节已经创建过了用户是否登入的中间件 `application\http\middleware\Auth.php`，所以现在只需要判断当前操作用户是否与登入用户一致就行了。  
设计的权限架构如下所示：

策略方法进行一致性对比 -> 将行为注册至钩子 -> 控制器验证输出

创建文件 `application\behavior\UserPolicy.php`：

```php title="application\behavior\UserPolicy.php"
<?php
namespace app\behavior;

use think\facade\Session;

class UserPolicy
{
    public function run($params)
    {
        return
            (int) Session::get('user.id') === (int) $params
            ? true
            : false;
    }
}
```

这段代码中，`run` 方法表示默认执行的逻辑操作，可以看到 return 的下一行判断：如果当前用户未登入或一致性不符，就会抛出 false。  
请注意，在前面章节中所讲述过 PHP 的全等判断标准，事实上是要求“类型，值”一致，如果你这样写：

```php title="application\behavior\UserPolicy.php"
Session::get('user.id') === $params
// Session::get('user.id') 类型为 string
// $params 类型为 int
// return false
```

所以在做全等（三个等号）判断时，一定要注意这点。

接下来，我们将在中间件内使用钩子调用策略，键入命令 `php think make:middleware UserAuthorize` 并打开创建好的中间件文件：

```php title="application\http\middleware\UserAuthorize.php"
<?php

namespace app\http\middleware;

use think\facade\Hook;

class UserAuthorize
{
    public function handle($request, \Closure $next)
    {
        // 注册 UserPolicy 策略，传入请求的 ID 值，再根据上面的代码进行判断
        $result = Hook::exec('app\\behavior\\UserPolicy', $request->id);
        return
            $result
            ? $next($request)
            : redirect('user/session/create')->with('validate', '非法操作');
    }
}
```

接着打开之前创建好的两个控制器：  
`application\user\controller\Auth.php`  
`application\user\controller\Session.php`

将里面的中间件名称 `Auth` 更名为 `UserAuthorize`

```php title="Auth.php | Session.php"
'Auth' => [
    'except' => [
        'create',
        'save'
    ]
],
//更改后
'UserAuthorize' => [
    'except' => [
        'create',
        'save'
    ]
],
```

然后删除之前判断用户一致的多余代码：

```php title="application\user\controller\Auth.php"
public function edit($id)
{
    // 删除
    $user_id = Session::get('user.id');
    if ($user_id !== $id) {
        return redirect('user/auth/edit', ['id' => $user_id]);
    }

public function update(Request $request, $id)
{
    // 删除
    $user_id = Session::get('user.id');
    if ($user_id !== $id) {
        return redirect('user/auth/edit', ['id' => $user_id])->with('validate', '非法操作');
    }
```

然后在当前页面下按下 ctrl+f，并在第一行键入 $user_id，第二行键入 $id，之后点击如下图所示的按钮进行全局替换：  
[![eEC3Hx.png](https://s2.ax1x.com/2019/07/24/eEC3Hx.png)](https://imgchr.com/i/eEC3Hx)

本小节所写内容都是为了避免“面条式代码”，所谓“面条式代码”就是将一行代码多处复制使用，在后续维护中如果需要修改某一项功能，则需要找到所有被复制的代码一一修改，这样不仅毫无观赏性，并且会对后续开发造成极大困扰。
