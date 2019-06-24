import React from 'react';
import cx from 'classnames';
import './index.scss';

export const Paging = props => {
  const { onShowMore, total, limit } = props;
  const isShowMoreDisabled = limit >= total;
  return (
    <div className="d-flex justify-content-between pagination-show">
      <div className="show-job-item">
        Showing {limit <= total ? limit : total} of {total}
      </div>
      <a
        href="#"
        className={cx('show-more', { disabled: isShowMoreDisabled })}
        onClick={e => {
          e.preventDefault();
          if (!isShowMoreDisabled) onShowMore();
        }}
      >
        Show more <span className="ricon-arrow-right-small" />
      </a>
    </div>
  );
};
