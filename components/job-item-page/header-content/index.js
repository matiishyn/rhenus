import { Link } from '../../../services/i18n';
import React from 'react';
import './index.scss';
import { Container } from 'react-bootstrap';
import { ButtonLine } from '../button-line';

export const HeaderContentJob = props => {
  const { title, tagline } = props.jobEntry;
  const { jobEntry } = props;
  return (
    <div className="bg-header-job">
      <Container>
        <div className="d-flex justify-content-between top-content-job">
          <div className="job-left-content ">
            <Link href="/">
              <a>
                <span className="ricon-arrow-back" />
                Back to search results
              </a>
            </Link>
            <h3>{title}</h3>
            <h4>{tagline}</h4>
          </div>
          <div className="job-right-content">
            <ul className="list-group">
              <li className="first-item-job-list">
                <span className="ricon-division" />

                {jobEntry.location.fields.description}
              </li>
              <li>
                <span className="ricon-label-important" />

                {jobEntry.division.fields.description}
              </li>
              <li>
                <span className="ricon-label-important" />

                {jobEntry.employment.fields.description}
              </li>
              <li>
                <span className="ricon-label-important" />

                {jobEntry.fieldOfWork.fields.description}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <ButtonLine />
      <div className="container header-text-bottom">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          impedit maxime nisi quae quibusdam reiciendis veritatis voluptate.
          Corporis debitis delectus deserunt doloremque explicabo in itaque
          optio, porro quasi ullam. Sunt? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Delectus facere fugiat modi nulla sunt!
          Amet aperiam consectetur delectus distinctio dolore et minima nihil,
          nulla praesentium, provident quo ullam vitae, voluptate.
        </div>
      </div>
      <div className="container d-flex justify-content-start">
        <div className="button-apply ">
          <a href="#">Apply</a>
        </div>
      </div>
    </div>
  );
};
