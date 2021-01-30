---
id: user
title: "用户授权"
sidebar_label: "用户授权"
date: 2021-01-31 00:14:00
keywords:
- hero-admin
- heroadmin
- framework
- 开发框架
- 业务框架
- 安装
---

## 登录
### API

```php
public function login($value): object
```

### 返回值

类型：object  
示例：

```json
{
  "message": {
    "accessToken": {
      "name": "deven.stiedemann@example.net",
      "abilities": [
        "*"
      ],
      "tokenable_id": 1,
      "tokenable_type": "App\\Models\\User",
      "updated_at": "2020-12-19T09:07:14.000000Z",
      "created_at": "2020-12-19T09:07:14.000000Z",
      "id": 16
    },
    "plainTextToken": "16|fc4ei17QJKPFdl3AvrdNpkS6me512B104onSF7Yw"
  },
  "context": {
    "code": 200
  }
}
```

### 用例

```php
use App\Service\UserService;
use App\Http\Requests\UserRequest;

public function store(UserRequest $request,
                      UserService $userService): object
{
    $email    = $request->post("email");

    return $userService->login($email);
}
```

## 登出

```php
public function logout($value): int
```

### 返回值

类型：int  
示例：
* 0：登出失败
* 1：登出成功

### 用例

```php
use App\Service\UserService;
use App\Http\Requests\UserRequest;

public function store(UserRequest $request,
                      UserService $userService): int
{
    $email    = $request->post("email");

    return $request->logout($email);
}
```