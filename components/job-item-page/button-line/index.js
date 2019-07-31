import React, { useState } from 'react';
import './index.scss';
import { API_URL } from '../../../services/config';
import { withNamespaces } from '../../../services/i18n';
import { SaveButton } from '../save-button';
import { ShareButtons } from '../share-button';

export const ButtonLine = withNamespaces('common')(props => {
  const { t, active, handleAddJobItem, urlIdForShare, lng } = props;
  const [isVisible, setVisible] = useState(false);
  const correctLng = lng => {
    if (lng === 'en') {
      return 'en-US';
    } else {
      return lng;
    }
  };
  const hrefPdf = `${API_URL}pdf/${urlIdForShare}/${correctLng(lng)}`;
  return (
    <div className="container d-flex justify-content-start button-line">
      <div>
        <SaveButton active={active} handleAddJobItem={handleAddJobItem} />
      </div>
      <div>
        <a href={hrefPdf} target="_blank" rel="noopener noreferrer">
          <span className="ricon-pdf" />
          PDF
        </a>
      </div>
      <div>
        {isVisible && (
          <div className="animated fadeIn faster">
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
            {t('siteWide.share')}
          </a>
        )}
      </div>
    </div>
  );
});
