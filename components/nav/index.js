import {Button, Container} from 'react-bootstrap';
import React, {Component} from 'react';
import './index.scss';
import {withNamespaces, Link, i18n} from '../../i18n';


export class Nav extends Component {

    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        };
    }

    render() {

        const menuItems = [
            {title: 'Find Job', href: '/'},
            {title: 'Our Locations', href: 'locations'},
            {title: 'Personal growth', href: 'growth'},
            {title: 'About Rhenus', href: 'locations'},
        ];

        return (
            <header className="page-header">
                <Container>
                    <div className="d-flex">

                        <div className="logo">
                            <img src="/static/images/logo.svg" alt="logo"/>
                        </div>

                        <div className="language">
                            <a href="#" onClick={() => {i18n.changeLanguage('nl')}}>Nederlands</a>
                            <a href="#" onClick={() => {i18n.changeLanguage('en')}}>English</a>
                        </div>

                        <ul className="list-inline nav-list-item">
                            {menuItems.map(item => (

                                <li className="list-inline-item">
                                    <Link href={item.href}>
                                        {item.title}
                                    </Link>
                                </li>

                            ))}
                        </ul>

                        <div className='job-count justify-content-end'>
                            <p>My job list</p>
                            <i>S</i>
                            <span>0</span>
                        </div>
                    </div>
                    <div className='white-center'>

                            <div className='kosoy' />

                                <Link href='/'>Rhenus.com</Link>
                          <i>P</i>

                    </div>



                </Container>
            </header>
        );
    }
}

export default withNamespaces('common')(Nav);

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
