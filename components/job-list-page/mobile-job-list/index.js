import React from 'react';
import { Collapse, Button, Dropdown } from 'react-bootstrap';

export default class MobileJobList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    const { jobList } = this.props;
    return (
      <>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text" className="mobile-list">
            {jobList.map(item => (
              <Dropdown.Item href={`/job?id=${item.id}`} key={item.id}>
                <span className="ricon-save-active" />
                {item.label}
              </Dropdown.Item>
            ))}
          </div>
        </Collapse>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <span className="ricon-save" />
          <span className="counter">{jobList.length}</span>
        </Button>
      </>
    );
  }
}
