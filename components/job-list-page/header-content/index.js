import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';
import { withNamespaces } from '../../../services/i18n';
import MobileJobList from '../mobile-job-list';

const HeaderContent = withNamespaces('common')(props => {
  const { campaignEntries, t, jobList } = props;
  const backgroundHeaderPhotoUrl =
    'https:' + campaignEntries.includes.Asset[1].fields.file.url;
  const campaingContent = campaignEntries.items[0].fields;
  const titleCampaign = campaingContent.title;
  const campaingSubTitle = campaingContent.tagline;
  const campaingActionLabel = campaingContent.callToActionLabel;
  const imageFigure =
    'https:' + campaignEntries.items[0].fields.graphic.fields.file.url;

  return (
    <div
      className="bg-header"
      style={{ backgroundImage: `url(${backgroundHeaderPhotoUrl})` }}
    >
      <div className="d-flex d-md-none d-sm-block mobile-job-list-menu ">
        <MobileJobList jobList={jobList} />
      </div>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between top-line">
          <div className="find-job">
            <h2 className="title-job">{t('siteWide.findYourJob')}</h2>
            <span>211 jobs available</span>
          </div>
          <div
            className="today"
            style={{ backgroundImage: `url(${imageFigure})` }}
          >
            <h2>{titleCampaign}</h2>
            <span className="two">{campaingSubTitle}</span>
            <span className="url-block">
              {campaingActionLabel}
              <span className="ricon-arrow-right" />
            </span>
          </div>
        </div>
        <TopFilters
          locationEntries={props.locationEntries}
          fieldOfWorkEntries={props.fieldOfWorkEntries}
          divisionEntries={props.divisionEntries}
          onSearch={props.onSearch}
          filter={props.filter}
        />
      </div>
    </div>
  );
});

export default HeaderContent;
