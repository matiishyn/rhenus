import React from 'react';
import './index.scss';
import { Collapse, Button } from 'react-bootstrap';
import { TopPageFilter } from '../top-page-filter';
import { TopFilters } from '../top-filters';

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
      filter,
      onSearch
    } = this.props;
    const { open } = this.state;
    return (
      isVisible && (
        <div className="mobile-menu animated slideInDown faster">
          <div className="container">
            <Collapse in={open}>
              <div id="example-collapse-text">
                <TopFilters
                  locationEntries={locationEntries}
                  fieldOfWorkEntries={fieldOfWorkEntries}
                  divisionEntries={divisionEntries}
                  filter={filter}
                  onSearch={onSearch}
                />
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
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      )
    );
  }
}
