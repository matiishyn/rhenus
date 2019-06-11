import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import { Input } from '../../common/input';
import './index.scss';

export const TopFilters = withNamespaces('common')(props => {
  const { t, locationEntries, fieldOfWorkEntries, divisionEntries } = props;
  return (
    <div className="d-flex justify-content-between top-nav">
      <div className="search-input flex-grow-1">
        <Input
          type="text"
          label={t('filters.keywords')}
          placeholder="Enter keywords..."
          id="search"
        />
      </div>
      <div className="choose-input flex-grow-0">
        <Input
          type="select"
          label={t('filters.location')}
          id="location"
          placeholder="Select Location"
          options={locationEntries}
        />
      </div>
      <div className="choose-input flex-grow-0">
        <Input
          type="select"
          label={t('filters.fieldOfWork')}
          id="fieldOfWork"
          placeholder="Select Field of work"
          options={fieldOfWorkEntries}
        />
      </div>
      <div className="choose-input flex-grow-0">
        <Input
          type="select"
          label={t('filters.division')}
          id="division"
          placeholder="Select Division"
          options={divisionEntries}
        />
      </div>

      <div className="top-header-button">
        <button className="btn btn-success form-control">Search</button>
      </div>
    </div>
  );
});
