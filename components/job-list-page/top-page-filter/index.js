import React from 'react';

export const TopPageFilter = props => {
  const { total } = props;
  return (
    <div className="d-flex flex-column top-page-filter">
      <div className="d-flex top-page-filter-counter">
        <span>{total}</span>
        <span>jobs found</span>
      </div>
      <div className="d-flex">
        <span>
          <span className="ricon-filter-remove" />
          asdasdas
        </span>
        <span>
          <span className="ricon-filter-remove" />
          asdfasdasq
        </span>
      </div>
    </div>
  );
};
