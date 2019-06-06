import React, { memo } from 'react';

export const Input = memo(props => {
  const { type = 'text', label, placeholder = '', id } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />
    </div>
  );
});
