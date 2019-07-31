import React from 'react';
import { withNamespaces } from '../../../services/i18n';
import './index.scss';

export const SaveButton = withNamespaces('common')(props => {
  const { t, handleAddJobItem, active } = props;

  const SaveToRemove = () => {
    if (active === true) {
      return (
        <>
          <span className="ricon-save-active" />
          <span>{t('siteWide.saved')}</span>
        </>
      );
    } else {
      return (
        <>
          <span className="ricon-save" />
          <span>{t('siteWide.save')}</span>
        </>
      );
    }
  };
  return (
    <div className="d-flex save-button" onClick={handleAddJobItem}>
      <SaveToRemove active={active} />
    </div>
  );
});
