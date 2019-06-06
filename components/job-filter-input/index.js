import React from 'react';
import './index.scss';

const JobFilterInput = () => {
  return (
    <form>
      <label>
        Location
        <br />
        <select value="aaa">
          <option value="enter">афл</option>
          <option value="grapefruit">афл</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
      </label>
    </form>
  );
};

export default JobFilterInput;
