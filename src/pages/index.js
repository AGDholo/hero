/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Button, Grid, Box, Container } from '@material-ui/core';

const features = [
  {
    title: <>易于使用</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        我们提供开箱即用的主题，只需几行命令即可开始使用，无需任何繁琐步骤。
      </>
    ),
  },
  {
    title: <>专注于代码</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        不要在样式难题中苦苦探索，查阅我们提供的各种小技巧和其他教程，让你的大脑放轻松。
      </>
    ),
  },
  {
    title: <>基于 Vuetify</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        没有比这更友好的组件库了，得益于 Vue 的强大特性和低上手难度，绝对是你得不二选择。
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)} style={{ textAlign: 'center' }}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`免费模板，Vuetify 模板，前端技巧和教程`}
      description="免费模板，Vuetify 模板，前端技巧和教程">
      <Container maxWidth="xl">
        <Box my={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} style={{ alignSelf: 'center' }}>
              <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                免费获取可商用的 Vuetify 主题，以及前端技巧和教程
            </Box>
              <Box fontSize="h6.subtitle1" my={2}>
                使用 Vuetify 构建的可轻松定制的现代 Vue UI 模板和组件。
                所有组件都是模块化的，在所有设备和分辨率上都为响应式。
                品牌的颜色也完全可定制。免费供个人和商业使用。
            </Box>

              <Link to="docs/vuetify2-tricks/introduction">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ display: 'block', width: '100%', height: '52px', 'font-size': '1rem' }}

                >
                  浏览教程
            </Button>
              </Link>

            </Grid>

            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={6}>
              <img src="https://wx1.sbimg.cn/2020/08/10/oerIR.png">
              </img>
            </Grid>
          </Grid>
        </Box>

        <main>
          <Box my={12}>
            {features && features.length > 0 && (
              <section className={styles.features}>
                <div>
                  <div className="row">
                    {features.map(({ title, imageUrl, description }) => (
                      <Feature
                        key={title}
                        title={title}
                        imageUrl={imageUrl}
                        description={description}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </Box>
        </main>
      </Container>
    </Layout>
  );
}

export default Home;
