import React, { memo } from 'react';
import { Select } from './select';
import { Text } from './text';
import { Textarea } from './textarea';

const getInput = (type, props) => {
  switch (type) {
    case 'text':
      return <Text type="text" {...props} />;
    case 'email':
      return <Text type="email" {...props} />;
    case 'tel':
      return <Text type="tel" {...props} />;
    case 'select':
      return <Select {...props} />;
    case 'textarea':
      return <Textarea {...props} />;
  }
};

export const Input = memo(props => {
  const { type = 'text', label, id } = props;
  return (
    <div className="star-icon">
      {label && (
        <label htmlFor={id} className="d-sm-none">
          {label}
        </label>
      )}
      {getInput(type, props)}
    </div>
  );
});
