---
id: readme
title: 设计资源
sidebar_label: 简介
date: 2020-09-15 21:39:00
description: 除了会编写程序外，一些设计方面的工作也可以轻松涉猎。
keywords:
  - 前端
  - 资源
  - 设计
  - 设计资源
  - 开发
  - 开发资源
---

import {AD} from '@site/src/pages/components/ad';

<AD />

除了会编写程序外，一些设计方面的工作也可以轻松涉猎。

下面列出了一些资源可以让你的设计提升到一个新的水平。

import {ShowcaseCard} from '@site/src/pages/components/showcase';

import Grid from '@material-ui/core/Grid'; import Data from './data';

<Grid container spacing={4}>
  {[...Data].map((item, i) => {
    return (
      <Grid item xs={12} md={6} key={i}>
        <ShowcaseCard {...item} type="作者" />
      </Grid>
    );
  })}
</Grid>
