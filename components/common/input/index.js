import React, { memo } from 'react';

const getInput = (type, props) => {
  switch (type) {
    case 'text':
      return <Text type="text" {...props} />;
    case 'email':
      return <Text type="email" {...props} />;
    case 'select':
      return <Select {...props} />;
  }
};

export const Input = memo(props => {
  const { type = 'text', label, id } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      {getInput(type, props)}
    </div>
  );
});

const Text = props => {
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

const Select = props => {
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
