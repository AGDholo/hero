# 集中视图

> 在 4.5 小节中我们复制了一遍 _layout 文件夹,这样做对开发其实是百害无一利的,我们现在设置 模板配置文件 让视图单独的保存起来。

## 修改配置

进入 `/app/config/template.php` 修改代码

~~~~ php
// 视图基础目录(集中式)
~'view_base' => '',~
'view_base' => Env::get('ROOT_PATH') . 'resources' . DIRECTORY_SEPARATOR . 'views' . DIRECTORY_SEPARATOR,
// 模板起始路径
~'view_path' => '',~
'view_path' => Env::get('ROOT_PATH') . 'resources' . DIRECTORY_SEPARATOR . 'views' . DIRECTORY_SEPARATOR
~~~~

## 增加目录

创建文件夹 `/resources/views/`  
并在 `views` 目录下创建文件 `_layout` 和 `welcome/index` 复制先前在模块 `view` 中创建的文件到以上目录就行,完成后删除前面章节提到的所有在模块下创建的 `view` 文件.

目录结构如图所示:
![image](https://box.kancloud.cn/fe290b5d617872168c07e10d7bea5eb7_273x329.png)

现在打开浏览器,进入 `http://thinkphp.test`,看看是否正常输出了.