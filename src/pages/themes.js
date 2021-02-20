import React from 'react';
import Layout from '@theme/Layout';
import {Box, Container, Grid, SvgIcon} from '@material-ui/core';

import {Check} from '@material-ui/icons';
import {ShowcaseCard} from './components/showcase';

const feature = [
  '3 个完整应用程序模板',
  '20+ 单个页面',
  '50+ 组件',
  '支持多种 UI 库',
  '完全响应式',
  '可深度定制化',
];

const theme = [
  {
    text: 'Giraffe',
    desc: '新闻、博客或杂志应用程序主题',
    img: '/img/giraffe.3a90d379.png',
    href: 'https://giraffe.heroui.net',
  },
  {
    text: 'Agency',
    desc: '一个用于快速启动的单页可滚动主题',
    img: '/img/agency.02b063a6.jpg',
    href: 'https://agency.heroui.net',
  },
  {
    text: 'Shock',
    desc: '企业前后台主题，包含多个前端页面以及后台管理',
    img: '/img/shock.8dd62a99.png',
    href: 'https://shock.heroui.net',
  },
];

function Checkicon() {
  return <Check sx={{color: 'rgb(50, 201, 229)'}} />;
}

function themes() {
  return (
    <Layout title="免费可商用的 Vue/Vuetify 现代模板">
      <Container maxWidth="xl" sx={{height: 'calc(100vh - 60px)'}}>
        <Box alignItems="center" sx={{height: '100%'}}>
          <Grid
            container
            spacing={3}
            alignContent="center"
            alignItems="center"
            style={{height: '100%'}}>
            <Grid item xs={12} md={6} style={{alignSelf: 'center'}}>
              <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                我们提供可满足 <br />
                各种需求的现代 Vue 模板
              </Box>
              <Box fontSize="h6.subtitle1" my={4}>
                使用 Vuetify，Ant Design Vue 等 UI 库构建的易于定制的现代 Vue UI
                模板和组件。
                所有的组件都是模块化且完全符合响应式的，不用担心各种设备上的兼容性的问题。
              </Box>

              <Grid container>
                {[...feature].map((item) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        marginTop: '10px',
                        display: 'flex',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Checkicon />
                      <div style={{marginLeft: '5px'}}>{item}</div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                {[...theme].map((item) => {
                  return (
                    <Grid item xs={12} md={6}>
                      <ShowcaseCard {...item} type="开发者" />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}

export default themes;
