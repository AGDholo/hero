---
id: 3-2-static-page
title: 静态页面
sidebar_label: 3.2 静态页面
date: 2020-08-11 19:10:00
description: 通过配置路由的方式来学习如何创建静态页面并展示到浏览器上
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 路由
  - 静态页面
  - 免费书籍
---

当我们进入一条链接时，应用程序做了以下处理：

1. 路由寻找 URL 对应的控制器。
2. 控制台将指定的方法进行操作。
3. 渲染给模板。

## ThinkPHP 的路由

打开 route/route.php 看到这条语句，将路由做如下修改:

```php title="route/route.php"
Route::get('hello', 'index/hello');
```

以上命令的功能:

- Route:: 注册路由静态方法
- get 请求方式
- 'hello' 请求 URL
- 'index/hello' 响应默认控制器中 hello 方法 (`application/index/controller/Index.php/:function hello`)

目录： `application/index/controller/` 为默认控制器的根目录，当我们在路由中书写时，如果只使用默认控制器，只用写入 `控制器文件名/方法`

:::note 提示

并不推荐使用省略的方法使用路由语句，这是难以维护的。

:::

你应该使用： `'index/index/hello' //模块(index)/控制器(controller)/index.php/:function hello`

打开上述控制器文件，找到 `hello` 方法并修改为:

```php title="application/index/controller/Index.php/:function hello"
public function hello()
{
    return 'hello world'
}
```

打开浏览器，访问 http://thinkphp.test/hello 则会出现 `hello world`，一个简单的 GET 路由就完成了。

## 在路由中直接输出

在阅读本小节之前，首先要知道一个概念 闭包: http://php.net/manual/zh/functions.anonymous.php  
稍作了解之后，我们来学习在路由中使用闭包。 打开路由文件，将刚才的语句进行修改:

```php title="route/route.php"
Route::get('hello', function() {
    return 'hello closures';
});
```

这时候再刷新浏览器，输出语句就变成了 `hello closures`。  
这就是路由中闭包的基本用法。

## 在控制器中响应模板

现在请删除刚才的闭包语句，重新写入:

```php title="route/route.php"
Route::get('hello', 'index/index/hello');
```

进入路由对应的控制器，修改代码:

```php title="application/index/controller/Index.php/:function hello"
public function hello()
{
    return view();
}
```

:::note 提示

return view(); 是一个助手函数，表示响应对应的模板。

:::

如果 `view()` 中未添加任何参数,则会响应到默认路径:

`当前模块/view/当前控制器名(小写)/当前操作(小写).html`  
`application/index(当前模块)/view/index(当前控制器名)/hello.html(当前操作)`

1. 我们创建对应路径的对应文件 `application/index/view/index/hello.html` 并写入 `hello view`。
2. 再次刷新浏览器，输出语句就变成了 `hello view`。

## 在路由闭包操作中响应模板

:::note 提示

在实际的开发中，如果我们只是不进行任何操作的响应一个模板文件,那么使用控制器实在是有点大材小用,这时候,就需要在路由中直接输出。

:::

打开路由文件，将刚才的语句进行修改

```php title="route/route.php"
Route::get('hello', function() {
    return view('index@index/hello');
});
```

这条语句表示该路由会渲染 `index` 模块下面的 `view/index/hello.html` 模板文件输出。

1. 进入到对应的模板文件，将 `hello view` 修改为 `hello router view`。
2. 再次刷新浏览器，输出语句就变成了 `hello router view`。

## 为路由提供参数

我们在第一次对路由文件进行修改的时候，将 `Route::get('hello/:name', 'index/index/hello');` 变为了 `Route::get('hello', 'index/index/hello');`  
其中，删除了 `:name` 这几个字符， `:name` 就是本节提到的 `参数`。

将刚才写入的闭包语句改为:

```php title="route/route.php"
Route::get('hello/:name', function ($name) {
    return 'Hello,' . $name;
});
```

`function($name)` 将 `$name` 赋值为 `:name` 如果我们进入 `http://thinkphp/hello/param`，那么就会输出 `hello param`

## 创建第一个静态页面

请删除所有路由语句和 index 模块 (`application/[index/]`)

打开路由文件，写入语句：

```php title="route/route.php"
Route::get('', 'welcome/index/home');
Route::get('/help', 'welcome/index/help');
Route::get('/about', 'welcome/index/about');
```

创建控制器文件: `application/welcome/controller/Index.php`  
并在创建好的控制器文件中写入：

```php title="application/welcome/controller/Index.php"
namespace app\welcome\controller;
use think\Controller;

class Index extends Controller
{
    public function home()
    {
        return '主页';
    }
    public function help()
    {
        return '帮助';
    }
    public function about()
    {
        return '关于';
    }
}
```

- `namespace` 代表的是 命名空间，你可以把它理解成路径，不同的 `namespace` 代表着不同的路径，只有正确路径下的操作才能被找到。
- `use` 是使用 php 各种类的一个操作，如果我们想要使用其他封装好的类，仅仅 `use` 对应的文件就行了。
- `class Index extends Controller` 表示当前的 Index(如果我们创建在控制器下的是 `AnyThing.php`，那么我们就要使用 `AnyThing` 而不是 `Index`) 类继承了 `Controller` 类，如果继承，就可以使用 `Controller` 中的所有公共方法。

现在你访问

```
http://thinkphp.test
http://thinkphp.test/help
http://thinkphp.test/about
```

那对应就会显示 主页、帮助、关于。

## 渲染视图

:::note 提示

我们在前面的内容中已经学习了 在控制器中响应视图、在路由中响应视图，现在只需要将 `return ''` 改为 `return view()` 即可。

:::

现在来创建模板，路径：`application/welcome/view/index`，分别创建:

- home.html
- help.html
- about.html

```html title="application/welcome/view/index/home.html"
<!DOCTYPE html>
<html>
  <head>
    <title>thinkphp.test</title>
  </head>
  <body>
    <h1>主页</h1>
  </body>
</html>
```

```html title="application/welcome/view/index/help.html"
<!DOCTYPE html>
<html>
  <head>
    <title>thinkphp.test</title>
  </head>
  <body>
    <h1>帮助</h1>
  </body>
</html>
```

```html title="application/welcome/view/index/about.html"
<!DOCTYPE html>
<html>
  <head>
    <title>thinkphp.test</title>
  </head>
  <body>
    <h1>关于</h1>
  </body>
</html>
```

这时候再刷新浏览器，响应的就是视图文件了。

## 公共视图

:::note 提示

如果我们每次都在模板中写入完整且重复的语句，那样的工作量是巨大且低维护性的，那么现在就需要将视图的公共部分拆分出来。

:::

1. 现在请创建一个公共模板的文件夹：`application/welcome/view/_layout`
2. 并在该目录下创建一个 `default.html` 的文件并写入

```html title="application/welcome/view/_layout/default.html"
<!DOCTYPE html>
<html>
  <head>
    <title>thinkphp.test</title>
  </head>
  <body>
    <h1>{block name="content"}正文{/block}</h1>
  </body>
</html>
```

然后点开 `home.html`，将内容修改为：

```html title="application/welcome/view/index/home.html"
{extend name="_layout/default" /} {block name="content"} 主页 {/block}
```

其他两个页面也像这样修改,只需要将 `content` 里的文字变化一下即可。 修改完成后,刷新浏览器,现在模板成功的继承并且输出了！
