import React from 'react';
import './index.scss';

const LeftItemFilter = props => {
  const { title, entries, selectedLocation } = props;
  return (
    <>
      <div className="left-filter">
        <span>{title}</span>
        <ul>
          {entries.map(item => (
            <li
              key={item.value}
              className={item.value === selectedLocation ? 'activeSearch' : ''}
            >
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  props.onSelect(item.value);
                }}
              >
                <span className="ricon-filter-remove" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftItemFilter;
