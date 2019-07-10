import React from 'react';

export const Text = props => {
  const { type = 'text', placeholder = '', id, onChange, value } = props;
  return (
    <input
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
};
