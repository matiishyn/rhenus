import React from 'react';
import cx from 'classnames';
import './index.scss';

export const Paging = props => {
  const { onShowMore, total, limit } = props;
  const isShowMoreDisabled = limit >= total;
  return (
    <div className="d-flex">
      <div>
        Showing {limit <= total ? limit : total} of {total}
      </div>
      <a
        href="#"
        className={cx({ disabled: isShowMoreDisabled })}
        onClick={e => {
          e.preventDefault();
          if (!isShowMoreDisabled) onShowMore();
        }}
      >
        Show more |>
      </a>
    </div>
  );
};
