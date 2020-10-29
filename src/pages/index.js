/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button, Grid, Box, Container, Card, CardContent, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const tutor = [
  {
    title: 'Vuetify 技巧',
    desc: '本教程深入浅出的讲诉了大量的常用 Vuetify 技巧',
    to: '/docs/vuetify2-tricks/introduction'
  },
  {
    title: '开发环境搭建指南',
    desc: '本书为搭建不同系统下不同环境的搭建提供指导，让你在编程的前奏中不乱手脚。',
    to: 'docs/development-guide/introduction'
  },
  {
    title: 'ThinkPHP6 Primer 前后端分离实战入门',
    desc: '本系列书籍将教你如何使用 ThinkPHP6 和 Vue 一步一步构建一个类似 Twitter 的前后端分离应用，让你从实际开发中体会到 ThinkPHP6 API 开发的敏捷、愉悦与轻松。',
    to: 'https://www.kancloud.cn/agdholo/tp6-p01'
  },
  {
    title: 'ThinkPHP 5.1 入门开发实战',
    desc: '本书将教你使用现代工具流构建一个类似微博的应用。',
    to: '/docs/thinkphp5.1-primer/readme'
  },
]

function Home() {
  return (
    <Layout
      title="免费模板，Vuetify 模板，前端技巧和教程"
      description="免费获取可商用的 Vuetify 主题，以及前端技巧和教程"
    >
      <div style={{ backgroundColor: '#0c1b39', color: '#fff' }}>
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} style={{ alignSelf: 'center' }}>
                <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                  <Alert severity="error" variant="filled">
                    <Link href="https://www.kancloud.cn/agdholo/tp6-p01" style={{ color: 'white' }}>
                      全新的 <strong>ThinkPHP6</strong> 前后端分离实战书籍已经发售，立即查看！
                    </Link>
                  </Alert>

                免费获取可商用的 Vuetify 主题，以及前端技巧和教程
              </Box>
                <Box fontSize="h6.subtitle1" my={4}>
                  使用 Vuetify 构建的可轻松定制的现代 Vue UI 模板和组件。
                  所有组件都是模块化的，在所有设备和分辨率上都为响应式。
                  品牌的颜色也完全可定制。免费供个人和商业使用。
              </Box>

                <Link to="docs/vuetify2-tricks/introduction">
                  <Button variant="contained" color="primary" size="large">
                    浏览教程
                </Button>
                </Link>

                <Link href="https://theme.heroui.net/">
                  <Button color="primary" size="large">
                    查看主题
                </Button>
                </Link>
              </Grid>

              <Grid item xs={12} md={1} />
              <Grid item xs={12} md={6}>
                <img
                  src={useBaseUrl('img/undraw_Camera_re_cnp4.svg')}
                  alt="imnages"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>

      <Container maxWidth="xl">
        <main>
          <Box my={12}>
            <div style={{ textAlign: 'center' }}>
              <Box fontSize="h6.fontSize" style={{ color: 'var(--ifm-color-primary)' }}>
                介绍
            </Box>
              <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                获取高质量的教程
            </Box>
            </div>

            <div style={{ marginTop: '30px' }}>
              <Grid container spacing={3}>
                {[...tutor].map((item, i) => {
                  return (
                    <Grid item xs={12} md={4} xl={3}>
                      <Link to={item.to}>
                        <Card variant="outlined" style={{ height: '100%' }}>
                          <CardContent>
                            <Typography variant="h4" gutterBottom component="h3">
                              {item.title}
                            </Typography>
                            <Typography variant="h5" component="h2">

                            </Typography>
                            <Typography color="textSecondary">
                              {item.desc}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
                    </Grid>
                  )
                })}

              </Grid>

            </div>
          </Box>
        </main>
      </Container>

    </Layout>
  );
}

export default Home;
