import React from 'react';
import { withNamespaces } from '../../../services/i18n';

export const SavedToJobList = withNamespaces('common')(props => {
  const { t, handleAddJobItem } = props;
  return (
    <div className="d-flex">
      <span className="ricon-save" />
      <span onClick={handleAddJobItem}>{t('siteWide.savedJobList')}</span>
    </div>
  );
});
