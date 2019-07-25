import React, { memo } from 'react';
import { Select } from './select';
import { Text } from './text';
import { Textarea } from './textarea';
import cx from 'classnames';
import './index.scss';

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
  const { type = 'text', label, id, required } = props;
  return (
    <div className="input-component">
      {label && <label htmlFor={id}>{label}</label>}
      <div className={cx('input-wrapper', { 'star-after': required })}>
        {getInput(type, props)}
      </div>
    </div>
  );
});
