import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { Dropdown } from 'react-bootstrap';

export const JobCounter = withNamespaces('common')(props => {
  const { t, jobList = [], clearJobList } = props;

  return (
    <div className="d-flex job-counter justify-content-end">
      <Dropdown alignRight>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          disabled={!jobList.length}
        >
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
            {!jobList.length && <span>{t('siteWide.noElement')}</span>}
          </div>
          <div className="job-list-footer">
            <span className="job-list-footer" onClick={clearJobList}>
              {t('siteWide.clearJobList')}
            </span>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});
