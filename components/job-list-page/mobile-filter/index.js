import React from 'react';
import './index.scss';

export const MobileFilter = props => {
  const { isVisible } = props;
  return (
    isVisible && (
      <div className="mobile-menu animated slideInDown faster">
        Mobile Filter
      </div>
    )
  );
};
