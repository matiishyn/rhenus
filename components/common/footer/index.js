import React from 'react';
import './index.scss';

export const Footer = () => {
  const listItems = [
    { title: 'Rhenus Worldwide', href: '/', id: 1 },
    { title: 'Group Information', href: 'locations', id: 2 },
    { title: 'Coordinations', href: 'growth', id: 3 },
    { title: 'Infocenter', href: 'locations', id: 4 },
    { title: 'Customer Portal', href: 'locations', id: 5 },
    { title: 'Imprint', href: 'locations', id: 6 }
  ];

  return (
    <div className="page-footer">
      <div className="container">
        <div className="d-flex justify-content-between footer-content">
          <div className="tablet-flex d-flex justify-content-between">
            <div className="first">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate dicta eos esse iusto laudantium quo, saepe tenetur.
                Aliquid animi consequatur, exercitationem facere itaque
                laudantium nemo obcaecati placeat totam vitae voluptates.
              </span>
            </div>
            <div className="second">
              <span className="title">Any questions?</span>
              <br />
              <span>
                Call us directly at
                <a href="tel:+0131234456">013 - 123 44 56</a> or
                <br />
                e-mail us at
                <a href="mailto:hi@werkenbijrhenus.nl">hi@werkenbijrhenus.nl</a>
              </span>
            </div>
          </div>
          <div className="blue">
            <img src="/static/images/logo.svg" alt="logo" />

            <ul className="list-group">
              {listItems.map(item => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
