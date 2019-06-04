import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import {Nav} from '../components/nav';
import {withNamespaces, Link, i18n} from '../i18n';

export class Index extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  render() {
    const {t} = this.props;
    console.log(this.props);
    return (
      <div>
        <Nav/>

        <Container>
          <Link href="/job">
            <button>Go to About Page</button>
          </Link>
          <p>Hello Next.js</p>
          <h1>ENV: {process.env.TEST}</h1>

          <h2>
            {t('header.lang.en')}
          </h2>

          <Button onClick={() => {i18n.changeLanguage('en')}}>EN</Button>
          <Button onClick={() => {i18n.changeLanguage('nl')}}>NL</Button>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default withNamespaces('common')(Index);


