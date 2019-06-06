import React from 'react';
import JobFilterInput from '../job-filter-input';
import KeyboardInput from '../key-input';
import './index.scss';

const HeaderContet = props => {
  return (
    <div className="bg-header">
      <div className="d-flex justify-content-between align-items-center container">
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
      <div className="d-flex container justify-content-around align-items-end">
        <KeyboardInput {...{ props }} />
        <JobFilterInput {...{ props }} />
        <JobFilterInput {...{ props }} />
        <JobFilterInput {...{ props }} />
        <button className="btn btn-success">Search</button>
      </div>
    </div>
  );
};

export default HeaderContet;
