import React, { PureComponent } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import HeaderContet from '../components/job-list/header-content';
import {
  getApplicationMediumEntries,
  getCampaignEntries,
  getDivisionEntries,
  getEmploymentEntries,
  getFieldOfWorkEntries,
  getJobEntries,
  getLocationEntries
} from '../services/contentful';
import { i18n, Link, withNamespaces } from '../services/i18n';
import { Input } from '../components/common/input';

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
      fieldOfWorkEntries
    };
  }

  render() {
    const {
      t,
      // jobEntries,
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries
    } = this.props;
    return (
      <div>
        <Nav />

        <HeaderContet
          {...{
            divisionEntries,
            employmentEntries,
            locationEntries,
            applicationMediumEntries,
            campaignEntries,
            fieldOfWorkEntries
          }}
        />

        <Input
          type="text"
          label="Keywords"
          placeholder="Enter keywords..."
          id="search"
        />

        <Container>
          <Link href="/job">
            <button>Go to About Page</button>
          </Link>
          <p>Hello Next.js</p>

          <button className="btn btn-success">Search</button>

          <h2>TEST TRANSLATIONS: {t('header.lang.en')}</h2>

          <Button
            onClick={() => {
              i18n.changeLanguage('en');
            }}
          >
            EN
          </Button>
          <Button
            onClick={() => {
              i18n.changeLanguage('nl');
            }}
          >
            NL
          </Button>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces('common')(Index);
