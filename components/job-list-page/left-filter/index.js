import React, { Component } from 'react';
import LeftItemFilter from '../left-filter-item';

export default class LeftFilter extends Component {
  render() {
    const {
      locationEntries,
      employmentEntries,
      fieldOfWorkEntries,
      divisionEntries,

      // selected filters
      selectedLocation,
      onSelectLocation
    } = this.props;

    return (
      <>
        <LeftItemFilter
          title="Location"
          selectedLocation={selectedLocation}
          entries={locationEntries}
          onSelect={selectedLocation => {
            onSelectLocation(selectedLocation);
          }}
        />

        <LeftItemFilter entries={employmentEntries} title="Employment" />

        <LeftItemFilter entries={fieldOfWorkEntries} title="Field of work" />

        <LeftItemFilter entries={divisionEntries} title="Division" />
      </>
    );
  }
}
