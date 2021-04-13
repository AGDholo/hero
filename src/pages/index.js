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
import cx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';

import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';
import TextTransition, {presets} from 'react-text-transition';
import {AppsOutlined, ForumOutlined} from "@material-ui/icons";

const useStyles = makeStyles(({breakpoints, spacing}) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(to top right, rgba(100,115,201,.33), rgba(25,32,72,.7))',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

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

function CCard(props) {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Link to={props.to}>
      <Card
        className={cx(styles.root, shadowStyles.root)}
        style={{height: '100%'}}>
        <CardMedia className={styles.media} image={props.logo} />
        <CardContent>
          <Typography
              variant="overline"
              sx={{color: 'rgba(255, 255, 255, 0.7)'}}>
            {props.date}
          </Typography>
          <Typography
              className="text-underline"
              sx={{color: '#fff'}}
              variant="h5"
              gutterBottom>
            {props.title}
          </Typography>
          <Typography sx={{color: 'rgba(255, 255, 255, 0.7)'}} variant="body2">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

const TEXTS = ['Vuetify 主题', '编程教程', '设计资源', '实战书籍'];

function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
  }, []);

  return (
      <Layout
          title="免费模板，Vuetify 主题模板，前端技巧和教程"
          description="免费获取可商用的 Vuetify 主题、编程教程、设计资源、实战书籍，以及前端技巧和教程">
        <div style={{color: '#fff'}} className="bg">
          <Container maxWidth="xl">
            <Box py={16} sx={{py: '300px'}}>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{alignSelf: 'center'}}>
                  <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                    <Box sx={{
                      display: "flex", fontSize: '60px', lineHeight: '113%',
                      fontFamily: '"Reaver", serif',
                      letterSpacing: '5px',
                      fontWeight: 600,
                      color: '#ffffffee',
                      textTransform: 'uppercase',
                      textShadow: '0px 0px 20px #000000',

                    }}>
                      “免费高质量的
                      <TextTransition
                          text={TEXTS[index % TEXTS.length]}
                          springConfig={presets.slow}
                          style={{color: '#32c9e5'}}
                      />”
                    </Box>


                    <Box sx={{
                      display: "flex", fontSize: '20px',
                      fontFamily: '"Reaver", serif',
                      letterSpacing: '2px',
                      fontWeight: 600,
                      color: '#ffffff90',
                      textTransform: 'uppercase',
                      textShadow: '0px 0px 20px #000000',
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
                            borderColor: '#fff',
                            color: '#fff',
                            width: '288px',
                            minWidth: '288px',
                            height: '78px',
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
                            color: '#fff',
                            width: '288px',
                            minWidth: '288px',
                            height: '78px',
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

      <Container maxWidth="lg">
        <main>
          <Box mb={12}>
            <div>
              <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" id="book">
                最新书籍/文档
              </Box>
            </div>

            <div style={{marginTop: '30px'}}>
              <Grid container spacing={6}>
                {[...tutor].map((item) => {
                  return (
                      <Grid item xs={12} md={4}>
                        <CCard {...item} />
                      </Grid>
                  );
                })}
              </Grid>
            </div>
          </Box>
        </main>
      </Container>

        <div>
          <Box sx={{textAlign: 'center'}}>
            @2021 HeroUI. Generated with <a href="https://docusaurus.io/" target="_blank"
                                            rel="noreferrer">docusaurus</a> & <a href="https://material-ui.com/"
                                                                                 target="_blank"
                                                                                 rel="noreferrer">Material-UI</a>
          </Box>
        </div>
      </Layout>
  );
}

export default Home;
