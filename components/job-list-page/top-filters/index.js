import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import { Input } from '../../common/input';
import './index.scss';

export const TopFilters = withNamespaces('common')(props => {
  const { t, locationEntries, fieldOfWorkEntries, divisionEntries } = props;
  return (
    <div className="d-flex">
      <div className="search-input">
        <Input
          type="text"
          label={t('filters.keywords')}
          placeholder="Enter keywords..."
          id="search"
        />
      </div>
      {/*<div className="location-input">*/}
      <Input
        type="select"
        label="Location"
        id="location"
        placeholder="Select Location"
        options={locationEntries}
      />
      {/*</div>*/}
      {/*<div className="field-input">*/}
      <Input
        type="select"
        label="Field of work"
        id="fieldOfWork"
        placeholder="Select Field of work"
        options={fieldOfWorkEntries}
      />
      {/*</div>*/}
      {/*<div className="division-input">*/}
      <Input
        type="select"
        label="Division"
        id="division"
        placeholder="Select Division"
        options={divisionEntries}
      />
      {/*</div>*/}

      <div className="form-group">
        {/*<label>&nbsp;</label>*/}
        <button className="btn btn-success form-control">Search</button>
      </div>
    </div>
  );
});
