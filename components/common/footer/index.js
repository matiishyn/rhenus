import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';

export const Footer = withNamespaces('common')(props => {
  const { t } = props;
  const listItems = [
    { title: t('footerMenu.RhenusWorldwide'), href: '/', id: 1 },
    { title: t('footerMenu.GroupInformation'), href: 'locations', id: 2 },
    { title: t('footerMenu.Coordinations'), href: 'growth', id: 3 },
    { title: t('footerMenu.Infocenter'), href: 'locations', id: 4 },
    { title: t('footerMenu.CustomerPortal'), href: 'locations', id: 5 },
    { title: t('footerMenu.Imprint'), href: 'locations', id: 6 }
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
              <span className="title">{t('footer.anyQuestion')}</span>
              <br />
              <span>
                {t('footer.callUs')}
                <a href="tel:+0131234456">013 - 123 44 56</a> {t('footer.or')}
                <br />
                e-mail {t('footer.usAt')}
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
});
