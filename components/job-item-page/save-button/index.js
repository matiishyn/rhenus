import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import './index.scss';

export const SaveButton = withNamespaces('common')(props => {
  const { t } = props;
  return (
    <div className="d-flex save-button">
      <span className="ricon-save" />
      <span>{t('siteWide.save')}</span>
    </div>
  );
});
