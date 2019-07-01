import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import './index.scss';
import { withNamespaces, i18n, Link } from '../../../services/i18n';
import cx from 'classnames';
import { JobCounter } from '../job-counter';

@withNamespaces('common')
export class Nav extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  state = { isActiveLanguage: false };

  onToggleActiveLanguage = () => {
    const correctLanguage = this.state.isActiveLanguage;
    this.setState({ isActiveLanguage: !correctLanguage });
  };

  render() {
    const { t, jobList } = this.props;

    const menuItems = [
      { title: t('headerMenuItem.findJob'), href: '/', active: true, id: 1 },
      { title: t('headerMenuItem.ourLocations'), href: 'locations', id: 2 },
      { title: t('headerMenuItem.personalGrowth'), href: 'growth', id: 3 },
      { title: t('headerMenuItem.aboutRhenus'), href: 'locations', id: 4 }
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
              className={this.state.isActiveLanguage ? 'activeLanguage' : null}
              onClick={e => {
                i18n.changeLanguage('nl');
                e.preventDefault();
                this.onToggleActiveLanguage();
              }}
            >
              Nederlands
            </a>
            <a
              href="#"
              className={this.state.isActiveLanguage ? 'activeLanguage' : null}
              onClick={e => {
                i18n.changeLanguage('en');
                e.preventDefault();
                this.onToggleActiveLanguage();
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
                {/*{active: item.active}*/}
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="menu-tablet">
            <DropdownButton id="dropdown-basic-button" title="Job work">
              {menuItems.map(item => (
                <Dropdown.Item href={item.href} key={item.id}>
                  {item.title}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="d-flex justify-content-end job-counter-nav d-sm-none d-md-block">
            <JobCounter jobList={jobList} />
          </div>
        </div>

        <div className="white-center align-items-center align-items-stretch d-none d-md-flex">
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
