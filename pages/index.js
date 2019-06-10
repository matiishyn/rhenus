import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import HeaderContet from '../components/job-list-page/header-content';
import { JobList } from '../components/job-list-page/job-list';
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
import LeftFilter from '../components/job-list-page/left-filter';

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

  state = {
    selectedLocation: null
  };

  render() {
    const {
      // t,
      jobEntries,
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries,
      lng
    } = this.props;

    const { selectedLocation } = this.state;

    return (
      <div>
        <Nav currentLang={lng} />

        <HeaderContet
          {...{
            divisionEntries,
            employmentEntries,
            locationEntries,
            applicationMediumEntries,
            campaignEntries,
            fieldOfWorkEntries
          }}
          selectedLocation={selectedLocation}
        />

        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <LeftFilter
                {...{
                  locationEntries,
                  employmentEntries,
                  fieldOfWorkEntries,
                  divisionEntries
                }}
                selectedLocation={selectedLocation}
                onSelectLocation={selectedLocation =>
                  this.setState({ selectedLocation })
                }
              />
            </div>
            <div className="d-flex flex-column">
              <JobList jobEntries={jobEntries} />
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces('common')(Index);
