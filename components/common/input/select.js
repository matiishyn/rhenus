import React from 'react';

export const Select = props => {
  const { id, options, placeholder = '' } = props;
  return (
    <select className="form-control" id={id}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map(opt => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
