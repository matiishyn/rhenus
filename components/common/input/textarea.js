import React from 'react';

export const Textarea = props => {
  const { placeholder = '', id, value, onChange } = props;
  return (
    <textarea
      className="form-control"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      minLength="200"
    />
  );
};
