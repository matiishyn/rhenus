import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import {Nav} from '../components/nav';
import {getJobEntries, getFieldOfWorkEntries} from '../cont';
import {withNamespaces, Link, i18n} from '../i18n';
import HeaderContet from "../components/header-content";

export class Index extends Component {
  static async getInitialProps() {
    const jobEntries = getJobEntries();
    const fw = getFieldOfWorkEntries();
    return {
      namespacesRequired: ['common'],
      jobEntries,
      fw,
    };
  }

  render() {
    const {t, jobEntries, fw} = this.props;
    console.log(jobEntries, fw);
    return (
      <div>
        <Nav/>
        <HeaderContet/>
        <Container>
          <Link href="/job">
            <button>Go to About Page</button>
          </Link>
          <p>Hello Next.js</p>

          <h2>
            TEST TRANSLATIONS: {t('header.lang.en')}
          </h2>

          <Button onClick={() => {
            i18n.changeLanguage('en');
          }}>EN</Button>
          <Button onClick={() => {
            i18n.changeLanguage('nl');
          }}>NL</Button>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default withNamespaces('common')(Index);


