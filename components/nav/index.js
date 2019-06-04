import {Container, Row} from 'react-bootstrap';
import React from 'react';
import './index.scss';
import {withNamespaces, Link, i18n} from '../../i18n';

const menuItems = [
  {title: 'Find Job', href: '/'},
  {title: 'Our Locations', href: 'locations'},
  {title: 'Personal growth', href: 'growth'},
  {title: 'About Rhenus', href: 'locations'},
];
export const Nav = props => {

  return (
    <header className="page-header">
      <Container>
        <div className="d-flex">
          <div className="logo">
            <img src="/static/images/logo.svg" alt="logo"/>
          </div>
        </div>
      </Container>
    </header>
  );
};


/*

 <Row>
              <div className='col-lg-1 header-logo'>
                  <Link href="#">Logo</Link>
              </div>


              <div className='col-lg-2 language'>

                  <i>P</i>
                  <Link href="/">Nederlands</Link>
                  <Link href="/">English</Link>

              </div>


              <div className='col-lg-6'>

                  <ul className="list-inline nav-list-item">
                      {menuItems.map(item => (
                          <li className="list-inline-item">
                              <Link href={item.href}>
                                  {item.title}
                              </Link>
                          </li>
                      ))}
                  </ul>


              </div>
              {/*<div className="col-lg-1 offset-lg-1"/>
<div className='col-lg-2 job-count'>
  <p>My job list</p>
  <i>S</i>
  <span>0</span>
</div>

</Row>
 */
