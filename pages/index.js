import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Input } from '../components/common/input';
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
import { withNamespaces } from '../services/i18n';

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

        <Container>
          {/*<Link href="/job">
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
          </Button>*/}

          <hr />

          <h2>Filters:</h2>

          <div className="d-flex">
            <Input
              type="text"
              label={t('filters.keywords')}
              placeholder="Enter keywords..."
              id="search"
            />

            <Input
              type="select"
              label="Location"
              id="location"
              placeholder="Select Location"
              options={locationEntries}
            />

            <Input
              type="select"
              label="Field of work"
              id="fieldOfWork"
              placeholder="Select Field of work"
              options={fieldOfWorkEntries}
            />

            <Input
              type="select"
              label="Division"
              id="division"
              placeholder="Select Division"
              options={fieldOfWorkEntries}
            />

            <div className="form-group">
              <label>&nbsp;</label>
              <button className="btn btn-success form-control">Search</button>
            </div>
          </div>

          <hr />
          <hr />

          <h2>Results:</h2>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces('common')(Index);
