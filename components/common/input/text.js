import React from 'react';

export const Text = props => {
  const { type = 'text', placeholder = '', id } = props;
  return (
    <input
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
    />
  );
};
