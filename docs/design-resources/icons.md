---
id: icons
title: 图标库
sidebar_label: 图标库
date: 2020-10-31 21:39:00
description: 获取免费高质量的图标库。
keywords:
  - 前端
  - 资源
  - 设计
  - 设计资源
  - 开发
  - 开发资源
  - 图标库
---

import {ShowcaseCard} from '@site/src/pages/components/showcase';

import Grid from '@material-ui/core/Grid'; import {Icons} from './data';

<Grid container spacing={4} alignItems="stretch">
  {[...Icons].map((item, i) => {
    return (
      <Grid item xs={12} md={6} xl={4} key={i}>
        <ShowcaseCard {...item} type="作者" />
      </Grid>
    );
  })}
</Grid>
