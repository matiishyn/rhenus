import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';

export const JobCounter = withNamespaces('common')(props => {
  const { t } = props;
  return (
    <div className="d-flex job-counter justify-content-end">
      <span> {t('siteWide.jobList')}</span>
      <span className="ricon-save" />
    </div>
  );
});
