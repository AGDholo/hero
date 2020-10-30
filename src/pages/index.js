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
import {
  Button,
  Grid,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import cx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import {useBlogTextInfoContentStyles} from '@mui-treasury/styles/textInfoContent/blog';
import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({breakpoints, spacing}) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
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
    title: 'ThinkPHP6 Primer 前后端分离实战入门',
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
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card
      className={cx(styles.root, shadowStyles.root)}
      style={{height: '100%'}}>
      <CardMedia className={styles.media} image={props.logo} />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={props.date}
          heading={props.title}
          body={props.desc}
        />
        <Link to={props.to}>
          <Button className={buttonStyles}>阅读更多</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function Home() {
  return (
    <Layout
      title="免费模板，Vuetify 模板，前端技巧和教程"
      description="免费获取可商用的 Vuetify 主题，以及前端技巧和教程">
      <div style={{backgroundColor: '#0c1b39', color: '#fff'}} className="bg">
        <Container maxWidth="xl">
          <Box py={24}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} style={{alignSelf: 'center'}}>
                <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                  <Alert severity="error" variant="filled">
                    <Link
                      href="https://www.kancloud.cn/agdholo/tp6-p01"
                      style={{color: 'white'}}>
                      全新的 <strong>ThinkPHP6</strong>{' '}
                      前后端分离实战书籍已经发售，立即查看！
                    </Link>
                  </Alert>
                  免费获取可商用的 Vuetify 主题，以及前端技巧和教程
                </Box>
                <Box
                  fontSize="h6.subtitle1"
                  my={4}
                  style={{color: 'rgba(255, 255, 255, 0.7)'}}>
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
            <div style={{textAlign: 'center'}}>
              <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                获取高质量的教程
              </Box>
            </div>

            <div style={{marginTop: '30px'}}>
              <Grid container spacing={6}>
                {[...tutor].map((item, i) => {
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
    </Layout>
  );
}

export default Home;
