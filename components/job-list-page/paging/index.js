import React from 'react';
import cx from 'classnames';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';

export const Paging = withNamespaces('common')(props => {
  const { onShowMore, total, limit, t } = props;
  const isShowMoreDisabled = limit >= total;
  return (
    <div className="d-flex justify-content-between pagination-show">
      <div className="show-job-item">
        {t('siteWide.showing')} {limit <= total ? limit : total} {t('siteWide.of')} {total}
      </div>
      <a
        href="#"
        className={cx('show-more', { disabled: isShowMoreDisabled })}
        onClick={e => {
          e.preventDefault();
          if (!isShowMoreDisabled) onShowMore();
        }}
      >
        {t('siteWide.showMore')} <span className="ricon-arrow-right-small" />
      </a>
    </div>
  );
});
