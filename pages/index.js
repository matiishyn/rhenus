import React, {PureComponent} from 'react';
import {Button, Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import HeaderContet from "../components/header-content";
import {Nav} from '../components/nav';
import {
  getApplicationMediumEntries,
  getCampaignEntries,
  getDivisionEntries,
  getEmploymentEntries,
  getFieldOfWorkEntries,
  getJobEntries,
  getLocationEntries,
} from '../cont';
import {i18n, Link, withNamespaces} from '../i18n';

export class Index extends PureComponent {
  static async getInitialProps() {

    const jobEntries = await getJobEntries();
    const divisionEntries = await getDivisionEntries();
    const employmentEntries = await getEmploymentEntries();
    const locationEntries = await getLocationEntries();
    const applicationMediumEntries = await getApplicationMediumEntries();
    const campaignEntries = await getCampaignEntries();
    const fieldOfWorkEntries = await getFieldOfWorkEntries();


    return {
      namespacesRequired: ['common'],
      jobEntries,
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries,
    };
  }

  render() {
    const {
      t, jobEntries,
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries
    } = this.props;
    // console.log('job:', jobEntries);
    // console.log('fieldOfWork:', fieldOfWorkEntries);
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


