import React from 'react';
import './index.scss';

export const JobCounter = () => {
  return (
    <div className="d-flex job-counter justify-content-end">
      <span> My job list</span>
      <span className="ricon-save" />
    </div>
  );
};
