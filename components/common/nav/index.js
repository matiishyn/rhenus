import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import './index.scss';
import { withNamespaces, i18n, Link } from '../../../services/i18n';
import cx from 'classnames';
import { JobCounter } from '../job-counter';

@withNamespaces('common')
export class Nav extends PureComponent {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    const {
      t,
      jobList,
      currentLang,
      activeMenu,
      clearJobList,
      onLangChange
    } = this.props;

    const menuItems = [
      {
        title: t('headerMenuItem.findJob'),
        href: '/',
        active: activeMenu === 'findJob',
        id: 1
      }
      // {
      //   title: t('headerMenuItem.ourLocations'),
      //   active: false,
      //   href: 'locations',
      //   id: 2
      // },
      // {
      //   title: t('headerMenuItem.personalGrowth'),
      //   active: false,
      //   href: 'growth',
      //   id: 3
      // },
      // {
      //   title: t('headerMenuItem.aboutRhenus'),
      //   active: false,
      //   href: 'locations',
      //   id: 4
      // }
    ];

    return (
      <header className="page-header">
        <div className="container d-flex align-items-center page-header-inner">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/static/images/logo.svg" alt="logo" />
              </a>
            </Link>
          </div>

          <div className="language">
            <span className="ricon-language globe" />

            <a
              href="#"
              className={cx({ activeLanguage: currentLang === 'nl' })}
              onClick={e => {
                i18n.changeLanguage('nl').then(() => onLangChange('nl'));
                e.preventDefault();
              }}
            >
              Nederlands
            </a>
            <a
              href="#"
              className={cx({ activeLanguage: currentLang === 'en' })}
              onClick={e => {
                i18n.changeLanguage('en').then(() => onLangChange('en'));
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
              title={this.props.lng.toUpperCase()}
              onClick={e => {
                e.preventDefault();
              }}
            >
              <Dropdown.Item>
                <a
                  href="#"
                  onClick={e => {
                    i18n.changeLanguage('nl').then(() => onLangChange('nl'));
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
                    i18n.changeLanguage('en').then(() => onLangChange('en'));
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
              <li
                className={cx('list-inline-item', { active: item.active })}
                key={item.id}
              >
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="menu-tablet">
            <DropdownButton
              id="dropdown-basic-button"
              title={menuItems[0].title}
            >
              {menuItems.map(item => (
                <Dropdown.Item href={item.href} key={item.id}>
                  {item.title}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="d-flex justify-content-end job-counter-nav d-sm-none d-md-block">
            <JobCounter jobList={jobList} clearJobList={clearJobList} />
          </div>
        </div>

        <div className="white-center align-items-center align-items-stretch">
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
