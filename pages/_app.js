import App, {Container} from 'next/app';
import React from 'react';
import {appWithTranslation} from '../i18n';

import '../styles/index.scss';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);

// https://github.com/zeit/next.js/#custom-app
