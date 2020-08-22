---
id: 8-3-update-user
title: 更新用户
sidebar_label: 8.3 更新用户
date: 2020-08-12 12:52:00
description: 在前面的章节中，我们已经为用户创建了一个 `resource` 路由。所以我们只需要在对应的控制器上进行页面输出即可更新用户。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 更新数据
  - 用户
  - 更新
  - 数据库
  - orm
  - 免费书籍
---

## 创建表单

在前面的章节中，我们已经为用户创建了一个 `resource` 路由。

```php title="route/route.php"
// route.php
Route::resource('auth', 'user/auth');
```

所以我们只需要在对应的控制器上进行页面输出即可。

打开 `application\user\controller\Auth.php`：

```php title="application\user\controller\Auth.php"
/**
 * 显示编辑资源表单页.
 *
 * @param  int $id
 * @return \think\Response
 */
public function edit($id)
{
    $user_id = Session::get('user.id');
    if ($user_id !== $id) {
        return redirect('user/auth/edit', ['id' => $user_id]);
    }
    $user = User::find($user_id);
    $this->assign([
        'user' => $user,
    ]);
    return $this->fetch();
}
```

可以看到 `edit` 方法代码前三行中先检验了 id 是否是当然登入用户的 id，如果不是，就跳转到当然登入用户的编辑页面。

需要注意的是，即使这样进行了跳转，也不是安全的。

然后进入 blade `resources\views\user\auth\read.blade.php`：

```html title="resources\views\user\auth\read.blade.php"
<div class="panel-heading mb-3">
  <h4>欢迎您 {{ $user->name }}</h4>
  ++++
  <a
    class="btn btn-primary"
    href="{{ url('user/auth/edit', ['id' => session('user.id')]) }}"
    >编辑资料</a
  >
  ++++
</div>
```

这时候在用户个人资料页面就会出现 `编辑资料` 的按钮了，不过此时点击进去，会抛出模板文件不存在的错误，所以现在来创建模板。

新建 blade `resources\views\user\auth\edit.blade.php`：

```html title="resources\views\user\auth\edit.blade.php"
@extends('_layout.default') @section('title', $user->name) @section('content')
<div class="col-md-offset-2 col-md-8">
  <div class="panel panel-default mt-5">
    <div class="panel-heading mb-3">
      <h4>编辑 {{ $user->name }} 的个人资料</h4>
    </div>
    @if(session('validate'))
    <div class="alert alert-warning" role="alert">
      {{ session('validate') }}
    </div>
    @endif
    <div class="panel-body">
      <form method="POST" action="{{ url('update', ['id' => $user->id]) }}">
        @php echo token() @endphp

        <input type="hidden" name="_method" value="PUT" />

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">用户名</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="{{ $user->name }}"
            name="name"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block">更新</button>
      </form>
    </div>
  </div>
</div>
@stop
```

在上面这段代码中，我们添加了一行 `<input type="hidden" name="_method" value="PUT" >`，其中，`value="PUT"` 表示伪装请求类型。

因为我们是要更新用户资料，所以对应控制器的 `update` 方法，可是在 HTML 标准里，FORM 只有 POST GET 两种方法，所以采用 INPUT 里进行类型伪装的方式，让控制器识别出是更新的操作。

创建模板完成之后，刷新页面，即可看见刚刚添加好的表单。

## 接收数据

打开控制器 `application\user\controller\Auth.php`：

```php title="application\user\controller\Auth.php"
/**
 * 保存更新的资源
 *
 * @param  \think\Request $request
 * @param  int $id
 * @return \think\Response
 */
public function update(Request $request, $id)
{
    $name = $request->name;
    $user_id = Session::get('user.id');
    if ($user_id !== $id) {
        return redirect('user/auth/edit', ['id' => $user_id])->with('validate', '非法操作');
    }
    User::where('id', $user_id)->update(['name' => $name]);
    Session::set('user.name', $name);
    return redirect('user/auth/edit', ['id' => $user_id])->with('validate', '修改成功');
}
```

这段代码中，我们首先将 id 与登入用户的 id 进行对比，以防止模拟表单请求来修改其他用户。  
其次，在数据库更新账户名之后，使用 `session set` 重新设置用户名，保证前端数据的一致性。

这时候，刷新页面，在输入框中随意填写一些字符，再点击更新按钮，页面上就已经修改成功了。

## 验证数据

虽然我们现在已经实现了整个更新用户资料的操作逻辑，但是还不算完，由于前端无法对提交数据进行任何限制，所以在后端要进行二次校验。  
键入命令并打开创建好的文件：

```shell title="shell"
php think make:validate app\user\validate\UpdateUser
```

```php title="php"
protected $rule = [
    '__token__' => 'token',
    'name|名字' => 'require|max:50',
];
```

接着返回控制器 `application\user\controller\Auth.php`：

```php title="application\user\controller\Auth.php"
public function update(Request $request, $id)
{
    $user_id = Session::get('user.id');

    if ($user_id !== $id) {
        return redirect('user/auth/edit', ['id' => $user_id])->with('validate', '非法操作');
    }
    $requestData = $request->put();
    $result = $this->validate($requestData, 'app\user\validate\UpdateUser');

    if (true !== $result) {
        return redirect('user/auth/edit', ['id' => $user_id])->with('validate', $result);
    } else {
        $name = $requestData['name'];
        User::where('id', $user_id)->update(['name' => $name]);
        Session::set('user.name', $name);
        return redirect('user/auth/edit', ['id' => $user_id])->with('validate', '修改成功');
    }
}
```

可以看到这段代码增加了验证数据的步骤，验证唯一 id -> 验证提交数据，最后再进行数据库更新，这样才能提高后端的安全可靠性。

返回前端页面，尝试不填写任何数据就直接提交，就会看到名字不能为空的警告了，届时，整个更新流程已经书写完毕。
