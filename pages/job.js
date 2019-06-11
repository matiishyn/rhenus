import React from 'react';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import { getJobById } from '../services/contentful';
import { HeaderContentJob } from '../components/job-item-page/header-content';

const Job = props => {
  return (
    <div>
      <Nav />
      <HeaderContentJob
        title={props.jobEntry.fields.title}
        jobEntry={props.jobEntry.fields}
        tagline={props.jobEntry.fields.tagline}
      />
      <Footer />
    </div>
  );
};

Job.getInitialProps = async context => {
  const jobId = context.query.id;
  const jobEntry = await getJobById(jobId);

  return {
    namespacesRequired: ['common'],
    jobEntry
  };
};

export default Job;
