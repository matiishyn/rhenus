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
    </div>
  );
};
