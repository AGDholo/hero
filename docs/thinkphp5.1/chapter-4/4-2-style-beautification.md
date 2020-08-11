# 使用 Blade 模板

> Blade 是构建 Laravel 应用所创建的一套模板引擎,众所周知,Laravel 的开发以优雅为名, 我们现在将使用 Blade 进行 ThinkPHP 视图页面的优雅开发。

你可以在 Laravel 中文文档: https://laravel-china.org/docs/laravel/5.7/blade/  查看详细的语法解释

## 安装 Blade  

请按下 Ctrl+Shift+` (请确保在网站根目录 thinkphp.test) 并切换到终端 , 并键入命令:
`composer require luoyy/think-blade`

进入 `config/template` , 将 return 里的内容进行替换:

~~~~ config
// 模板引擎类型
'type' => 'Blade',
// 视图基础目录(集中式)
'view_base' => '',
// 模板起始路径
'view_path' => '',
// 模板文件名分隔符
'view_depr' => DIRECTORY_SEPARATOR,
// 模板文件后缀
'view_suffix' => 'blade.php',
'cache' => [
    'cache_subdir' => false,
    'prefix' => '',
],
'tpl_replace_string' => [],
~~~~

进入到上一章所编写的视图层目录 `application/welcome/view`,将所有 `.html` 后缀修改为 `.blade.php`

## 测试 blade

打开视图层的 `application/welcome/view/index/home.blade.php` 并删除全部内容,键入 {{ time() }}  
进入 `http://thinkphp.test` 若出现 一长串 时间戳,则表示 Blade 模板安装成功.

## 重写视图

>请删除所有视图页面的内容

在 `/public/static` 下增加 `/css/app.css`, `/js/app.js`, 并更改 `default.blade.php`

~~~~ blade
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <title>@yield('title') -- ThinkPHP 入门教程</title>
  <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
  <link rel="stylesheet" href="/static/css/app.css">
</head>
<body>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">ThinkPHP 入门教程</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">主页
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">帮助</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">关于</a>
              </li>
            </ul>
            <a class="btn btn-outline-success my-2 my-sm-0" href="#">注册</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="container">
    @yield('content')
  </div>
  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
  <script src="/static/js/app.js"></script>
</body>
</html>
~~~~

看到代码顶部的 `@yield('title')` 指令是用来显示指定部分的内容.  
同样的,我们在模板继承 `default.blade.php` 之后,只需要使用 `@section('title)` 即可继承并使用.  
找到视图路径 `view/index`, 将下面的模板文件统一加上代码:

~~~~ blade
@extends('_layout.default')
// 对应继承路径：_layout/default.blade.php
~~~~

`@extends` 指继承整个模板文件,而在 `Blade` 中,我们不再使用 `/` 来分割路径,而是使用 `.`  
接着,打开 `home.blade.php`, 我们添加一些欢迎界面.  

~~~~ blade
@extends('_layout.default')
@section('title', '主页')
@section('content')
<section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">欢迎你,我的朋友</h1>
    </div>
</section>
@stop
~~~~

访问 `http://thinkphp.test`, 一个全新的欢迎页面呈现在眼前.