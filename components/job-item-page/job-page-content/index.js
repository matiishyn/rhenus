import React from 'react';
import './index.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { DropZoneCustom } from '../drop-zone';

export const JobPageContent = props => {
  const { jobEntry, onDrop } = props;
  const { linkedinColleagues, description, offer } = jobEntry.fields;
  return (
    <div className="container d-flex page-job-content justify-content-between">
      <div className="d-flex flex-column left-content">
        <div>
          <span>The job</span>
          {documentToReactComponents(description)}
        </div>
      </div>

      <div className="tablet-right">
        <div className="d-flex flex-column center-content">
          <div className="offer">
            <span>What Rhenus has offer</span>
            {documentToReactComponents(offer)}
          </div>
          <div className="linkedin-block">
            <span>Meet your future coworkers</span>
            <div className="linkedin">
              {linkedinColleagues.map(item => {
                return (
                  <a
                    href={item.fields.linkedinUri}
                    key={item.fields.fullName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.fields.image.fields.file.url} alt="in" />
                    <span className="ricon-linkedin" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column right-content">
          <div>
            <span>Apply</span>

            {documentToReactComponents(jobEntry.fields.applyInformation)}
          </div>
          <DropZoneCustom onDrop={onDrop} />
          <div className="apply-button ">
            <a href="#">Apply</a>
          </div>
        </div>
      </div>
    </div>
  );
};
