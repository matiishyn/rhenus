import React from 'react';
import './index.scss';
import { Link, withNamespaces } from '../../../services/i18n';
import { SavedToJobList } from '../../common/saved-to-job-list';

export const JobListEntry = withNamespaces('common')(props => {
  const { jobEntry, t, handleAddJobItem, jobList } = props;
  const isActive = Boolean(jobList.find(el => el.id === jobEntry.sys.id));
  return (
    <div className="card-item">
      <div className="card-content d-flex justify-content-between">
        <div className="left-card-content">
          <Link href={`/job?id=${jobEntry.sys.id}`} prefetch>
            <a>
              <h3>{jobEntry.fields.title}</h3>
            </a>
          </Link>

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
            <div className="job-save-mobile d-md-none">
              <SavedToJobList
                handleAddJobItem={() => handleAddJobItem(jobEntry)}
                active={isActive}
              />
            </div>
          </div>
          <div className="d-flex flex-column blue-right">
            <div className="job-save-desc d-sm-none d-md-block">
              <SavedToJobList
                handleAddJobItem={() => handleAddJobItem(jobEntry)}
                active={isActive}
              />
            </div>
            <div className="learn-more d-flex justify-content-center">
              <Link href={`/job?id=${jobEntry.sys.id}`} prefetch>
                <a title="Job detail">
                  {t('siteWide.learnMore')}{' '}
                  <span className="ricon-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
