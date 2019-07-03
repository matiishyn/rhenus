import React from 'react';

export const MobileFilter = props => {
  const { isVisible } = props;
  return isVisible && <div>Mobile Filter</div>;
};
