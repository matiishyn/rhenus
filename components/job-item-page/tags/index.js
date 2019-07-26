import React from 'react';
import './index.scss';

export const Tags = props => {
  const { fieldOfWork, division, location, employment } = props;
  return (
    <div className="tag-wrapper d-flex d-md-none">
      <div className="tag">{location}</div>
      <div className="tag">{division}</div>
      <div className="tag">{fieldOfWork}</div>
      <div className="tag">{employment}</div>
    </div>
  );
};
