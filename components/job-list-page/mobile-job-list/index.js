import React from 'react';
import { Collapse, Button } from 'react-bootstrap';

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
          <div id="example-collapse-text">
            <span>s</span>
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
