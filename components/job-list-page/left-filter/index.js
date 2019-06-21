import React, { Component } from 'react';
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
          selectedLocation={filter['fields.location.sys.id']}
          entries={locationEntries}
          onSelect={selectedLocation => {
            onChange({ 'fields.location.sys.id': selectedLocation });
          }}
        />

        <LeftItemFilter entries={employmentEntries} title="Employment" />

        <LeftItemFilter entries={fieldOfWorkEntries} title="Field of work" />

        <LeftItemFilter entries={divisionEntries} title="Division" />
      </>
    );
  }
}
