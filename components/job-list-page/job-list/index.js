import React from 'react';
import { JobListEntry } from '../job-list-entry';

export const JobList = props => {
  const { jobEntries, handleAddJobItem, jobList } = props;
  return (
    <>
      {jobEntries.items.map(jobEntry => (
        <JobListEntry
          jobEntry={jobEntry}
          key={jobEntry.sys.id}
          handleAddJobItem={handleAddJobItem}
          jobList={jobList}
        />
      ))}
    </>
  );
};
