import React from 'react';

export const Select = props => {
  const { id, options, placeholder = '', value, onChange } = props;
  return (
    <select
      className="form-control"
      id={id}
      value={value}
      onChange={event => onChange(event.target.value)}
      defaultValue={'DEFAULT'}
    >
      <option value="DEFAULT" disabled>
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
