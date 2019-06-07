import React from 'react';
import './index.scss';

export const Footer = () => {
  // const listItems = [
  //   { title: 'Rhenus Worldwide', href: '/', id: 1 },
  //   { title: 'Group Information', href: 'locations', id: 2 },
  //   { title: 'Coordinations', href: 'growth', id: 3 },
  //   { title: 'Infocenter', href: 'locations', id: 4 },
  //   { title: 'Customer Portal', href: 'locations', id: 5 },
  //   { title: 'Imprint', href: 'locations', id: 6 }
  // ];

  return (
    <div className="page-footer">
      <div className="container">
        <div className="d-flex align-items-stretch footer-content">
          <div className="flex-fill">1</div>
          <div className="flex-fill">2</div>
          <div className="flex-fill blue">3</div>
        </div>
      </div>
    </div>
  );
};
