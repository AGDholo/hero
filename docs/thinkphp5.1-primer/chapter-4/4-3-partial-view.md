---
id: 4-3-partial-view
title: 局部视图
sidebar_label: 4.3 局部视图
date: 2020-08-12 01:15:00
description: 如果将所有代码都堆积到 `default.blade.php`，可读性会变得极差，并且为以后的维护增加阻碍。所以我们需要将 `header` 单独拆分，成为一个独立的模板文件。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - blade
  - 模板
  - php
  - php模板
  - 教程
---

回到 `default.blade.php`，如果将所有代码都堆积到 `default.blade.php`，可读性会变得极差，并且为以后的维护增加阻碍。所以我们需要将 `header` 单独拆分，成为一个独立的模板文件。

## 头部视图

在 `view/_layout` 下创建 `header.blade.php` 和 `footer.blade.php`  
并将 `default.blade.php` 文件中 `<header> </header>` `<footer> </footer>` 的内容全部剪切到 `header.blade.php` `footer.blade.php`  
将 `default.blade.php` 中 `<div class="container"> </div>` 替换为：

```html title="default.blade.php"
@include('_layout.header')
<div class="container">
  @yield('content')
</div>
@include('_layout.footer')
```

`@include` 是 `Blade` 模板引擎中视图引用方法。
