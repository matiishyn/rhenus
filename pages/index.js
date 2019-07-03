import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import HeaderContent from '../components/job-list-page/header-content';

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
import { PageContent } from '../components/job-list-page/page-content';
import { getJobList, saveJobList } from '../services/job-list-ls';

const LIMIT = 5;
const LIMIT_FILTER = { limit: LIMIT };

export class Index extends PureComponent {
  static async getInitialProps() {
    // get id from url
    const jobEntries = await getJobEntries(LIMIT_FILTER);
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
    this.state.jobList = getJobList();
  }

  state = {
    selectedLocation: null,
    selectionFieldOfWork: null,
    selectionDivision: null,
    filter: {},
    currentLimit: LIMIT,
    jobList: []
  };

  fetchJobEntries = () => {
    const limitFilter = { limit: this.state.currentLimit };
    const { filter } = this.state;
    return getJobEntries({ ...limitFilter, ...filter }).then(jobEntries =>
      this.setState({ jobEntries })
    );
  };

  handleShowMore = () => {
    const { currentLimit } = this.state;
    this.setState({ currentLimit: currentLimit + LIMIT }, this.fetchJobEntries);
  };

  handleAddJobItem = jobEntry => {
    const jobTitle = jobEntry.fields.title;
    const jobId = jobEntry.sys.id;
    const { jobList } = this.state;
    const foundIndex = jobList.findIndex(el => el.id === jobId);
    if (foundIndex === -1) {
      // ADD
      const newJobItem = { label: jobTitle, id: jobId };
      const newJobList = [...jobList, newJobItem];
      this.setState({ jobList: newJobList }, () => {
        saveJobList(newJobList);
      });
    } else {
      // REMOVE FROM LIST
      const before = jobList.slice(0, foundIndex);
      const after = jobList.slice(foundIndex + 1);
      const newJobList = [...before, ...after];
      this.setState({ jobList: newJobList }, () => {
        saveJobList(newJobList);
      });
    }
  };

  handleFilter = newFilter => {
    /*Router.push(
      {
        pathname: '/',
        query: { name: Math.random() }
      },
      { shallow: true }
    );*/
    const currentFilter = this.state.filter;
    return this.setState(
      { filter: { ...currentFilter, ...newFilter } },
      this.fetchJobEntries
    );
  };

  render() {
    const {
      divisionEntries,
      employmentEntries,
      locationEntries,
      applicationMediumEntries,
      campaignEntries,
      fieldOfWorkEntries,
      lng
    } = this.props;
    const {
      selectedLocation,
      selectionFieldOfWork,
      selectionDivision,
      jobEntries,
      filter,
      jobList
    } = this.state;

    return (
      <div>
        <div className="d-block d-sm-none">XS - small mobile</div>
        <div className="d-none d-sm-block d-md-none">SM - mobile</div>
        <div className="d-none d-md-block d-lg-none">MD - tablet</div>
        <div className="d-none d-lg-block d-xl-none">LG - desktop</div>
        <div className="d-none d-xl-block">XL</div>

        <Nav
          currentLang={lng}
          jobList={jobList}
          jobEntries={jobEntries}
          activeMenu={'findJob'}
        />

        <HeaderContent
          {...{
            divisionEntries,
            locationEntries,
            applicationMediumEntries,
            campaignEntries,
            fieldOfWorkEntries
          }}
          selectedLocation={selectedLocation}
          selectionFieldOfWork={selectionFieldOfWork}
          selectionDivision={selectionDivision}
          filter={filter}
          onSearch={this.handleFilter}
          jobList={jobList}
        />

        <Container>
          <PageContent
            locationEntries={locationEntries}
            employmentEntries={employmentEntries}
            fieldOfWorkEntries={fieldOfWorkEntries}
            divisionEntries={divisionEntries}
            filter={filter}
            onChange={this.handleFilter}
            jobEntries={jobEntries}
            onShowMore={this.handleShowMore}
            handleAddJobItem={this.handleAddJobItem}
            jobList={jobList}
          />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces('common')(Index);
