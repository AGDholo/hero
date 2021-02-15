import React from 'react';
import Layout from '@theme/Layout';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createMuiTheme,
  Grid,
  Hidden,
  MuiThemeProvider,
  responsiveFontSizes,
  Typography,
} from '@material-ui/core';
import {DashboardOutlined, FolderOpenOutlined} from '@material-ui/icons';
import Link from '@docusaurus/core/lib/client/exports/Link';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Examples() {
  const examples = [
    {
      title: '依赖注入',
      subtitle: '(Service $service)',
      url: 'https://carbon.now.sh/embed/m7YcRMiDKVQ2zZKI9aJq',
      height: '392px',
    },
    {
      title: '链式调用',
      subtitle: '($chainService->chain->chain->get)',
      url: 'https://carbon.now.sh/embed/6lPUvfKyanUknMiVV59R',
      height: '311px',
    },
    {
      title: '智能适配器',
      subtitle: '(Adapter $adapter)',
      url: 'https://carbon.now.sh/embed/XRczVl44mcfCQLmm7LJg',
      height: '311px',
    },
    {
      title: '高阶前端组件',
      subtitle: '<h-components>',
      url: 'https://carbon.now.sh/embed/UHcxx2QMtqUzaeXl1QXZ',
      height: '400px',
    },
  ];

  return (
    <Grid container spacing={4}>
      {[...examples].map((item) => {
        return (
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography variant="h3" component="h5">
                {item.title}
              </Typography>
              <Typography variant="h5" component="h5" color="primary">
                {item.subtitle}
              </Typography>
            </Box>

            <Box marginTop="10px">
              <iframe
                title={item.title}
                height={item.height}
                src={item.url}
                sandbox="allow-scripts allow-same-origin"
                width="100%"
                style={{border: '0px'}}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

function Stack() {
  const items = [
    {title: 'PHP', subtitle: 'v8.x'},
    {title: 'Laravel', subtitle: 'v8.x'},
    {title: 'JavaScript', subtitle: 'ECMA2021'},
    {title: 'Vue', subtitle: 'v2.x/v3.x'},
  ];

  return (
    <Grid container spacing={4}>
      {[...items].map((item) => {
        return (
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h3" component="h5">
                  {item.title}
                </Typography>
                <Typography variant="h6" component="h6">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

function Footer() {
  return <Box textAlign="center">@HeroAdmin 2021</Box>;
}

function Admin() {
  return (
    <Layout title="Hero Admin 下一代业务开发框架">
      <MuiThemeProvider theme={theme}>
        <Box>
          <Container
            style={{
              height: `calc(100vh - 60px)`,
            }}
            maxWidth="xl">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{height: '100%'}}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" component="h2">
                  <Box fontWeight={500}>面向开发者的</Box>
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{color: 'rgb(50, 201, 229)'}}>
                  <Box fontWeight={500}>下一代快速开发框架</Box>
                </Typography>

                <Box marginTop={5} display="flex">
                  <Link to="/docs/admin/framework/readme">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<FolderOpenOutlined />}>
                      后端文档
                    </Button>
                  </Link>

                  <Box marginLeft="4px">
                    <Link href="https://vadmin.heroui.net/">
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        sx={{color: 'white'}}
                        endIcon={<DashboardOutlined />}>
                        前端预览
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              <Hidden mdDown>
                <Grid item xs={12} md={5}>
                  <img
                    src={useBaseUrl('img/maintenance.svg')}
                    alt="introduction hero admin"
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </Box>

        <Box bgcolor="black" color="white" paddingY="50px">
          <Container maxWidth="xl">
            <Box textAlign="center">
              <Typography variant="h3" component="h3">
                服务
              </Typography>

              <Box marginTop="10px">
                <Typography variant="h5" component="h5">
                  框架提供快速开发组件以服务的形式进行依赖注入，完全解耦并优雅的进行链式调用，极大程度上提高开发速度并减小心智负担
                </Typography>
              </Box>
            </Box>

            <Box textAlign="center" marginTop="30px">
              <Examples />
            </Box>
          </Container>
        </Box>

        <Box paddingY="50px">
          <Container maxWidth="xl">
            <Box textAlign="center">
              <Typography variant="h3" component="h3">
                技术栈
              </Typography>

              <Box marginTop="10px">
                <Typography variant="h5" component="h5">
                  使用最前沿的技术栈和最新的框架版本，保证项目的安全和开发高效率。{' '}
                </Typography>
              </Box>

              <Box marginTop="20px">
                <Stack />
              </Box>
            </Box>
          </Container>
        </Box>

        <Footer />
      </MuiThemeProvider>
    </Layout>
  );
}

export default Admin;
