---
id: 8-6-delete-user
title: 删除用户
sidebar_label: 8.6 删除用户
date: 2020-08-12 13:00:00
description: 本节将为管理员增添删除功能，通过中间件鉴权来达到操作的目的。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据展示
  - 用户
  - 数据库
  - orm
  - 删除用户
  - 删除
  - 免费书籍
---

:::note 提示

本节将为管理员增添删除功能，通过中间件鉴权来达到操作的目的。 

:::

## 添加管理员

我们在之前的课程中，已经在数据库中创建了一个 `god` 字段，但是现在还未存在任何管理员，所以我们在上一节的 `seed` 中设置第一位用户为管理员：

```php title="database\seeds\Users.php"
<?php

use think\migration\Seeder;
use app\user\model\User;

class Users extends Seeder
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $data = [];
        for ($i = 0; $i < 200; $i++) {
            $data[] = [
                'name'      => $faker->userName,
                'password'      => $faker->password,
                'email'         => $faker->email,
            ];
        }

        $this->table('users')->insert($data)->save();

        // allowField(false) 屏蔽 Model 中设置的保护字段 $field
        User::get(1)->allowField(false)->save([
            'god' => true
        ]);
    }
}
```

再次运行 `php think seed:run` 并刷新数据库，即可看到第一位用户已经被设置为管理员。

## 删除功能

在删除功能之前，我们需要判断是否是管理员，在 8.4 权限系统 中已经设置过当前用户的策略，只需要再创建一个管理员策略即可。

创建文件：

```php title="application\behavior\GodPolicy.php"
<?php

namespace app\behavior;

use think\facade\Session;

class GodPolicy
{
  public function run()
  {
    $is_god = Session::get('user.god');

    return $is_god;
  }
}
```

接着创建中间件，在控制台中键入命令：

```shell title="shell"
php think make:middleware GodAuthorize
```

```php title="application\http\middleware\GodAuthorize.php"
<?php

namespace app\http\middleware;

use think\facade\Hook;

class GodAuthorize
{
    public function handle($request, \Closure $next)
    {
        $result = Hook::exec('app\\behavior\\GodPolicy');
        return
            $result
            ? $next($request)
            : redirect('user/session/create')->with('validate', '非法操作');
    }
}
```

```php title="application\user\controller\Auth.php"
...
class Auth extends Controller
{
	protected $middleware = [
		'UserAuthorize' => [
			'except' => [
				'create',
				'save'
			]
		],
		'GodAuthorize' => [
			'only' => [
				'delete'
			]
		]
  ];
...
```

通过综上操作，我们为 `Auth` 控制台中的 `delete` 创建了一个管理员权限校验的方法，接下来编写前端模板。

## 添加删除按钮

编辑前端模板：

```html title="resources\views\user\auth\index.blade.php"
...
<div class="list-group list-group-flush">
  @foreach ($users as $user)
  <div class="list-group-item">
    <a href="{{ url('user/auth/read', ['id' => $user->id]) }}">
      {{ $user->name }}
    </a>
    <form
      action="{{ url('user/auth/delete', ['id' => $user->id]) }}"
      method="post"
      class="float-right"
    >
      @php echo token() @endphp
      <input type="hidden" name="_method" value="DELETE" />
      <button type="submit" class="btn btn-sm btn-danger delete-btn">
        删除
      </button>
    </form>
  </div>
  @endforeach
</div>
...
```

刷新页面，则可以看到删除按钮，可是我们以任意用户来访问这个页面，都能出现删除按钮，所以要在添加一个管理员才能查看的功能，打开控制器：

```php title="application\user\controller\Auth.php"
...
use think\facade\Hook;
...

...
public function index()
{
  $this->assign([
    'users' => User::paginate(10),
    'god' => Hook::exec('app\\behavior\\GodPolicy')
  ]);
  return $this->fetch();
}
...
```

可以看到，我们在 8.4 花了很大功夫解耦权限判断现在起了作用，只需要执行 `Hook` 就能快速的判断是否通过此类操作，再也不用重复的书写一大堆判断条件，现在再来编写前端页面：

```html title="resources\views\user\auth\index.blade.php"
... @if ($god)
<form
  action="{{ url('user/auth/delete', ['id' => $user->id]) }}"
  method="post"
  class="float-right"
>
  @php echo token() @endphp
  <input type="hidden" name="_method" value="DELETE" />
  <button type="submit" class="btn btn-sm btn-danger delete-btn">删除</button>
</form>
@endif ...
```

这时候重新注册一个没有管理员权限的账号，访问 http://thinkphp.test/user/auth/index 就不会看到有任何的删除按钮了，下面来编写删除功能：

```php title="application\user\controller\Auth.php"
...
public function delete($id)
{
  User::where('id', $id)->where('god', false)->delete();
  return redirect('user/auth/index');
}
...
```

请注意，我们在删除语句中添加了一句 `where('god', false)`，这是因为管理员不能够删除自己。  
刷新页面，点击删除按钮，却被提示 `非法操作`，这是因为在 `UserPolicy` 的策略中，我们判断当前登入用户必须要和传入用户一致才能够进行下一步操作，现在来修改中间件。

```php title="application\http\middleware\UserAuthorize.php"
<?php

namespace app\http\middleware;

use Closure;
use think\facade\Hook;

class UserAuthorize
{
    public function handle($request, Closure $next)
    {
        $is_god = Hook::exec('app\\behavior\\GodPolicy');
        if ($is_god) {
            return $next($request);
        }

        $result = Hook::exec('app\\behavior\\UserPolicy', $request->id);
        return
            $result
            ? $next($request)
            : $this->redirect();
    }

    private function redirect()
    {
        return redirect('user/session/create')->with('validate', '非法操作');
    }
}
```

上述代码中，当我们判断到当前登入用户是管理员时，即可直接返回下一步，即管理员拥有超级权限。  
再刷新页面并点击删除按钮，现在如愿以偿的工作了。
