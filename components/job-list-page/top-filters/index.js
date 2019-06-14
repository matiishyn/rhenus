import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import { Input } from '../../common/input';
import './index.scss';

export const TopFilters = withNamespaces('common')(props => {
  const { t, locationEntries, fieldOfWorkEntries, divisionEntries } = props;
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
        />
      </div>
      <div className="tablet-right d-flex align-items-end justify-content-between">
        <Input
          type="select"
          label={t('filters.fieldOfWork')}
          id="fieldOfWork"
          placeholder="Select Field of work"
          options={fieldOfWorkEntries}
        />

        <Input
          type="select"
          label={t('filters.division')}
          id="division"
          placeholder="Select Division"
          options={divisionEntries}
        />

        <button className="btn btn-success">Search</button>
      </div>
    </div>
  );
});
