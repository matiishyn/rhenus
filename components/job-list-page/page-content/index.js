import React from 'react';
import './index.scss';
import LeftFilter from '../left-filter';
import { JobList } from '../job-list';
import { BackToTop } from '../back-to-top';
import { Paging } from '../paging';

export const PageContent = props => {
  const {
    locationEntries,
    employmentEntries,
    fieldOfWorkEntries,
    divisionEntries,
    filter,
    onChange,
    jobEntries,
    onShowMore
  } = props;

  const { total, limit } = jobEntries;
  return (
    <div className="d-flex justify-content-between page-content">
      <div className="flex-column  d-none d-md-flex">
        <LeftFilter
          {...{
            locationEntries,
            employmentEntries,
            fieldOfWorkEntries,
            divisionEntries
          }}
          filter={filter}
          onChange={onChange}
        />
      </div>
      {Boolean(jobEntries.items.length) && (
        <div className="d-flex flex-column w-100 job-page-card">
          <JobList jobEntries={jobEntries} />
          <div className="d-flex justify-content-between pagination-block">
            <BackToTop />
            <Paging total={total} limit={limit} onShowMore={onShowMore} />
          </div>
        </div>
      )}
      {!jobEntries.items.length && <h2>nothing's found</h2>}
    </div>
  );
};