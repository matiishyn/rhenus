import React, { useState, useEffect } from 'react';
import {
  FILTER_PATH_DIVISION,
  FILTER_PATH_FILDOFWORK,
  FILTER_PATH_LOCATION,
  FILTER_PATH_SEARCH
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
    filter,
  } = props;
  const parentLocation = filter[FILTER_PATH_LOCATION];
  const parentFildOfWork = filter[FILTER_PATH_FILDOFWORK];
  const parentDivision = filter[FILTER_PATH_DIVISION];
  const parentSearch = filter[FILTER_PATH_SEARCH];

  const [location, setLocation] = useState(filter[FILTER_PATH_LOCATION]);
  const [fieldOfWork, setFieldOfWork] = useState(
    filter[FILTER_PATH_FILDOFWORK]
  );
  const [division, setDivision] = useState(filter[FILTER_PATH_DIVISION]);
  const [search, setSearch] = useState(filter[FILTER_PATH_SEARCH]);

  // HANDLING PARENT CHANGE
  useEffect(() => setLocation(parentLocation), [parentLocation]);
  useEffect(() => setFieldOfWork(parentFildOfWork), [parentFildOfWork]);
  useEffect(() => setDivision(parentDivision), [parentDivision]);
  useEffect(() => setSearch(parentSearch), [parentSearch]);

  return (
    <div className="d-flex top-nav">
      <div className="tablet-control d-flex">
        <Input
          type="text"
          label={t('filters.keywords')}
          placeholder={t('select.keywords')}
          id="search"
          value={search}
          onChange={setSearch}
        />

        <Input
          type="select"
          label={t('filters.location')}
          id="location"
          placeholder={t('select.location')}
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
          placeholder={t('select.fieldOfWork')}
          options={fieldOfWorkEntries}
          value={fieldOfWork}
          onChange={setFieldOfWork}
        />

        <Input
          type="select"
          label={t('filters.division')}
          id="division"
          placeholder={t('select.division')}
          options={divisionEntries}
          value={division}
          onChange={setDivision}
        />

        <button
          className="btn btn-success"
          onClick={() =>
            props.onChange({
              [FILTER_PATH_LOCATION]: location,
              [FILTER_PATH_FILDOFWORK]: fieldOfWork,
              [FILTER_PATH_DIVISION]: division,
              [FILTER_PATH_SEARCH]: search
            })
          }
        >
          {t('filters.searchBtn')}
        </button>
      </div>
    </div>
  );
});
