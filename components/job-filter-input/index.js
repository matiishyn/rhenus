import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './index.scss';

const JobFilterInput = props => {
  console.log(props);
  return (
    <form>
      <label>
        Location
        <br />
        {/*<select multiple={true} value={['Б', 'В', 'В', 'В', 'В', 'В']}/>*/}
        <select value="aaa">
          <option value="enter">афл</option>
          <option value="grapefruit">афл</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
      </label>
      {/*<input type="submit" />*/}
    </form>
  );
};

export default JobFilterInput;
