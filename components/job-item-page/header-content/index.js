import React from 'react';
import './index.scss';
import { Container } from 'react-bootstrap';
import { ButtonLine } from '../button-line';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { withNamespaces } from '../../../services/i18n';

export const HeaderContentJob = withNamespaces('common')(props => {
  const { title, tagline } = props.jobEntry;
  const { jobEntry, onApply, t, active, handleAddJobItem } = props;
  const { introduction } = jobEntry;
  const campaingPhoto =
    'https:' + jobEntry.location.fields.images[0].fields.file.url;

  const onToggleBack = e => {
    e.preventDefault();
    history.back();
  };
  return (
    <div
      className="bg-header-job"
      style={{ backgroundImage: `url(${campaingPhoto})` }}
    >
      <div className="bg-opacity">
        <Container>
          <div className="d-flex justify-content-between top-content-job">
            <div className="job-left-content ">
              <a href="#" onClick={onToggleBack}>
                <span className="ricon-arrow-back" />
                <span>{t('siteWide.backToSearch')}</span>
              </a>
              <h3>{title}</h3>
              <h4>{tagline}</h4>
            </div>
            <div className="job-right-content">
              <ul className="list-group">
                <li className="first-item-job-list">
                  <span className="ricon-division" />

                  {jobEntry.location.fields.description}
                </li>
                <li>
                  <span className="ricon-label-important" />

                  {jobEntry.division.fields.description}
                </li>
                <li>
                  <span className="ricon-label-important" />

                  {jobEntry.employment.fields.description}
                </li>
                <li>
                  <span className="ricon-label-important" />

                  {jobEntry.fieldOfWork.fields.description}
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="d-sm-none d-xs-none d-md-block">
          <ButtonLine active={active} handleAddJobItem={handleAddJobItem} />
        </div>
        <div className="container header-text-bottom d-flex flex-column">
          <span className="introduction-text">
            {documentToReactComponents(introduction)}
          </span>
        </div>
        <div className="d-sm-block d-md-none mobile-button-header">
          <ButtonLine active={active} handleAddJobItem={handleAddJobItem}/>
        </div>
        <div className="container d-flex justify-content-start">
          <div className="button-apply ">
            <a href="#" onClick={onApply}>
              {t('siteWide.apply')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
