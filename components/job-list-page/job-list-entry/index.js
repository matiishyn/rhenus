import React from 'react';

export const JobListEntry = props => {
  const { jobEntry } = props;
  return (
    <>
      <h3>{jobEntry.fields.title}</h3>
      <h4>{jobEntry.fields.tagline}</h4>
      <div>{jobEntry.fields.location.fields.description}</div>
      <div>{jobEntry.fields.division.fields.description}</div>
      <div>{jobEntry.fields.employment.fields.description}</div>
      <div>{jobEntry.fields.fieldOfWork.fields.description}</div>

      <hr />
    </>
  );
};
