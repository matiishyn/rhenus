import React from 'react';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';
import { Dropdown } from 'react-bootstrap';

export const JobCounter = withNamespaces('common')(props => {
  const { t, jobList = [] } = props;
  return (
    <div className="d-flex job-counter justify-content-end">
      {/*<span> {t('siteWide.jobList')}</span>*/}
      {/*<span className="ricon-save" />*/}
      {/*<span>{jobList.length}</span>*/}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <span> {t('siteWide.jobList')}</span>
          <span className="ricon-save" />
          <span>{jobList.length}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {jobList.map(item => (
            <Dropdown.Item href="#" key={item.id}>
              <span className="ricon-save-active" />
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});
