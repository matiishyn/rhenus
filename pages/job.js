import React, { Component } from 'react';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import { SavedToJobList } from '../components/common/saved-to-job-list';
import { getJobById } from '../services/contentful';
import { HeaderContentJob } from '../components/job-item-page/header-content';
import { BottomButtonLine } from '../components/job-item-page/bottom-button-line';
import { JobPageContent } from '../components/job-item-page/job-page-content';
import { ModalCustom } from '../components/job-item-page/modal-custom';
import { withNamespaces } from '../services/i18n';
import { getJobList, saveJobList } from '../services/job-list-ls';

class Job extends Component {
  constructor(params) {
    super(params);
    this.state.jobList = getJobList();
  }

  state = {
    modalVisible: false,
    file: null,
    readMore: true,
    jobList: []
  };

  handleClose = () => {
    this.setState({ modalVisible: false, file: null });
  };

  handleShow = () => {
    this.setState({ modalVisible: true });
  };

  handleDrop = ([file]) => {
    this.setState({ file }, this.handleShow);
  };

  // todo move to service
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

  render() {
    const { file, jobList } = this.state;
    const { jobEntry, lng } = this.props;

    const isActive = Boolean(jobList.find(el => el.id === jobEntry.sys.id));

    return (
      <div>
        <Nav currentLang={lng} jobList={jobList} />

        <SavedToJobList
          handleAddJobItem={() => this.handleAddJobItem(jobEntry)}
          active={isActive}
        />

        <HeaderContentJob
          title={jobEntry.fields.title}
          jobEntry={jobEntry.fields}
          tagline={jobEntry.fields.tagline}
          onApply={this.handleShow}
        />
        <JobPageContent
          jobEntry={jobEntry}
          onDrop={this.handleDrop}
          readMore={this.state.readMore}
          onApply={this.handleShow}
        />
        <BottomButtonLine />
        <Footer />

        {/*todo move to separate comp*/}

        <ModalCustom
          title={jobEntry.fields.title}
          show={this.state.modalVisible}
          onHide={this.handleClose}
          file={file}
          onDrop={this.handleDrop}
          close={this.handleClose}
          location={jobEntry.fields.location.fields.description}
        />
      </div>
    );
  }
}

Job.getInitialProps = async context => {
  const jobId = context.query.id;
  const jobEntry = await getJobById(jobId);

  return {
    namespacesRequired: ['common'],
    jobEntry
  };
};

export default withNamespaces('common')(Job);
