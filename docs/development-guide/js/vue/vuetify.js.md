---
id: vuetify
title: Vuetify.js
sidebar_label: Vuetify.js
date: 2020-08-24 16:38:00
description: Vuetify 是一个 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及。
keywords:
  - vuetify
  - vue
  - ui
  - ui库
  - 安装vuetify
  - 安装
---

:::note 简介

Vuetify 是一个 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及。

:::

## 安装

```powershell title="PowerShell"
# 在命令行下，cd 的作用就是将当前作用域移动到对应的目录
cd 你自己想要创建的项目位置

# 使用 Vue CLI 创建一个名为 my-app 的项目，my-app 这个名字也可以自行随意替换
vue create my-app

# 弹出提示：Please pick a preset: (Use arrow keys)
# 用方向键选择：Manually select features 
# 接着按空格选中需要的项目，以下是推荐选用：

# Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 (*) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing                                                                                                                        

# Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) 
# 键入 Y 并回车

# Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
# 选择第一个 Sass/SCSS (with dart-sass) 并回车

# Pick a linter / formatter config:
# 选择 ESLint + Prettier 并回车

# Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
# 按下 A 键全选并回车

# Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
# 选择第一个 In dedicated config files 并回车

# Save this as a preset for future projects? (y/N)
# 键入 N 并回车

# 进入到 my-app 目录
cd my-app

# 添加 vuetify 插件，vuetify 插件会自动帮你配置你所有需要的一切，所以直接添加即可
vue add vuetify

# Choose a preset:
# 选择 Configure (advanced)

# Use a pre-made template? (will replace App.vue and HelloWorld.vue) (Y/n)
# 键入 Y 并回车

# Use custom theme? (y/N)
# 键入 Y 并回车

# Use custom properties (CSS variables)? (y/N)
# 键入 Y 并回车

# Select icon font (Use arrow keys)
# 选择第一个 Material Design Icons 并回车

# Use fonts as a dependency (for Electron or offline)? (y/N) 
# 键入 N 并回车

# Use a-la-carte components? (Y/n)
# 键入 Y 并回车

# Select locale (Use arrow keys)
# 方向键选择 Chinese (simplified) 并回车
```

## 启动项目

<Tabs defaultValue="npm" groupId="operating-systems" values={[ { label: 'npm', value: 'npm', }, { label: 'yarn', value: 'yarn', }, ] }>

<TabItem value="npm">

```powershell title="PowerShell"
# 将命令行目录切换到刚刚创建的项目位置，my-app 对应为上面安装时候创建的名字
cd my-app

# 启动程序
npm run serve
```

</TabItem>
<TabItem value="yarn">

```powershell title="PowerShell"
# 将命令行目录切换到刚刚创建的项目位置，my-app 对应为上面安装时候创建的名字
cd my-app

# 启动程序
yarn serve
```

</TabItem>
</Tabs>

启动完成之后，终端会显示一串类似于以下的代码：

```powershell title="PowerShell"
  App running at:
  - Local:   http://localhost:8081/
  - Network: http://192.168.123.205:8081/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

那么我们只需要进入对应的 `Local` 域名，即可开始本地的开发