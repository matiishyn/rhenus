import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';

export const BackToTop = withNamespaces('common')(props => {
  const { t } = props;
  return (
    <div className="back-to-top-sm">
      <a href="#" className="back-to-top">
        {t('siteWide.backToTop')}
      </a>
    </div>
  );
});
