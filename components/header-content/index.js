import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './index.scss';


const HeaderContet = (props) => {
  return (

    <div className='bg-header'>
      <Container>
        <div className='d-flex'>
          <div className='find-job'>
            <h2 className='title-job'>Find your tomorrow-job at Rhenus </h2>
            <p>211 jobs available</p>
          </div>
          <div className='today'>
            <h2>Today, I'm feeding 40 000 cats</h2>
            <p>Tomorrow I need to do it</p>
            <span>40.000 cats, how does that work? -></span>
          </div>
        </div>



      </Container>
    </div>

  );

};

export default HeaderContet;
