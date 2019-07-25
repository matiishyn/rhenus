import React from 'react';
import './index.scss';
import { Collapse, Button } from 'react-bootstrap';
import { TopPageFilter } from '../top-page-filter';
import { TopFilters } from '../top-filters';

export default class MobileFilter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isFilterOpen: false,
      isJobListOpen: false
    };
  }
  closeFilter = () => {
    this.setState({ isFilterOpen: !this.state.isFilterOpen });
  };

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
        <>
          <div className="mobile-menu animated slideInDown faster">
            <div className="container">
              <Collapse in={isFilterOpen}>
                <div id="example-collapse-text">
                  <TopFilters
                    locationEntries={locationEntries}
                    fieldOfWorkEntries={fieldOfWorkEntries}
                    divisionEntries={divisionEntries}
                    filter={filter}
                    onChange={data => {
                      onChange(data);
                      this.closeFilter();
                    }}
                  />
                  <div className="d-sm-flex d-md-none margin-bottom-for-mobile-filter">
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
                  </div>
                </div>
              </Collapse>

              <Collapse in={isJobListOpen}>
                <div
                  id="example-collapse-text2"
                  className="mobile-list-save-job"
                >
                  <ul>
                    {jobList.map(item => (
                      <li key={item.id}>
                        <a href={`/job?id=${item.id}`}>
                          <span className="ricon-save-active" />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>

              <div className="d-flex bottom-line-filter">
                {!isJobListOpen && (
                  <Button
                    onClick={() => this.closeFilter()}
                    aria-controls="example-collapse-text"
                    aria-expanded={isFilterOpen}
                  >
                    {isFilterOpen ? 'Hide filters' : 'Show filters'}
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
                    className="animated fadeIn faster closeList"
                  >
                    Close job List
                  </span>
                )}
                <div className="d-sm-none d-md-flex">
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
                </div>

                {!isFilterOpen && (
                  <span className="d-none d-sm-flex d-md-none flex-grow-1 justify-content-end">
                    <span
                      className="button-mobile-job-filter-counter d-flex"
                      onClick={() =>
                        this.setState({ isJobListOpen: !isJobListOpen })
                      }
                    >
                      <span className="ricon-save" />
                      <span className="counter-number">{jobList.length}</span>
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
          {isFilterOpen || isJobListOpen ? (
            <div className="bg-opacity-mobile animated fadeIn faster" />
          ) : null}
        </>
      )
    );
  }
}
