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
  }

  state = {
    selectedLocation: null,
    selectionFieldOfWork: null,
    selectionDivision: null,
    filter: {},
    currentLimit: LIMIT,
    jobCounter: 0
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

  handleAddJobItem = () => {};

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
      // t,
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
      jobCounter
    } = this.state;
    // const { total, limit } = jobEntries;
    return (
      <div>
        <div className="d-block d-sm-none">XS - small mobile</div>
        <div className="d-none d-sm-block d-md-none">SM - mobile</div>
        <div className="d-none d-md-block d-lg-none">MD - tablet</div>
        <div className="d-none d-lg-block d-xl-none">LG - desktop</div>
        <div className="d-none d-xl-block">XL</div>

        <Nav currentLang={lng} jobCounter={jobCounter} />

        <HeaderContent
          {...{
            divisionEntries,
            locationEntries,
            applicationMediumEntries,
            campaignEntries,
            fieldOfWorkEntries
          }}
          jobCounter={jobCounter}
          selectedLocation={selectedLocation}
          selectionFieldOfWork={selectionFieldOfWork}
          selectionDivision={selectionDivision}
          filter={filter}
          onSearch={this.handleFilter}
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
          />

          {/*<div className="d-flex justify-content-between">*/}
          {/*<div className="flex-column  d-none d-md-flex">*/}
          {/*<LeftFilter*/}
          {/*{...{*/}
          {/*locationEntries,*/}
          {/*employmentEntries,*/}
          {/*fieldOfWorkEntries,*/}
          {/*divisionEntries*/}
          {/*}}*/}
          {/*filter={filter}*/}
          {/*onChange={this.handleFilter}*/}
          {/*/>*/}
          {/*</div>*/}
          {/*{Boolean(jobEntries.items.length) && (*/}
          {/*<div className="d-flex flex-column w-100 ml-3 flex-grow-1">*/}
          {/*<JobList jobEntries={jobEntries} />*/}
          {/*<div className="d-flex justify-content-between mb-5">*/}
          {/*<BackToTop />*/}
          {/*<Paging*/}
          {/*total={total}*/}
          {/*limit={limit}*/}
          {/*onShowMore={this.handleShowMore}*/}
          {/*/>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*)}*/}
          {/*{!jobEntries.items.length && <h2>nothing's found</h2>}*/}
          {/*</div>*/}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withNamespaces('common')(Index);
