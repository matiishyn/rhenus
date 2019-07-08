import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { SaveButton } from '../save-button';

export const ButtonLine = withNamespaces('common')(props => {
  const { t } = props;
  return (
    <div className="container d-flex justify-content-start button-line">
      <div>
        <SaveButton />
        {/*<a href="#">*/}
        {/*<span className="ricon-save" /> {t('siteWide.save')}*/}
        {/*</a>*/}
      </div>
      <div>
        <a href="#">
          <span className="ricon-pdf" />
          PDF
        </a>
      </div>
      <div>
        <a href="#">
          <span className="ricon-share" />
          {t('siteWide.share')}
        </a>
      </div>
    </div>
  );
});
