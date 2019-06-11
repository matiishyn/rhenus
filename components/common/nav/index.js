import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import './index.scss';
import { withNamespaces, i18n } from '../../../services/i18n';
import cx from 'classnames';

@withNamespaces('common')
export class Nav extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    const { t } = this.props;

    const menuItems = [
      { title: t('headerMenuItem.findJob'), href: '/', active: true, id: 1 },
      { title: t('headerMenuItem.ourLocations'), href: 'locations', id: 2 },
      { title: t('headerMenuItem.personalGrowth'), href: 'growth', id: 3 },
      { title: t('headerMenuItem.aboutRhenus'), href: 'locations', id: 4 }
    ];

    // const activeItem = item => {
    //   for (let i = 0; i < item.length; i++) {
    //     if (item[i].active) {
    //       return item.title;
    //     }
    //   }
    // };

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
              onClick={e => {
                i18n.changeLanguage('nl');
                e.preventDefault();
              }}
            >
              Nederlands
            </a>
            <a
              href="#"
              onClick={e => {
                i18n.changeLanguage('en');
                e.preventDefault();
              }}
            >
              English
            </a>
          </div>

          <div className="language-tablet d-flex align-items-center ">
            <span className="ricon-language globe" />
            <DropdownButton
              id="dropdown-basic-button"
              title={this.props.currentLang}
              onClick={e => {
                e.preventDefault();
              }}
            >
              <Dropdown.Item>
                <a
                  href="#"
                  onClick={e => {
                    i18n.changeLanguage('nl');
                    e.preventDefault();
                  }}
                >
                  NL
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  onClick={e => {
                    i18n.changeLanguage('en');
                    e.preventDefault();
                  }}
                >
                  EN
                </a>
              </Dropdown.Item>
            </DropdownButton>
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
            <span> {t('headerMenuItem.jobList')} </span>
            <span className="ricon-save star" />
            <span>0</span>
          </div>
        </div>

        <div className="white-center align-items-center d-flex align-items-stretch">
          <div className="kosoy" />

          <a
            href="https://rhenus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rhenus.com
            <span className="ricon-exit-offsite offsite" />
          </a>
        </div>
      </header>
    );
  }
}
