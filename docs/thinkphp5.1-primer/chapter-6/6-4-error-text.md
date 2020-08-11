---
id: 6-4-error-text
title: 优雅地显示错误信息
sidebar_label: 6.4 错误信息
date: 2020-08-12 03:25:00
description: 我们已经完成了控制器调用验证器来达到验证的目的，可是在控制器里如果直接输出错误信息 `return $error` 会跳转到一个新的空白页面来单独显示，这样的用户体验非常差，这次我们将在表单上使用 `flash 闪存` 进行一次性的错误信息展示。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 表单
  - 数据验证
  - 错误信息
  - 用户
  - 错误
  - 抛出错误
  - 免费书籍
---

:::note 提示
在 [6.3 数据验证](6-3-data-validation) 我们已经完成了控制器调用验证器来达到验证的目的，可是在控制器里如果直接输出错误信息 `return $error` 会跳转到一个新的空白页面来单独显示，这样的用户体验非常差，这次我们将在表单上使用 `flash 闪存` 进行一次性的错误信息展示。
:::

## 闪存数据

`flash 闪存` 是 [ThinkPHP5.1 Session](https://www.kancloud.cn/manual/thinkphp5_1/354117) 所提供的方法，`flash 闪存` 的数据在下次请求之前有效，意味着这个数据只能输出一次，很符合这一节所要实现的业务场景。

~~~php title="application\user\controller\Auth.php"
public function save(Request $request)
{
    $requestData = $request->post();
    $result = $this->validate($requestData, 'app\user\validate\Auth');
    if (true !== $result) {
        return redirect('user/auth/create')->with('validate',$result);
    } else {
        dump($requestData);
    }
}
~~~

`return redirect('user/auth/create')->with('validate',$result);` 中 `redirect('user/auth/create')` 是跳转到对应的 `控制器/方法`  
`with('validate',$result)` 则是 `redirect` 提供的一个快捷 `flash 闪存` 的方法。  
与 `Session::flash('validate',$result);` 效果一样。

详细文档请查看:

* [ThinkPHP5.1 Session](https://www.kancloud.cn/manual/thinkphp5_1/354117)
* [ThinkPHP5.1 重定向](https://www.kancloud.cn/manual/thinkphp5_1/353996)

## 在前端中显示

非常简单的,我们只用在之前创建的注册页面 `resources\views\user\auth\create.blade.php` 中添加：

~~~html title="resources\views\user\auth\create.blade.php"
<div class="panel-heading mb-3">
    <h4>注册</h4>
</div>
++++
@if(session('validate'))
    <div class="alert alert-warning" role="alert">
        {{ session('validate') }}
    </div>
@endif
++++
~~~

这下就可以完美的显示出错误信息了。