import React, { useState, useEffect } from 'react';
import {
  FILTER_PATH_DIVISION,
  FILTER_PATH_FILDOFWORK,
  FILTER_PATH_LOCATION
} from '../../../services/constants';
import { withNamespaces } from '../../../services/i18n';
import { Input } from '../../common/input';
import './index.scss';

export const TopFilters = withNamespaces('common')(props => {
  const {
    t,
    locationEntries,
    fieldOfWorkEntries,
    divisionEntries,
    filter
  } = props;
  const parentLocation = filter[FILTER_PATH_LOCATION];
  const parentFildOfWork = filter[FILTER_PATH_FILDOFWORK];
  const parentDivision = filter[FILTER_PATH_DIVISION];

  const [location, setLocation] = useState(filter[FILTER_PATH_LOCATION]);
  const [fieldOfWork, setFieldOfWork] = useState(
    filter[FILTER_PATH_FILDOFWORK]
  );
  const [division, setDivision] = useState(filter[FILTER_PATH_DIVISION]);

  // HANDLING PARENT CHANGE
  useEffect(() => setLocation(parentLocation), [parentLocation]);
  useEffect(() => setFieldOfWork(parentFildOfWork), [parentFildOfWork]);
  useEffect(() => setDivision(parentDivision), [parentDivision]);

  return (
    <div className="d-flex top-nav">
      <div className="tablet-control d-flex">
        <Input
          type="text"
          label={t('filters.keywords')}
          placeholder="Enter keywords..."
          id="search"
        />

        <Input
          type="select"
          label={t('filters.location')}
          id="location"
          placeholder="Select Location"
          options={locationEntries}
          value={location}
          onChange={setLocation}
        />
      </div>
      <div className="tablet-right d-flex align-items-end justify-content-between">
        <Input
          type="select"
          label={t('filters.fieldOfWork')}
          id="fieldOfWork"
          placeholder="Select Field of work"
          options={fieldOfWorkEntries}
          value={fieldOfWork}
          onChange={setFieldOfWork}
        />

        <Input
          type="select"
          label={t('filters.division')}
          id="division"
          placeholder="Select Division"
          options={divisionEntries}
          value={division}
          onChange={setDivision}
        />

        <button
          className="btn btn-success"
          onClick={() =>
            props.onSearch({
              [FILTER_PATH_LOCATION]: location,
              [FILTER_PATH_FILDOFWORK]: fieldOfWork,
              [FILTER_PATH_DIVISION]: division
            })
          }
        >
          Search
        </button>
      </div>
    </div>
  );
});
