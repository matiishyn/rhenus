import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';

const HeaderContent = props => {
  return (
    <div className="bg-header">
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between top-line">
          <div className="find-job">
            <h2 className="title-job">Find your tomorrow-job at Rhenus</h2>
            <span>211 jobs available</span>
          </div>
          <div className="today d-flex flex-column">
            <h2>Today, I'm feeding 40 000 cats</h2>
            <span className="two">Tomorrow I need to do it</span>
            <span>
              40.000 cats, how does that work?{' '}
              <span className="ricon-arrow-right" />
            </span>
          </div>
        </div>
        <TopFilters
          locationEntries={props.locationEntries}
          fieldOfWorkEntries={props.fieldOfWorkEntries}
          divisionEntries={props.divisionEntries}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
