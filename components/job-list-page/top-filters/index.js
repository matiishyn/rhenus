import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import { Input } from '../../common/input';

export const TopFilters = withNamespaces('common')(props => {
  const { t, locationEntries, fieldOfWorkEntries, divisionEntries } = props;
  return (
    <div className="d-flex">
      <Input
        type="text"
        label={t('filters.keywords')}
        placeholder="Enter keywords..."
        id="search"
      />

      <Input
        type="select"
        label="Location"
        id="location"
        placeholder="Select Location"
        options={locationEntries}
      />

      <Input
        type="select"
        label="Field of work"
        id="fieldOfWork"
        placeholder="Select Field of work"
        options={fieldOfWorkEntries}
      />

      <Input
        type="select"
        label="Division"
        id="division"
        placeholder="Select Division"
        options={divisionEntries}
      />

      <div className="form-group">
        <label>&nbsp;</label>
        <button className="btn btn-success form-control">Search</button>
      </div>
    </div>
  );
});
