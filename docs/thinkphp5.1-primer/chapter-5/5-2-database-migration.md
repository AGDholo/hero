---
id: 5-2-database-migration
title: 数据库迁移
sidebar_label: 5.2 数据库迁移
date: 2020-08-12 01:52:00
description: 在 `ThinkPHP` 中，我们使用 `think-migration` 管理数据表结构，你可以把他看作是在数据库中的版本控制，我们使用该工具每次的操作都会有详细的时间进行记录，同样的，也可以无缝回滚或者修改。
keywords:
  - thinkphp
  - 入门
  - 实战
  - 初学者
  - 数据库迁移
  - 架构设计
  - thinkphp数据库
  - php数据库
  - orm
  - 免费书籍
---

:::note 提示
在 `ThinkPHP` 中，我们使用 `think-migration` 管理数据表结构，你可以把他看作是在数据库中的版本控制，我们使用该工具每次的操作都会有详细的时间进行记录，同样的，也可以无缝回滚或者修改。
:::

## 迁移的好处

* 协同开发避免出错
* 数据表版本控制
* 部署简单方便

## 安装 think-migration

请按下 `Ctrl+Shift+` 并切换到终端（请确保在网站根目录 thinkphp.test）。  
我们将使用 `Composer` 安装扩展 `think-migration`，键入命令：

~~~shell title="shell"
composer require topthink/think-migration
~~~

## 使用 think-migration

~~~shell title="shell"
# 创建迁移表
php think migrate:create Users

# 弹出提示：Create migrations directory?[是否创建新目录？]
键入：y
~~~

这时候看到根目录，程序为我们创建了一个 `database/migrations` 的目录，并且创建了一个以时间戳开头的 User 文件。  
进入创建好的 User 文件，修改代码：

~~~php title="database/migrations/<date>_users.php"
use think\migration\Migrator;
use think\migration\db\Column;
class Users extends Migrator
{
    /**
     * Migrate Up.
     */
    public function up()
    {
        // create the table
        $table = $this->table('users');
        $table->addColumn('name', 'string')
            ->addColumn('email', 'string')
            ->addColumn('password', 'string')
            ->addColumn('avatar', 'string', ['null' => true, 'default'=>NULL, 'comment'=>'用户头像'])
            ->addColumn('god', 'boolean', ['default'=>FALSE, 'comment'=>'管理员'])
            ->addTimestamps('created_at', 'updated_at')
            ->addIndex('email', ['unique' => true])
            ->addIndex('god')
            ->create();
    }
    /**
     * Migrate Down.
     */
    public function down()
    {
        $this->dropTable('users');
    }
}
~~~

我们来看看这段代码干了什么:

* addColumn 字面意思,添加一列。
* addColumn('字段名'，'值类型'，'数组来表示：长度限制、默认值、注释等')。
* $this->dropTable 字面意思，删除表。
* function up() 运行迁移时做的动作。
* function down() 回滚迁移时做的动作。

详细文档请查阅：[数据库迁移文档](http://docs.phinx.org/)

## 运行迁移

打开 `/config/database.php` 将对应的数据库名、密码等填写为宝塔面板上的值，如果提示权限被拒绝，将数据库密码换成 `root` 密码。  
请按下 `Ctrl+Shift+` 并切换到终端（请确保在网站根目录 thinkphp.test），键入命令：

~~~shell title="shell"
php think migrate:run
~~~

这时候再打开 `PHPMyAdmin`，就有会看见迁移的数据表。  
同样的，如果你键入命令：

~~~shell title="shell"
php think migrate:rollback
~~~

则会回滚到上一步的操作。