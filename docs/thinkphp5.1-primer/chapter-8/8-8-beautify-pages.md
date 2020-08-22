---
id: 8-8-beautify-pages
title: 美化页面
sidebar_label: 8.8 美化页面
date: 2020-08-12 13:08:00
description: 本章的后端逻辑代码到这里就结束了，现在的前端页面不难看，但是也不好看，由于我们是要打造一款类似微博功能的网站，恰好今日看到 twitter 更新了 UI，布局简洁值得模仿，由下图为例，我们尽可能的还原 twitter。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据展示
  - 用户
  - 前端
  - 页面
  - 美化页面
  - 代码整洁
  - 免费书籍
---

:::note 提示

本章的后端逻辑代码到这里就结束了，现在的前端页面不难看，但是也不好看，由于我们是要打造一款类似微博功能的网站，恰好今日看到 twitter 更新了 UI，布局简洁值得模仿，由下图为例，我们尽可能的还原 twitter。  

:::

![eMfWYd.png](https://s2.ax1x.com/2019/07/27/eMfWYd.png)

## 整体布局

由于上图中的布局呈 左-中-右 的形式，所以我们需要把默认布局更改为三栏。

```html title="resources\views_layout\default.blade.php"
...
<body>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        @include('_layout.header')
      </div>
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item">
            <a
              onclick="window.history.go(-1); return false;"
              class="btn btn-light"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
            @yield('title')
          </li>
          <li class="list-group-item">
            @yield('content')
          </li>
        </ul>
      </div>
      <div class="col">
        @include('_layout.footer')
      </div>
    </div>
  </div>
  ...
</body>
```

修改侧栏布局：

```html title="resources\views_layout\header.blade.php"
<header>
  <nav class="nav flex-column">
    <ul class="list-group list-group-flush">
      <li class="list-group-item list-group-item-action">
        <a class="nav-link" href="{{ url('welcome/index/home') }}">
          主页
        </a>
      </li>
      <li class="list-group-item list-group-item-action">
        <a class="nav-link" href="{{ url('user/auth/index') }}">
          所有用户
        </a>
      </li>
      @if(session('user'))
      <li class="list-group-item list-group-item-action">
        <a class="nav-link" href="{{ url('user/auth/index') }}">
          个人资料
        </a>
      </li>
      <li class="list-group-item list-group-item-action">
        <div class="dropdown">
          <a
            class="nav-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href=""
            >更多</a
          >

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item">
              <form
                action="{{ url('user/session/delete', ['id' => session('user.id')]) }}"
                method="POST"
              >
                @php echo token() @endphp
                <button class="btn btn-block" type="submit" name="button">
                  退出
                </button>
              </form>
            </a>
          </div>
        </div>
      </li>
      @else
      <a
        class="btn btn-outline-success my-2 my-sm-0"
        href="{{ url('user/auth/create') }}"
      >
        注册
      </a>
      <a
        class="btn btn-outline-success my-2 my-sm-0"
        href="{{ url('user/session/create') }}"
      >
        登录
      </a>
      @endif
    </ul>
  </nav>
</header>
```

创建样式表文件：

```css title="public\static\css\app.css"
.pagination li:first-child {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.pagination li {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
```

全部保存后，刷新页面，可以看到整体的布局已经非常接近了，细节方面存在瑕疵，我们将会在后面的章节中持续优化。
