import React from 'react';
import {
  FILTER_PATH_FILDOFWORK,
  FILTER_PATH_LOCATION,
  FILTER_PATH_EMPLOYMENT,
  FILTER_PATH_DIVISION
} from '../../../services/constants';
import LeftItemFilter from '../left-filter-item';

const LeftFilter = props => {
  const {
    locationEntries,
    employmentEntries,
    fieldOfWorkEntries,
    divisionEntries,
    filter,
    onChange
  } = props;

  return (
    <>
      <LeftItemFilter
        title="Location"
        selectedItem={filter[FILTER_PATH_LOCATION]}
        entries={locationEntries}
        onSelect={selectedItem => {
          onChange({ [FILTER_PATH_LOCATION]: selectedItem });
        }}
      />

      <LeftItemFilter
        entries={employmentEntries}
        title="Employment"
        selectedItem={filter[FILTER_PATH_EMPLOYMENT]}
        onSelect={selectedItem => {
          onChange({ [FILTER_PATH_EMPLOYMENT]: selectedItem });
        }}
      />

      <LeftItemFilter
        entries={fieldOfWorkEntries}
        title="Field of work"
        selectedItem={filter[FILTER_PATH_FILDOFWORK]}
        onSelect={selectedItem => {
          onChange({ [FILTER_PATH_FILDOFWORK]: selectedItem });
        }}
      />

      <LeftItemFilter
        entries={divisionEntries}
        title="Division"
        selectedItem={filter[FILTER_PATH_DIVISION]}
        onSelect={selectedItem => {
          onChange({ [FILTER_PATH_DIVISION]: selectedItem });
        }}
      />
    </>
  );
};

export default LeftFilter;
