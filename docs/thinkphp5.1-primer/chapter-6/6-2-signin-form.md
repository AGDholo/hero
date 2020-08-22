---
id: 6-2-signin-form
title: 表单构建
sidebar_label: 6.2 表单构建
date: 2020-08-12 02:59:00
description: 本节将为用户注册、登录创建一个带有数据交互的表单页面
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 表单
  - 注册
  - 登录
  - 用户
  - 数据库
  - 免费书籍
---

更改之前创建好的注册页面：

```html title="resources/views/user/auth/create。blade。php"
@extends('_layout。default') @section('title'， '注册') @section('content')
<div class="col-md-offset-2 col-md-8">
  <div class="panel panel-default mt-5">
    <div class="panel-heading mb-3">
      <h4>注册</h4>
    </div>
    <div class="panel-body">
      <form method="POST" action="{{ url('save') }}">
        <input type="hidden" name="__token__" value="{{ $token }}" />

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">用户名</span>
          </div>
          <input type="text" class="form-control" name="name" />
        </div>

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

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">确认密码</span>
          </div>
          <input type="password" class="form-control" name="password_confirm" />
        </div>

        <button type="submit" class="btn btn-primary btn-block">注册</button>
      </form>
    </div>
  </div>
</div>
@stop
```

修改控制器代码：

```php title="application/user/controller/Auth.php"
public function create()
{
    $token = $this->request->token('__token__', 'sha1');
    $this->assign('token', $token);
    return $this->fetch();
}
```

这一步的目的是将自定义 CSRF Token 传入模板当中。

## CSRF 防御

:::note 提示

跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF，是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。 https://zh。wikipedia。org/zh/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0  
假如一家银行用以运行转账操作的 URL 地址如下：`http://www。examplebank。com/withdraw?account=AccoutName&amount=1000&for=PayeeName`  
那么，一个恶意攻击者可以在另一个网站上放置如下代码：`<img src="http://www。examplebank。com/withdraw?account=Alice&amount=1000&for=Badman">`  
如果有账户名为 Alice 的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失 1000 资金。  
这种恶意的网址可以有很多种形式，藏身于网页中的许多地方。此外，攻击者也不需要控制放置恶意网址的网站。  
例如他可以将这种地址藏在论坛，博客等任何用户生成内容的网站中。这意味着如果服务端没有合适的防御措施的话，用户即使访问熟悉的可信网站也有受攻击的危险。 

:::

## 防御措施

- 添加校验 token

:::note 提示

由于 `CSRF` 的本质在于攻击者欺骗用户去访问自己设置的地址，所以如果要求在访问敏感数据请求时，要求用户浏览器提供不保存在 `cookie` 中，并且攻击者无法伪造的数据作为校验，那么攻击者就无法再运行 `CSRF` 攻击。这种数据通常是窗体中的一个数据项。服务器将其生成并附加在窗体中，其内容是一个伪随机数。当客户端通过窗体提交请求时，这个伪随机数也一并提交上去以供校验。正常的访问时，客户端浏览器能够正确得到并传回这个伪随机数，而通过 CSRF 传来的欺骗性攻击中，攻击者无从事先得知这个伪随机数的值，服务端就会因为校验 `token` 的值为空或者错误，拒绝这个可疑请求。 

:::

- 检查 Referer 字段

:::note 提示 

`HTTP` 头中有一个 `Referer` 字段，这个字段用以标明请求来源于哪个地址。在处理敏感数据请求时，通常来说，`Referer` 字段应和请求的地址位于同一域名下。以上文银行操作为例，`Referer` 字段地址通常应该是转账按钮所在的网页地址，应该也位于 `www.examplebank.com` 之下。而如果是 `CSRF` 攻击传来的请求，`Referer` 字段会是包含恶意网址的地址，不会位于 `www.examplebank.com` 之下，这时候服务器就能识别出恶意的访问。  
这种办法简单易行，工作量低，仅需要在关键访问处增加一步校验。但这种办法也有其局限性，因其完全依赖浏览器发送正确的 `Referer` 字段。虽然 `http` 协议对此字段的内容有明确的规定，但并无法保证来访的浏览器的具体实现，亦无法保证浏览器没有安全漏洞影响到此字段。并且也存在攻击者攻击某些浏览器，篡改其 `Referer` 字段的可能。 

:::

上面这段代码中的 `{:token()}` 是通过添加校验 `token` 来防止 `CSRF` 攻击。
