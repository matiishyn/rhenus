import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './index.scss';

const KeyboardInput = props => {
  return (
    <div className="">
      <span>
        Keywords
        <br />
        <input type="text" size="40" placeholder="Enter Keywords..." />
      </span>
    </div>
  );
};

export default KeyboardInput;
