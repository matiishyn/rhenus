import React from 'react';
import { withNamespaces } from '../../../services/i18n';

export const SavedToJobList = withNamespaces('common')(props => {
  const { t, handleAddJobItem, active } = props;
  return (
    <div className="d-flex">
      <span className={active ? 'ricon-save-active' : 'ricon-save'} />
      <span onClick={handleAddJobItem}>{t('siteWide.savedJobList')}</span>
    </div>
  );
});
