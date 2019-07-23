import React from 'react';
import './index.scss';
import cx from 'classnames';
import { withNamespaces } from '../../../services/i18n';

@withNamespaces('common')
class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.txtBlock = React.createRef();
  }

  state = {
    activeButton: true,
    maxHeight: 'auto'
  };

  onToggleChangeRead = e => {
    e.preventDefault();

    this.setState(({ activeButton }) => {
      return { activeButton: !activeButton };
    });
  };

  componentDidMount = () => {
    this.setState({ maxHeight: this.txtBlock.current.offsetHeight });
  };

  render() {
    const { children, t } = this.props;
    const { activeButton, maxHeight } = this.state;

    return (
      <div className="read-more-wrapper">
        <div
          ref={this.txtBlock}
          style={{ maxHeight: activeButton ? maxHeight : '150px' }}
          className={cx('text-block', { collapsed: !activeButton })}
        >
          {children}
        </div>
        <div className="d-none d-sm-flex d-md-none">
          <a
            href=""
            onClick={this.onToggleChangeRead}
            className="read-more-less"
          >
            {activeButton ? (
              <span>
                {t('siteWide.read')}
                {t('siteWide.less')}
              </span>
            ) : (
              <span>
                {t('siteWide.read')}
                {t('siteWide.more')}
              </span>
            )}
          </a>
        </div>
      </div>
    );
  }
}

export default ReadMore;
