import App, { Container } from 'next/app';
import React from 'react';
import { appWithTranslation } from '../services/i18n';
import Head from 'next/head';

import '../styles/index.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Rhenus Logistics</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default appWithTranslation(MyApp);

// https://github.com/zeit/next.js/#custom-app
