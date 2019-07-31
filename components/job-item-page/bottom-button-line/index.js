import React, { useState } from 'react';
import './index.scss';
import { Link, withNamespaces } from '../../../services/i18n';
import { SavedToJobList } from '../../common/saved-to-job-list';
import { ShareButtons } from '../share-button';
import { API_URL } from '../../../services/config';

export const BottomButtonLine = withNamespaces('common')(props => {
  const { t, handleAddJobItem, active, urlIdForShare, jobId, lng } = props;
  const [isVisible, setVisible] = useState(false);
  const hrefPdf = `${API_URL}pdf/${jobId}/${lng}`;
  return (
    <div className="bottom-line-bg">
      <div className="container d-flex justify-content-between">
        <div className="button-item-line">
          <Link href="/" prefetch>
            <a>
              <span className="ricon-arrow-back" />
              {t('siteWide.backToSearch')}
            </a>
          </Link>
        </div>
        <div className="button-item-line saved-button">
          <SavedToJobList handleAddJobItem={handleAddJobItem} active={active} />
        </div>
        <div className="button-item-line">
          <a href={hrefPdf} target="_blank" rel="noreferrer noopener">
            <span className="ricon-pdf" />
            {t('siteWide.downloadPDF')}
          </a>
        </div>
        <div className="button-item-line">
          {isVisible && (
            <div className="animated fadeIn faster">
              {' '}
              <ShareButtons urlIdForShare={urlIdForShare} />
            </div>
          )}
          {!isVisible && (
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                setVisible(true);
              }}
            >
              <span className="ricon-share" />
              {t('siteWide.shareJob')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
