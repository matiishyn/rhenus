import React from 'react';
import App, {Container} from 'next/app';


// todo can be moved to SCSS
import 'bootstrap/dist/css/bootstrap.css';

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

export default MyApp;

// https://github.com/zeit/next.js/#custom-app
