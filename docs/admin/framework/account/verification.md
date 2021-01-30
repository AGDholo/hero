---
id: verification
title: "密码验证"
sidebar_label: "密码验证"
date: 2021-01-31 00:14:00
keywords:
- hero-admin
- heroadmin
- framework
- 开发框架
- 业务框架
- 安装
---

## 验证

### API

```php
public function verify(string $email, string|int $password): bool
```

### 返回值

类型：bool  
示例：
* 0：验证失败
* 1：验证成功

### 用例

```php
use App\Http\Requests\UserRequest;
use App\Service\VerificationService;

public function store(UserRequest $request,
                      VerificationService $verificationService): object
{
    $email    = $request->post("email");
    $password = $request->post("password");

    return $verificationService->verify($email, $password);
}
```

