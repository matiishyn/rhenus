import React, { Component } from 'react';
import './index.scss';

export default class LeftFilter extends Component {
  render() {
    const {
      locationEntries,
      employmentEntries,
      fieldOfWorkEntries,
      divisionEntries
    } = this.props;
    const item = arr => {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].label);
      }
      return result;
    };

    const labelLocation = item(locationEntries);
    const labelEmployment = item(employmentEntries);
    const labelOfWorkEntries = item(fieldOfWorkEntries);
    const labelDivisionEntries = item(divisionEntries);
    return (
      <>
        <div className="left-filter">
          <span>Locations</span>
          <ul>
            {labelLocation.map(item => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="left-filter">
          <span>Employment</span>
          <ul>
            {labelEmployment.map(item => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="left-filter">
          <span>Field of work</span>
          <ul>
            {labelOfWorkEntries.map(item => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="left-filter">
          <span>Division</span>
          <ul>
            {labelDivisionEntries.map(item => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
