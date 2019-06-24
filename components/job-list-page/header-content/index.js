import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';
import { JobCounter } from '../../common/job-counter';

const HeaderContent = props => {
  // const { campaignEntries } = props;

  return (
    <div className="bg-header">
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-end mobile-counter d-md-none d-sm-block  ">
          <JobCounter />
        </div>
        <div className="d-flex justify-content-between top-line">
          <div className="find-job">
            <h2 className="title-job">Find your tomorrow-job at Rhenus</h2>
            <span>211 jobs available</span>
          </div>
          <div className="today">
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
          onSearch={props.onSearch}
          filter={props.filter}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
