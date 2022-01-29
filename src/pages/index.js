import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: '#041434',
    }
  },
  components: {
    MuiAccordion: {
      root: {
        boxShadow: 'none',
      }
    }
  },
  typography: {
    fontFamily: [
      '"Reaver", serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <ThemeProvider theme={theme}>
        <Container maxWidth={"lg"}>
          <Box py={18}>
            <HomepageFeatures />
          </Box>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}
