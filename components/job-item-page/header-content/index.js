import React from 'react';
import './index.scss';
import { Container } from 'react-bootstrap';
import { ButtonLine } from '../button-line';

export const HeaderContentJob = props => {
  const { title, tagline } = props.jobEntry;
  const { jobEntry } = props;
  const onToggleBack = e => {
    e.preventDefault();
    history.back();
  };
  return (
    <div className="bg-header-job">
      <Container>
        <div className="d-flex justify-content-between top-content-job">
          <div className="job-left-content ">
            <a href="#" onClick={onToggleBack}>
              <span className="ricon-arrow-back" />
              <span>Back to search results</span>
            </a>
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
      <div className="d-sm-none d-md-block">
        <ButtonLine />
      </div>
      <div className="container header-text-bottom d-flex">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          impedit maxime nisi quae quibusdam reiciendis veritatis voluptate.
          Corporis debitis delectus deserunt doloremque explicabo in itaque
          optio, porro quasi ullam. Sunt?
        </span>
      </div>
      <div className="d-sm-block d-md-block mobile-button-header">
        <ButtonLine />
      </div>
      <div className="container d-flex justify-content-start">
        <div className="button-apply ">
          <a href="#">Apply</a>
        </div>
      </div>
    </div>
  );
};
