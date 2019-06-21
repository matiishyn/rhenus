import React, { Component } from 'react';
import { LOCATION_PATH } from '../../../services/constants';
import LeftItemFilter from '../left-filter-item';

export default class LeftFilter extends Component {
  render() {
    const {
      locationEntries,
      employmentEntries,
      fieldOfWorkEntries,
      divisionEntries,
      filter,
      onChange
    } = this.props;

    return (
      <>
        <LeftItemFilter
          title="Location"
          selectedLocation={filter[LOCATION_PATH]}
          entries={locationEntries}
          onSelect={selectedLocation => {
            onChange({ [LOCATION_PATH]: selectedLocation });
          }}
        />

        <LeftItemFilter entries={employmentEntries} title="Employment" />

        <LeftItemFilter entries={fieldOfWorkEntries} title="Field of work" />

        <LeftItemFilter entries={divisionEntries} title="Division" />
      </>
    );
  }
}
