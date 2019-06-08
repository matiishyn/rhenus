import React, { Component } from 'react';
import './index.scss';

export default class LeftFilter extends Component {
  render() {
    return (
      <div className="left-filter">
        <span>Locations</span>
        <ul>
          <li className="active-search">
            <a href="#">
              <span className="ricon-filter-remove" />
              Aalsmeer
            </a>
          </li>
          <li>
            <a href="#">Hillegom</a>
          </li>
          <li>
            <a href="#">Rotterdam</a>
          </li>
          <li>
            <a href="#">Oldenzaal</a>
          </li>
        </ul>
      </div>
    );
  }
}
