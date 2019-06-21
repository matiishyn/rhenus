import React, { useState, useEffect } from 'react';
import { LOCATION_PATH } from '../../../services/constants';
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
  const parentLocation = filter[LOCATION_PATH];

  const [location, setLocation] = useState(filter[LOCATION_PATH]);
  const [fieldOfWork, setFieldOfWork] = useState(null);
  const [division, setDivision] = useState(null);

  // HANDLING PARENT CHANGE
  useEffect(() => setLocation(parentLocation), [parentLocation]);

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
              [LOCATION_PATH]: location,
              'fields.fieldOfWork.sys.id': fieldOfWork,
              'fields.division.sys.id': division
            })
          }
        >
          Search
        </button>
      </div>
    </div>
  );
});
