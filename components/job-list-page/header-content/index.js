import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';

const HeaderContet = props => {
  // console.log(props)
  return (
    <div className="bg-header">
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <div className="find-job">
            <h2 className="title-job">Find your tomorrow-job at Rhenus</h2>
            <span>211 jobs available</span>
          </div>
          <div className="today">
            <h2>Today, I'm feeding 40 000 cats</h2>
            <p>Tomorrow I need to do it</p>
            <span>40.000 cats, how does that work? -></span>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <TopFilters
            locationEntries={props.locationEntries}
            fieldOfWorkEntries={props.fieldOfWorkEntries}
            divisionEntries={props.divisionEntries}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderContet;
