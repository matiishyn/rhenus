import React from 'react';
import './index.scss';
import { ShowMore } from '../show-more/indx';

const LeftItemFilter = props => {
  const { title, entries, selectedItem } = props;
  return (
    <>
      <div className="left-filter">
        <span>{title}</span>
        <ul>
          {entries.map(item => (
            <li
              key={item.value}
              className={item.value === selectedItem ? 'activeSearch' : ''}
            >
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  props.onSelect(item.value);
                }}
                className="d-flex align-items-start"
              >
                <span
                  className="ricon-filter-remove"
                  onClick={() => props.onSelect('')}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {entries.length > 4 ? <ShowMore /> : null}
      </div>
    </>
  );
};

export default LeftItemFilter;
