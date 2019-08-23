import React, { Component } from 'react';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import { API_URL } from '../services/config';
import {
  getJobById,
  getLocaleFromContext,
  getLocaleFromProps
} from '../services/contentful';
import { HeaderContentJob } from '../components/job-item-page/header-content';
import { BottomButtonLine } from '../components/job-item-page/bottom-button-line';
import { JobPageContent } from '../components/job-item-page/job-page-content';
import { ModalCustom } from '../components/job-item-page/modal-custom';
import { withNamespaces } from '../services/i18n';
import { clearJobList, getJobList, saveJobList } from '../services/job-list-ls';
import { ApplyModal } from '../components/job-item-page/apply-modal';

class Job extends Component {
  constructor(params) {
    super(params);
    this.state.jobList = getJobList();
    const { jobEntry } = this.props;
    this.state.jobEntry = jobEntry;
  }

  componentDidMount = () => {
    window.addEventListener('message', event => {
      if (event.data.type === 'LINKED_IN') {
        const data = event.data.data;
        const firstName = data.localizedFirstName;
        const lastName = data.localizedLastName;

        this.setState({ liFirstName: firstName, liLastName: lastName });
      }
    });
  };

  state = {
    modalVisible: false,
    modalApply: false,
    resume: null,
    readMore: true,
    jobList: [],
    data: {},
    liFirstName: '',
    liLastName: ''
  };

  handleClose = () => {
    this.setState({ modalVisible: false, resume: null });
  };

  clearJobList = () => this.setState({ jobList: [] }, clearJobList);

  handleShow = () => {
    this.setState({ modalVisible: true });
  };

  handleCloseApplyModal = () => {
    this.setState({ modalApply: false });
  };

  handleDrop = ([resume]) => {
    this.setState({ resume }, this.handleShow);
  };

  fetchJobEntries = () => {
    const locale = getLocaleFromProps(this.props);
    const jobId = this.state.jobEntry.sys.id;
    return getJobById(jobId, locale).then(jobEntry =>
      this.setState({ jobEntry })
    );
  };

  handleLangChange = () => {
    this.fetchJobEntries();
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

  sendData = (data, file) =>
    fetch(`${API_URL}apply/`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, resume: file })
    }).then(res => res.json());

  uploadFile = file => {
    const body = new FormData();
    body.append('UPLOADCARE_PUB_KEY', 'fcb2f84bc56fca000e81');
    body.append('UPLOADCARE_STORE', '1');
    body.append('file', file);

    return fetch(`https://upload.uploadcare.com/base/`, {
      method: 'post',
      body
    }).then(res => res.json());
  };

  handleSubmit = data => {
    this.setState({ data: data });
    const { resume, ...otherData } = data;
    if (resume) {
      return this.uploadFile(resume).then(({ file }) =>
        this.sendData(otherData, file).then(this.onSubmitSuccess)
      );
    }
    return this.sendData(otherData, null).then(this.onSubmitSuccess);
  };

  onSubmitSuccess = () => {
    this.handleClose();
    return this.setState({ modalApply: true });
  };

  render() {
    const { resume, jobList, jobEntry, liFirstName, liLastName } = this.state;
    const { lng } = this.props;
    const isActive = Boolean(jobList.find(el => el.id === jobEntry.sys.id));
    return (
      <div>
        <Nav
          currentLang={lng}
          jobList={jobList}
          clearJobList={this.clearJobList}
          onLangChange={this.handleLangChange}
        />

        <HeaderContentJob
          title={jobEntry.fields.title}
          jobEntry={jobEntry.fields}
          jobId={jobEntry.sys.id}
          lng={lng}
          tagline={jobEntry.fields.tagline}
          onApply={this.handleShow}
          handleAddJobItem={() => this.handleAddJobItem(jobEntry)}
          active={isActive}
          urlIdForShare={jobEntry.sys.id}
        />
        <JobPageContent
          jobEntry={jobEntry}
          onDrop={this.handleDrop}
          readMore={this.state.readMore}
          onApply={this.handleShow}
        />
        <BottomButtonLine
          handleAddJobItem={() => this.handleAddJobItem(jobEntry)}
          active={isActive}
          urlIdForShare={jobEntry.sys.id}
          jobId={jobEntry.sys.id}
        />
        <Footer />

        {this.state.modalVisible && (
          <ModalCustom
            title={jobEntry.fields.title}
            show={this.state.modalVisible}
            onHide={this.handleClose}
            resume={resume}
            onDrop={this.handleDrop}
            close={this.handleClose}
            jobId={jobEntry.sys.id}
            location={jobEntry.fields.location.fields.description}
            onSubmit={this.handleSubmit}
            liFirstName={liFirstName}
            liLastName={liLastName}
          />
        )}
        <ApplyModal
          show={this.state.modalApply}
          close={this.handleCloseApplyModal}
          onHide={this.handleCloseApplyModal}
          data={this.state.data}
          title={jobEntry.fields.title}
          location={jobEntry.fields.location.fields.description}
        />
      </div>
    );
  }
}

Job.getInitialProps = async context => {
  const locale = getLocaleFromContext(context);
  const jobId = context.query.id;
  const jobEntry = await getJobById(jobId, locale);

  return {
    namespacesRequired: ['common'],
    jobEntry
  };
};

export default withNamespaces('common')(Job);
