import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { animateScroll as scroll } from 'react-scroll';

@withNamespaces('common')
export class BackToTop extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { t } = this.props;
    return (
      <div className="back-to-top-sm">
        <a href="#" className="back-to-top" onClick={this.scrollToTop}>
          {t('siteWide.backToTop')}
        </a>
      </div>
    );
  }
}

export default withNamespaces('common')(BackToTop);
