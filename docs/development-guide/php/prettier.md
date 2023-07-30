---
id: prettier
title: 借助 prettier 格式化代码
sidebar_label: 格式化代码
date: 2020-11-28 02:16:00
description: Prettier 是一个 JS 包，生态丰富，基于社区的 PHP 插件即可完成代码的格式化，让团队代码整洁统一。
keywords:
  - php
  - prettier
  - 代码格式化
  - 格式化
  - 代码风格
---

:::note 介绍

Prettier 是一个 JS 包，生态丰富，基于社区的 PHP 插件即可完成代码的格式化，让团队代码整洁统一。

:::

由于 Prettier 是 JS 工具，所以在开发环境中你需要安装 Node.js 并使用 npm 在本地项目中安装 prettier。

:::info 前置条件

请先阅读：

- [PHP]
- [Node.js](../js/nodejs)

:::

## 手动安装

### 1. 新建文件夹

新建一个名为 `php-prettier-demo` 的文件夹，并进入。

### 2. 初始化 `package.json`

`package.json` 是 JS 中包管理的配置文件，和 `composer.json` 功能一致，只不过一个是管理 JS 应用，一个则是管理 PHP 应用。

现在打开命令行，键入：

`$ npm init`

一路回车即可，如果你想深入研究 `package.json`
的配置规则的话，请查看：https://docs.npmjs.com/cli/v6/configuring-npm/package-json

### 3. 安装 prettier 插件

在命令行中键入：

`$ npm install --save-dev prettier @prettier/plugin-php`

你会发现 `package.json` 文件中已经出现了这两个依赖项：

```json
"devDependencies": {
  "@prettier/plugin-php": "^0.16.0",
  "prettier": "^2.2.0"
}
```

现在格式化插件就安装成功了。

### 4. 通过命令行使用 prettier 插件

很简单的，如果我们想使用 `npm run xxx` 的形式来调用 prettier 的话，只需要在 `package.json` 中写入：

```json
"scripts": {
  "prettier": "prettier --write ."
},
```

现在调用命令则可以开始使用：

`$ npm run prettier`

### 5. 测试格式化

先新建 `index.php`：

```php
<?php

array_map(function($arg1,$arg2) use ( $var1, $var2 ) {
    return $arg1+$arg2/($var+$var2);
}, array("complex"=>"code","with"=>
    function() {return "inconsistent";}
,"formatting"=>"is", "hard" => "to", "maintain"=>true));
```

然后运行命令：

`$ npm run prettier`

再次打开该 PHP 文件，则可以看到代码已经完成格式化：

```php
<?php

array_map(
    function ($arg1, $arg2) use ($var1, $var2) {
        return $arg1 + $arg2 / ($var1 + $var2);
    },
    [
        "complex" => "code",
        "with" => function () {
            return "inconsistent";
        },
        "formatting" => "is",
        "hard" => "to",
        "maintain" => true,
    ]
);
```

### 本文源码

https://github.com/AGDholo/php-prettier-demo

### 附录

以下是 prettier 的一些额外配置：

#### 忽略要格式化的文件

如果我们有一些不想要进行格式化的文件应该怎么办？  
例如我们不想要 composer 安装的包文件也被自动格式化或者是想要匹配一些通用文件，  
很简单，只需要新建 `.prettierignore`：

```
/vendor
/public/css/*.css
```

这样做：

- `/vendor` 这个文件夹下面所有文件都不会被格式化
- `/public/css/` 这个文件夹下面所有文件后缀为 .css 的文件都不会被格式化。

#### 自定义格式化规则

如果自带的规则不是我们想要的，想要自定义一些规则该怎么办？也很简单，只需要新建 `.prettierrc`：

```json
{
  "tabWidth": 2,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {"parser": "json"}
    }
  ]
}
```

在上述文件中，我们自定义规则有：

`tabWidth`：每个文件的缩进统一为两个 tab。 `overrides`：内部所定义的就是针对某些后缀或者特定文件进行选择自定义的解释器，  
例如 `.prettierrc` 文件就应用了 `json` 的解释器来进行格式化操作。

更多规则内容请查阅：https://prettier.io/docs/en/options.html

## 启动模板

如果你厌烦了手动配置，想要在框架启动的时候就集成了 prettier 插件，可以查看下面的一些启动模板：

- Laravel 全新启动框架与 prettier 集成：[laravel-prettier-starter](https://github.com/AGDholo/laravel-prettier-starter)
