import React from 'react';
import './index.scss';
import { Collapse, Button } from 'react-bootstrap';
import { TopPageFilter } from '../top-page-filter';

export default class MobileFilter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    const {
      isVisible,
      locationEntries,
      employmentEntries,
      fieldOfWorkEntries,
      divisionEntries,
      filter
    } = this.props;
    const { open } = this.state;
    return (
      isVisible && (
        <div className="mobile-menu animated slideInDown faster">
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
          <div className="d-flex bottom-line-filter">
            <Button
              onClick={() => this.setState({ open: !open })}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Hide filter
              <span
                className={open ? 'ricon-filter-open' : 'ricon-hamburger'}
              />
            </Button>
            <TopPageFilter
              {...{
                locationEntries,
                employmentEntries,
                fieldOfWorkEntries,
                divisionEntries
              }}
              filter={filter}
            />
          </div>
        </div>
      )
    );
  }
}
