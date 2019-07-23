import React from 'react';
import './index.scss';
import cx from 'classnames';

const MAX_ITEMS = 5;

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
    const { title, selectedItem } = this.props;
    const { showMore } = this.state;
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

          <span
            className={cx('show-more-button', { 'rotate-icon': showMore })}
            onClick={this.showChange}
          >
            Show {showMore ? 'less' : 'more'}
            <span className="ricon-expand-more" />
          </span>
        </div>
      </>
    );
  }
}
