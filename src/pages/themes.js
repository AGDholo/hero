import React from 'react';
import Layout from '@theme/Layout';
import {Box, Container, Grid, SvgIcon} from '@material-ui/core';

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
        img: '/img/giraffe.3a90d379.png',
        href: 'https://giraffe.heroui.net',
    },
    {
        text: 'Agency',
        img: '/img/agency.02b063a6.jpg',
        href: 'https://agency.heroui.net',
    },
    {
        text: 'Shock',
        img: '/img/shock.8dd62a99.png',
        href: 'https://shock.heroui.net',
    },
];

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
                p-id="1354"/>
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
                                我们提供可满足 <br/>
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
                                            <Checkicon/>
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
                                            <ShowcaseCard {...item} type="开发者"/>
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
