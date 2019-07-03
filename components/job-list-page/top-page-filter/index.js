import React from 'react';
import './index.scss';

export const TopPageFilter = props => {
  const { total } = props;
  return (
    <div className="d-flex flex-column top-page-filter">
      <div className="d-flex top-page-filter-counter">
        <span>{total} jobs found</span>
      </div>
      <div className="d-flex top-page-filter-item">
        <ul className="d-flex flex-row">
          <li>
            <span>
              <span className="ricon-filter-remove" />
              Asdasdas
            </span>
          </li>
          <li>
            <span>
              <span className="ricon-filter-remove" />
              Asdasdas
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
