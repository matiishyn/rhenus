import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { animateScroll as scroll } from 'react-scroll';

export class BackToTop extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  // const { t } = props;
  render() {
    return (
      <div className="back-to-top-sm">
        <a href="#" className="back-to-top" onClick={this.scrollToTop}>
          {/*{t('siteWide.backToTop')}*/}
          Back to Top
        </a>
      </div>
    );
  }
}

export default withNamespaces('common')(BackToTop);
