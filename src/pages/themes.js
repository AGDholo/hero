import React from 'react';
import Layout from '@theme/Layout';
import {Button, Grid, Box, Container, SvgIcon} from '@material-ui/core';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Color from 'color';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useFourThreeCardMediaStyles} from '@mui-treasury/styles/cardMedia/fourThree';

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
    img: '/img/giraffe.3a90d379.png',
    href: 'https://giraffe.heroui.net/',
  },
  {
    text: 'Agency',
    img: '/img/agency.02b063a6.jpg',
    href: 'https://agency.heroui.net/',
  },
  {
    text: 'Shock',
    img: '/img/shock.8dd62a99.png',
    href: 'https://shock.heroui.net/',
  },
];

const useGridStyles = makeStyles(({breakpoints}) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({color}) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({color}) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({classes, image, title, subtitle}) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({color: '#203f52'});
  const styles1 = useStyles({color: '#4d137f'});
  const styles2 = useStyles({color: '#ff9900'});
  const styles3 = useStyles({color: '#34241e'});
  return (
    <Grid classes={gridStyles} container spacing={4}>
      {[...theme].map((item, i) => {
        return (
          <Grid item>
            <Link to={item.href}>
              <CustomCard classes={styles} title={item.text} image={item.img} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
});

function Checkicon() {
  return (
    <SvgIcon
      t="1604042827377"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1353"
      width="24"
      height="24">
      <path
        d="M451.669333 589.994667l241.365334-241.322667 60.330666 60.330667-301.696 301.653333-181.034666-180.992L330.965333 469.333333l120.704 120.661334zM512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z"
        fill="#4b5ff7"
        p-id="1354"></path>
    </SvgIcon>
  );
}

function themes() {
  return (
    <Layout title="免费可商用的 Vue/Vuetify 现代模板">
      <Container maxWidth="xl">
        <Box my={24}>
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
              <SolidGameCardDemo />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}

export default themes;
