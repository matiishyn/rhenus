import React from 'react';
import { withNamespaces } from '../../../services/i18n';

export const SavedToJobList = withNamespaces('common')(props => {
  const { t, handleAddJobItem, active } = props;
  const Star = () => {
    if (active === true) {
      return <span className="ricon-save-active" />;
    } else {
      return <span className="ricon-save" />;
    }
  };
  return (
    <div className="d-flex" onClick={handleAddJobItem}>
      <Star />
      <span>{t('siteWide.savedJobList')}</span>
    </div>
  );
});
