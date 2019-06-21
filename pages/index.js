import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import HeaderContent from '../components/job-list-page/header-content';
import { JobList } from '../components/job-list-page/job-list';
import LeftFilter from '../components/job-list-page/left-filter';
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

const PAGE_SIZE_FILTER = { limit: 3 };

export class Index extends PureComponent {
  static async getInitialProps() {
    // get id from url
    const jobEntries = await getJobEntries(PAGE_SIZE_FILTER);
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

  constructor(params) {
    super(params);
    const { jobEntries } = this.props;
    this.state.jobEntries = jobEntries;
  }

  state = {
    selectedLocation: null
  };

  fetchJobEntries = filter => {
    return getJobEntries({ ...PAGE_SIZE_FILTER, ...filter }).then(jobEntries =>
      this.setState({ jobEntries })
    );
  };

  handleFilter = filter => {
    /*Router.push(
      {
        pathname: '/',
        query: { name: Math.random() }
      },
      { shallow: true }
    );*/
    this.fetchJobEntries(filter);
  };

  render() {
    const {
      // t,
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries,
      lng
    } = this.props;

    const { selectedLocation, jobEntries } = this.state;

    return (
      <div>
        <div className="d-block d-sm-none">XS - small mobile</div>
        <div className="d-none d-sm-block d-md-none">SM - mobile</div>
        <div className="d-none d-md-block d-lg-none">MD - tablet</div>
        <div className="d-none d-lg-block d-xl-none">LG - desktop</div>
        <div className="d-none d-xl-block">XL</div>

        <Nav currentLang={lng} />

        <HeaderContent
          {...{
            divisionEntries,
            employmentEntries,
            locationEntries,
            applicationMediumEntries,
            campaignEntries,
            fieldOfWorkEntries
          }}
          selectedLocation={selectedLocation}
          onSearch={this.handleFilter}
        />

        <Container>
          <div className="d-flex justify-content-between">
            <div className="flex-column  d-none d-md-flex">
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
            <div className="d-flex flex-column w-100">
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
