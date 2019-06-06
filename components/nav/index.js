import cx from 'classnames';
import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { i18n, withNamespaces } from '../../services/i18n';
import './index.scss';

export class Nav extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    const menuItems = [
      { title: 'Find Job', href: '/', active: true, id: 1 },
      { title: 'Our Locations', href: 'locations', id: 2 },
      { title: 'Personal growth', href: 'growth', id: 3 },
      { title: 'About Rhenus', href: 'locations', id: 4 }
    ];

    /*const activeItem = item => {
      for (let i = 0; i < item.length; i++) {
        if (item[i].active) {
          return item.title;
        }
      }
    };*/

    return (
      <header className="page-header">
        <div className="container d-flex align-items-center page-header-inner">
          <div className="logo">
            <img src="/static/images/logo.svg" alt="logo" />
          </div>

          <div className="language">
            <span className="ricon-language globe" />

            <a
              href="#"
              onClick={() => {
                i18n.changeLanguage('nl');
              }}
            >
              Nederlands
            </a>
            <a
              href="#"
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              English
            </a>
          </div>

          <ul className="list-inline nav-list-item">
            {menuItems.map(item => (
              <li className={cx('list-inline-item')} key={item.id}>
                {' '}
                {/*{active: item.active}*/}
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>

          {/*menuItems.active ? item.title : null*/}
          <DropdownButton id="dropdown-basic-button" title="Job work">
            {menuItems.map(item => (
              <Dropdown.Item href={item.href} key={item.id}>
                {item.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <div className="job-count">
            <span>My job list</span>
            <span className="ricon-save star" />
            <span>0</span>
          </div>
        </div>

        <div className="white-center align-items-center d-flex">
          <div className="kosoy" />

          <a
            href="https://rhenus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rhenus.com
          </a>
          <span className="ricon-exit-offsite offsite" />
        </div>
      </header>
    );
  }
}

export default withNamespaces('common')(Nav);
