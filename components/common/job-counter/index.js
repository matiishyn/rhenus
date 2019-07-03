import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { Dropdown } from 'react-bootstrap';

export const JobCounter = withNamespaces('common')(props => {
  const { t, jobList = [] } = props;

  return (
    <div className="d-flex job-counter justify-content-end">
      <Dropdown alignRight>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <span> {t('siteWide.jobList')}</span>
          <span className="ricon-save" />
          <span>{jobList.length}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="special-for-scroll">
            {jobList.map(item => (
              <Dropdown.Item href={`/job?id=${item.id}`} key={item.id}>
                <span className="ricon-save-active" />
                {item.label}
              </Dropdown.Item>
            ))}
          </div>
          <div className="job-list-footer">
            <a href="#" className="job-list-footer">
              Clear job list
            </a>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});
