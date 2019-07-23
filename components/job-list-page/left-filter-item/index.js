import React from 'react';
import './index.scss';
import cx from 'classnames';
import { withNamespaces } from '../../../services/i18n';

const MAX_ITEMS = 4;

@withNamespaces('common')
export default class LeftItemFilter extends React.Component {
  constructor(params) {
    super(params);
    this.state.filterList = params.entries;
  }

  state = {
    showMore: false
  };

  showChange = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  getChangeItem = () => {
    if (this.state.showMore) {
      return this.state.filterList;
    }
    return this.state.filterList.slice(0, MAX_ITEMS);
  };

  render() {
    const { title, selectedItem, t } = this.props;
    const { showMore, filterList } = this.state;
    return (
      <>
        <div className="left-filter">
          <span>{title}</span>
          <ul>
            {this.getChangeItem().map(item => (
              <li
                key={item.value}
                className={item.value === selectedItem ? 'activeSearch' : ''}
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.props.onSelect(item.value);
                  }}
                  className="d-flex align-items-start"
                >
                  <span
                    className="ricon-filter-remove"
                    onClick={() => this.props.onSelect('')}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {filterList.length > MAX_ITEMS ? (
            <span
              className={cx('show-more-button', { 'rotate-icon': showMore })}
              onClick={this.showChange}
            >
              {t('siteWide.showM')}
              {showMore ? t('siteWide.less') : t('siteWide.more')}
              <span className="ricon-expand-more" />
            </span>
          ) : null}
        </div>
      </>
    );
  }
}
