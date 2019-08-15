import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import HeaderContent from '../components/job-list-page/header-content';
import MobileFilter from '../components/job-list-page/mobile-filter';
import {
  getApplicationMediumEntries,
  getCampaignEntries,
  getDivisionEntries,
  getEmploymentEntries,
  getFieldOfWorkEntries,
  getJobEntries,
  getLocaleFromContext,
  getLocaleFromProps,
  getLocationEntries
} from '../services/contentful';
import { withNamespaces } from '../services/i18n';
import { PageContent } from '../components/job-list-page/page-content';
import { clearJobList, getJobList, saveJobList } from '../services/job-list-ls';
import _throttle from 'lodash/throttle';

const LIMIT = 5;
const LIMIT_FILTER = { limit: LIMIT };

export class Index extends PureComponent {
  static async getInitialProps(context) {
    const locale = getLocaleFromContext(context);
    // get id from url
    const jobEntries = await getJobEntries(LIMIT_FILTER, locale);
    const divisionEntries = await getDivisionEntries(locale);
    const employmentEntries = await getEmploymentEntries(locale);
    const locationEntries = await getLocationEntries(locale);
    const applicationMediumEntries = await getApplicationMediumEntries(locale);
    const campaignEntries = await getCampaignEntries(locale);
    const fieldOfWorkEntries = await getFieldOfWorkEntries(locale);

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
    const {
      jobEntries,
      divisionEntries,
      fieldOfWorkEntries,
      locationEntries,
      campaignEntries,
      employmentEntries
    } = this.props;
    this.state.jobEntries = jobEntries;
    this.state.jobList = getJobList();
    this.state.divisionEntries = divisionEntries;
    this.state.fieldOfWorkEntries = fieldOfWorkEntries;
    this.state.locationEntries = locationEntries;
    this.state.campaignEntries = campaignEntries;
    this.state.employmentEntries = employmentEntries;

    this.jobListEl = React.createRef();
    this.headerContentEl = React.createRef();

    this.handleScrollThrottled = _throttle(this.handleScroll, 10);
  }

  state = {
    selectedLocation: null,
    selectionFieldOfWork: null,
    selectionDivision: null,
    filter: {},
    currentLimit: LIMIT,
    jobList: [],
    mobileMenuVisible: false
  };

  fetchJobEntries = () => {
    const limitFilter = { limit: this.state.currentLimit };
    const { filter } = this.state;
    const locale = getLocaleFromProps(this.props);
    return getJobEntries({ ...limitFilter, ...filter }, locale).then(
      jobEntries => this.setState({ jobEntries })
    );
  };

  fetchDivision = () => {
    const locale = getLocaleFromProps(this.props);
    return getDivisionEntries(locale).then(divisionEntries =>
      this.setState({ divisionEntries })
    );
  };

  fetchFieldOfWork = () => {
    const locale = getLocaleFromProps(this.props);
    return getFieldOfWorkEntries(locale).then(fieldOfWorkEntries =>
      this.setState({ fieldOfWorkEntries })
    );
  };

  fetchLocation = () => {
    const locale = getLocaleFromProps(this.props);
    return getLocationEntries(locale).then(locationEntries =>
      this.setState({ locationEntries })
    );
  };
  fetchEmployment = () => {
    const locale = getLocaleFromProps(this.props);
    return getEmploymentEntries(locale).then(employmentEntries =>
      this.setState({ employmentEntries })
    );
  };

  fetchCampaign = () => {
    const locale = getLocaleFromProps(this.props);
    return getCampaignEntries(locale).then(campaignEntries =>
      this.setState({ campaignEntries })
    );
  };

  handleLangChange = () => {
    this.fetchJobEntries();

    this.fetchDivision();
    this.fetchFieldOfWork();
    this.fetchLocation();
    this.fetchCampaign();
    this.fetchEmployment();

    // todo fetch all other data
  };

  // TODO THROTTLE
  handleScroll = () => {
    const h = this.headerContentEl?.current?.offsetHeight + 50;
    const wh = window.scrollY;
    const { mobileMenuVisible } = this.state;
    if (wh >= h) {
      // todo SET STATE VISIBLE
      if (!mobileMenuVisible) this.setState({ mobileMenuVisible: true });
    } else {
      // HIDE MOBILE MENU
      if (mobileMenuVisible) this.setState({ mobileMenuVisible: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollThrottled);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollThrottled);
  }

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

  clearJobList = () => this.setState({ jobList: [] }, clearJobList);

  handleFilter = newFilter => {
    const currentFilter = this.state.filter;
    return this.setState(
      { filter: { ...currentFilter, ...newFilter } },
      this.fetchJobEntries
    );
  };

  render() {
    const { applicationMediumEntries, lng } = this.props;
    const {
      selectedLocation,
      selectionFieldOfWork,
      selectionDivision,
      jobEntries,
      filter,
      jobList,
      mobileMenuVisible,
      divisionEntries,
      fieldOfWorkEntries,
      locationEntries,
      campaignEntries,
      employmentEntries
    } = this.state;
    return (
      <div className="index-page" ref={this.jobListEl}>
        <Nav
          currentLang={lng}
          jobList={jobList}
          jobEntries={jobEntries}
          activeMenu={'findJob'}
          clearJobList={this.clearJobList}
          onLangChange={this.handleLangChange}
        />

        <div ref={this.headerContentEl}>
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
            onChange={this.handleFilter}
            jobList={jobList}
            jobEntries={jobEntries}
          />
        </div>

        <div className="d-md-flex d-lg-none">
          <MobileFilter
            filter={filter}
            isVisible={mobileMenuVisible}
            locationEntries={locationEntries}
            employmentEntries={employmentEntries}
            fieldOfWorkEntries={fieldOfWorkEntries}
            divisionEntries={divisionEntries}
            onChange={this.handleFilter}
            jobList={jobList}
          />
        </div>

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
