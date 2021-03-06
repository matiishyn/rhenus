import React from 'react';
import './index.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { DropZoneCustom } from '../drop-zone';
import { withNamespaces } from '../../../services/i18n';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadMore from '../read-more';

export const JobPageContent = withNamespaces('common')(props => {
  const { jobEntry, onDrop, onApply, t } = props;
  const { linkedinColleagues, description, offer, profile } = jobEntry.fields;
  return (
    <div className="container d-flex page-job-content justify-content-between">
      <div className="d-flex flex-column left-content">
        <div>
          <Tabs>
            <TabList>
              <Tab>
                <span>{t('jobContent.theJob')}</span>
              </Tab>
              <Tab>
                <span>{t('jobContent.yourProfile')}</span>
              </Tab>
            </TabList>

            <TabPanel>
              <ReadMore>{documentToReactComponents(description)}</ReadMore>
            </TabPanel>
            <TabPanel className="profile-tab">
              <ReadMore>{documentToReactComponents(profile)}</ReadMore>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="tablet-right">
        <div className="d-flex flex-column center-content">
          <div className="offer">
            <span>{t('jobContent.offer')}</span>
            {documentToReactComponents(offer)}
          </div>
          <div className="linkedin-block">
            <span>{t('jobContent.coworkers')}</span>
            <div className="linkedin">
              {linkedinColleagues?.map(item => {
                return (
                  <a
                    href={item.fields.linkedinUri}
                    key={item.fields.fullName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.fields.image.fields.file.url} alt="in" />
                    <span className="ricon-linkedin" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column right-content">
          <div>
            <span>{t('siteWide.apply')}</span>

            {documentToReactComponents(jobEntry.fields.applyInformation)}
          </div>
          <DropZoneCustom onDrop={onDrop} />
          <div className="apply-button ">
            <a href="#" onClick={onApply}>
              {t('siteWide.apply')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
