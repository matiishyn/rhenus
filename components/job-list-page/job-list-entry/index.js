import React from 'react';
import './index.scss';

export const JobListEntry = props => {
  const { jobEntry } = props;
  return (
    <div className="card-item">
      <div className="card-content d-flex justify-content-between">
        <div className="left-card-content">
          <h3>{jobEntry.fields.title}</h3>
          <h4>{jobEntry.fields.tagline}</h4>
          <span>
            <span className="ricon-label-important" />
            {jobEntry.fields.fieldOfWork.fields.description}
          </span>
        </div>
        <div className="blue d-flex justify-content-between ">
          <div className="blue-left">
            <ul className="list-group">
              <li>
                <span className="ricon-employment" />
                {jobEntry.fields.employment.fields.description}
              </li>
              <li>
                <span className="ricon-division" />
                {jobEntry.fields.division.fields.description}
              </li>
              <li>
                <span className="ricon-division" />
                {jobEntry.fields.location.fields.description}
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column blue-right">
            <div className="job-save">
              <span>Saved to job</span>
              <span className="ricon-save" />
            </div>
            <div className="learn-more d-flex justify-content-center">
              <a href="#">
                Learn more <span className="ricon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
