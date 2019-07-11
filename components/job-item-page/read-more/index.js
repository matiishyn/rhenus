import React from 'react';
import './index.scss';
import cx from 'classnames';

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
    const { children } = this.props;
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
        <a href="" onClick={this.onToggleChangeRead}>
          {activeButton ? <span>Read more</span> : <span>Read less</span>}
        </a>
      </div>
    );
  }
}

export default ReadMore;
