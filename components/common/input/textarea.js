import React from 'react';

export const Textarea = props => {
  const { placeholder = '', id } = props;
  return (
    <textarea className="form-control" id={id} placeholder={placeholder} />
  );
};
