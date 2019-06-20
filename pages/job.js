import React, { Component } from 'react';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import { getJobById } from '../services/contentful';
import { HeaderContentJob } from '../components/job-item-page/header-content';
import { BottomButtonLine } from '../components/job-item-page/bottom-button-line';
import { JobPageContent } from '../components/job-item-page/job-page-content';
import { ModalCustom } from '../components/job-item-page/modal-custom';
import { withNamespaces } from '../services/i18n';

class Job extends Component {
  state = {
    modalVisible: false,
    file: null,
    readMore: true
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

  render() {
    const { file } = this.state;
    const { jobEntry } = this.props;
    return (
      <div>
        <Nav />
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
