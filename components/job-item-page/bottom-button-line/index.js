import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { SavedToJobList } from '../../common/saved-to-job-list';

export const BottomButtonLine = withNamespaces('common')(props => {
  const { t, handleAddJobItem, active } = props;
  return (
    <div className="bottom-line-bg">
      <div className="container d-flex justify-content-between">
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-arrow-back" />
            {t('siteWide.backToSearch')}
          </a>
        </div>
        <div className="button-item-line saved-button">
          <SavedToJobList handleAddJobItem={handleAddJobItem} active={active} />
        </div>
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-pdf" />
            {t('siteWide.downloadPDF')}
          </a>
        </div>
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-share" />
            {t('siteWide.shareJob')}
          </a>
        </div>
      </div>
    </div>
  );
});
