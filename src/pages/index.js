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
import {Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography,} from '@material-ui/core';
import TextTransition, {presets} from 'react-text-transition';
import {AppsOutlined, ForumOutlined} from "@material-ui/icons";

const tutor = [
  {
    logo: '/img/vuetify.svg',
    title: 'Vuetify 技巧',
    desc:
      'Vuetify 是一个完全遵循 Material Design 设计的 UI 组件库，构建在 Vue 之上。本教程深入浅出的讲诉了大量 Vuetify 技巧以及离线部署等开发者相关的内容。',
    to: '/docs/vuetify2-tricks/introduction',
    date: '03/05/2020',
  },
  {
    logo: '/img/开发环境搭建指南.png',
    title: '开发环境搭建指南',
    desc:
      '本书为搭建不同的开发环境提供指导，让你在编程的前奏中不乱手脚。除了传统方式之外，作者更强调使用类似于 Chocolatey 现代管理工具进行环境搭建。',
    to: 'docs/development-guide/introduction',
    date: '03/05/2020',
  },
  {
    logo: 'https://cover.kancloud.cn/agdholo/tp6-p01',
    title: 'ThinkPHP6 Primer 前后端分离实战入门（￥28）',
    desc:
        '本系列书籍将教你如何使用 ThinkPHP6 和 Vue 一步一步构建一个类似 Twitter 的前后端分离应用，让你从实际开发中体会到 ThinkPHP6 API 开发的敏捷、愉悦与轻松。',
    to: 'https://www.kancloud.cn/agdholo/tp6-p01',
    date: '28/08/2020',
  },
  {
    logo: 'https://cover.kancloud.cn/agdholo/thinkphp',
    title: 'ThinkPHP 5.1 入门开发实战',
    desc:
      '本书将教你使用现代工具流构建一个类似微博的应用。 通过本书，你将会学到如 HTML、CSS、JavaScript、PHP、Thinkphp 等 Web 开发的相关基础知识。',
    to: '/docs/thinkphp5.1-primer/readme',
    date: '09/10/2018',
  },
];

function Home() {
  return (
      <Layout
          title="免费模板，Vuetify 主题模板，前端技巧和教程"
          description="免费获取可商用的 Vuetify 主题、编程教程、设计资源、实战书籍，以及前端技巧和教程">
        <div className="bg">
          <Container maxWidth="lg">
            <Box py={16} sx={{py: '300px'}}>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{alignSelf: 'center'}}>
                  <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                    <Box sx={{
                      display: "flex", fontSize: '60px', lineHeight: '113%',
                      fontFamily: '"Reaver", serif',
                      letterSpacing: '5px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}>
                      前沿 Web 开发者社区
                    </Box>


                    <Box sx={{
                      display: "flex", fontSize: '20px',
                      fontFamily: '"Reaver", serif',
                      letterSpacing: '2px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      mt: '5px',
                      mb: '20px'
                    }}
                    >

                      - 《HeroUI Inc.》
                    </Box>

                    <Box sx={{
                      backgroundColor: '#FF6046', width: '80px',
                      height: '3px',
                      minHeight: '3px', my: '30px'
                    }}/>
                  </Box>

                  <Box sx={{display: 'flex'}}>
                    <Link to="/themes">
                      <Button
                          variant="outlined"
                          size="large"
                          color="error"
                          sx={{
                            width: '188px',
                            minWidth: '188px',
                            height: '58px',
                            borderRadius: '6px',
                            border: '3px solid #ffffff90',
                            boxShadow: '0px 0px 5px black',
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            fontSize: '22px',
                            letterSpacing: '2px',
                            fontFamily: 'Reaver, serif',
                            fontWeight: 600,
                          }}>
                        <AppsOutlined sx={{mr: 1}}/> 查看主题
                      </Button>
                    </Link>

                    <Link to="https://jq.qq.com/?_wv=1027&k=J9Zf6Qu5" target="_blank">
                      <Button
                          variant="outlined"
                          size="large"
                          color="error"
                          sx={{
                            width: '188px',
                            minWidth: '188px',
                            height: '58px',
                            borderRadius: '6px',
                            boxShadow: '0px 0px 5px black',
                            display: 'inline-flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            fontSize: '22px',
                            letterSpacing: '2px',
                            fontFamily: 'Reaver, serif',
                            fontWeight: 600,
                            ml: 2
                          }}>
                        <ForumOutlined sx={{mr: 1}}/> 交流群
                      </Button>
                    </Link>
                  </Box>
                </Grid>
            </Grid>
          </Box>
        </Container>
      </div>

      </Layout>
  );
}

export default Home;
