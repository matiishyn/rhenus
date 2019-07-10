import React from 'react';
import './index.scss';
import { Collapse, Button } from 'react-bootstrap';
import { TopPageFilter } from '../top-page-filter';
import { TopFilters } from '../top-filters';
import MobileJobList from '../mobile-job-list';

export default class MobileFilter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isFilterOpen: false,
      isJobListOpen: false
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
      onChange,
      jobList
    } = this.props;
    const { isFilterOpen, isJobListOpen } = this.state;
    return (
      isVisible && (
        <div className="mobile-menu animated slideInDown faster">
          <div className="container">
            <Collapse in={isFilterOpen}>
              <div id="example-collapse-text">
                <TopFilters
                  locationEntries={locationEntries}
                  fieldOfWorkEntries={fieldOfWorkEntries}
                  divisionEntries={divisionEntries}
                  filter={filter}
                  onChange={onChange}
                />
              </div>
            </Collapse>

            <Collapse in={isJobListOpen}>
              <div id="example-collapse-text2">JOB LIST</div>
            </Collapse>

            <div className="d-flex bottom-line-filter">
              {!isJobListOpen && (
                <Button
                  onClick={() => this.setState({ isFilterOpen: !isFilterOpen })}
                  aria-controls="example-collapse-text"
                  aria-expanded={isFilterOpen}
                >
                  Hide filter
                  <span
                    className={
                      isFilterOpen ? 'ricon-filter-open' : 'ricon-hamburger'
                    }
                  />
                </Button>
              )}

              {isJobListOpen && (
                <span
                  onClick={() => this.setState({ isJobListOpen: false })}
                  className="animated fadeIn faster"
                >
                  Close JobList
                </span>
              )}

              <TopPageFilter
                {...{
                  locationEntries,
                  employmentEntries,
                  fieldOfWorkEntries,
                  divisionEntries
                }}
                filter={filter}
                onChange={onChange}
              />
              <MobileJobList jobList={jobList} />

              {!isFilterOpen && (
                <span
                  onClick={() =>
                    this.setState({ isJobListOpen: !isJobListOpen })
                  }
                >
                  STAR
                </span>
              )}
            </div>
          </div>
        </div>
      )
    );
  }
}
