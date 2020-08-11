---
id: vue-cli-4
title: Vue CLI 4 安装
sidebar_label: Vue CLI 4 安装
date: 2020-05-18 06:39:00
description: 使用 vue cli 来安装 vuetify 项目
keywords:
  - vue
  - vue-cli
  - vuetify
  - 安装 
  - 初学者
---

[Vue CLI](https://cli.vuejs.org/) 是一个快速初始化 Vue 项目的工具，非常简单易于上手。

## 安装 Vue CLI 4

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="npm"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```shell title="shell"
npm install -g @vue/cli
```

</TabItem>
<TabItem value="yarn">

```shell title="shell"
yarn global add @vue/cli
```

</TabItem>
</Tabs>

## 检查安装是否成功

```shell title="shell"
# @vue/cli 4.2.2 或类似版本号输出
vue -V
```

## 初始化项目

```shell title="shell"
# 在命令行下，cd 的作用就是将当前作用域移动到对应的目录
cd 你自己想要创建的项目位置

# 使用 Vue CLI 创建一个名为 my-app 的项目，my-app 这个名字也可以自行随意替换
vue create my-app

# 进入到 my-app 目录
cd my-app

# 添加 vuetify 插件，vuetify 插件会自动帮你配置你所有需要的一切，所以直接添加即可
vue add vuetify
```

## 启动项目

<Tabs
  defaultValue="npm"
  groupId="operating-systems"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```shell title="shell"
# 将命令行目录切换到刚刚创建的项目位置，my-app 对应为上面安装时候创建的名字
cd my-app

# 启动程序
npm run serve
```

</TabItem>
<TabItem value="yarn">

```shell title="shell"
# 将命令行目录切换到刚刚创建的项目位置，my-app 对应为上面安装时候创建的名字
cd my-app

# 启动程序
yarn serve
```

</TabItem>
</Tabs>

启动完成之后，终端会显示一串类似于以下的代码：

```shell title="shell"
  App running at:
  - Local:   http://localhost:8081/
  - Network: http://192.168.123.205:8081/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

那么我们只需要进入对应的 `Local` 域名，即可开始本地的开发
