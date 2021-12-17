import React from 'react';
import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ThemeProvider
} from "@material-ui/core/styles";
import theme from "../theme";
import '../styles/globals.scss';
import { dashStyles } from '../css/style';
import SideBar from '../components/SideBar/SideBar';
import MainHeader from '../components/MainHeader/MainHeader';

function MyApp({ Component, pageProps }: AppProps) {
  const classes = dashStyles();
  return (
    <React.Fragment>
    <Head>
      <title>Klasah</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <aside className={classes.aside}>
            <SideBar />
          </aside>

          <main className={classes.main}>
            <header className="main-header">
              <MainHeader />
            </header>

            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
  </React.Fragment>
  )
}

export default MyApp
