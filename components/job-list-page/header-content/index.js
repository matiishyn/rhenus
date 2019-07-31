import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';
import { withNamespaces } from '../../../services/i18n';
import MobileJobList from '../mobile-job-list';

const HeaderContent = withNamespaces('common')(props => {
  const { campaignEntries, t, jobList } = props;
  const backgroundHeaderPhotoUrl =
    campaignEntries.includes.Asset[1].fields.file.url;
  const campaingContent = campaignEntries.items[0].fields;
  const hrefCompany = campaingContent.callToActionHref;
  const titleCampaign = campaingContent.tagline;
  const campaingActionLabel = campaingContent.callToActionLabel;
  const imageFigure = campaingContent.graphic.fields.file.url;

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
            <span className="two">{t('siteWide.subTitleCompaing')}</span>
            <span className="url-block">
              <a href={hrefCompany}>
                {campaingActionLabel}
                <span className="ricon-arrow-right" />
              </a>
            </span>
          </div>
        </div>
        <TopFilters
          locationEntries={props.locationEntries}
          fieldOfWorkEntries={props.fieldOfWorkEntries}
          divisionEntries={props.divisionEntries}
          onChange={props.onChange}
          filter={props.filter}
        />
      </div>
    </div>
  );
});

export default HeaderContent;
