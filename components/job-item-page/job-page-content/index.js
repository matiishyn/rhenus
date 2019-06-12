import React from 'react';
import './index.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const JobPageContent = props => {
  const { jobEntry } = props;
  const linkItem = jobEntry.fields.linkedinColleagues;
  return (
    <div className="container d-flex page-job-content">
      <div className="d-flex flex-column left-content">
        <span>The job</span>
        {documentToReactComponents(jobEntry.fields.description)}
      </div>
      <div className="d-flex flex-column center-content">
        <div className="offer">
          <span>What Rhenus has offer</span>
          {documentToReactComponents(jobEntry.fields.offer)}
        </div>
        <div className="linkedin-block">
          <span>Meet your future coworkers</span>
          <div className="linkedin">
            {linkItem.map(item => {
              return (
                <a
                  href={item.fields.linkedinUri}
                  key={item.fields.fullName}
                  prefetch
                >
                  <img src={item.fields.image.fields.file.url} alt="in" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column right-content">
        <span>Apply</span>
        {documentToReactComponents(jobEntry.fields.applyInformation)}
      </div>
    </div>
  );
};
