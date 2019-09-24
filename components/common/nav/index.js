import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import './index.scss';
import { withNamespaces, i18n } from '../../../services/i18n';
import cx from 'classnames';
import { JobCounter } from '../job-counter';
import Link from '../../../services/ActiveLink';

@withNamespaces('common')
export class Nav extends PureComponent {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    const { t, jobList, currentLang, clearJobList, onLangChange } = this.props;

    const menuItems = [
      {
        title: t('headerMenuItem.findJob'),
        href: '/',
        id: 1
      },
      {
        //new page
        title: t('headerMenuItem.ourLocations'),
        href: '/page1',
        id: 2
      }
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
              <Dropdown.Item
                href="#"
                onClick={e => {
                  i18n.changeLanguage('nl').then(() => onLangChange('nl'));
                  e.preventDefault();
                }}
              >
                NL
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={e => {
                  i18n.changeLanguage('en').then(() => onLangChange('en'));
                  e.preventDefault();
                }}
              >
                EN
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <ul className="list-inline nav-list-item">
            {menuItems.map(item => (
              <li className={'list-inline-item'} key={item.id}>
                <Link activeClassName="active" href={item.href}>
                  <a>{item.title}</a>
                </Link>
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
