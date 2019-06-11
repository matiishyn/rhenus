import { Link } from '../services/i18n';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/common/footer';
import { Nav } from '../components/common/nav';
import { getJobById } from '../services/contentful';

const Job = () => {
  //props
  return (
    <div>
      <Nav />
      <Container>
        <Link href="/">
          <button>Go home</button>
        </Link>
        <p>About</p>
      </Container>
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
