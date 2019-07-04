import React from 'react';
import './index.scss';
import {
  FILTER_PATH_DIVISION,
  FILTER_PATH_EMPLOYMENT,
  FILTER_PATH_FILDOFWORK,
  FILTER_PATH_LOCATION
} from '../../../services/constants';

export const TopPageFilter = props => {
  const {
    filter,
    locationEntries,
    employmentEntries,
    fieldOfWorkEntries,
    divisionEntries
  } = props;

  const filters = {
    [FILTER_PATH_LOCATION]: locationEntries,
    [FILTER_PATH_FILDOFWORK]: fieldOfWorkEntries,
    [FILTER_PATH_EMPLOYMENT]: employmentEntries,
    [FILTER_PATH_DIVISION]: divisionEntries
  };

  return (
    <div className="d-flex flex-column top-page-filter">
      <div className="d-flex top-page-filter-item">
        <ul className="d-flex flex-row">
          {Object.entries(filter)
            .filter(obj => obj[1])
            .map(([filterKey, id]) => {
              return (
                <li key={id}>
                  <span>
                    <span className="ricon-filter-remove" />
                    {
                      filters[filterKey].find(({ value }) => value === id)
                        ?.label
                    }
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
