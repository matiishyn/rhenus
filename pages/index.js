import Link from 'next/link';

import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import {Header} from '../components/header';
import {withNamespaces} from '../i18n';

export class Index extends Component {
  render() {
    const {t} = this.props;
    return (
      <div>
        <Header/>

        <Container>
          <Link href="/job">
            <button>Go to About Page</button>
          </Link>
          <p>Hello Next.js</p>
          <h1>ENV: {process.env.TEST}</h1>

          <h2>
            {t('header.lang.en')}
          </h2>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default withNamespaces('common')(Index);


