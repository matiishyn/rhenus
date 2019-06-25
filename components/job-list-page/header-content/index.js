import React from 'react';
import './index.scss';
import { TopFilters } from '../top-filters';
import { JobCounter } from '../../common/job-counter';

const HeaderContent = props => {
  const { campaignEntries } = props;
  const backgroundHeaderPhotoUrl =
    'https:' + campaignEntries.includes.Asset[0].fields.file.url;
  const campaingContent = campaignEntries.items[0].fields;
  const titleCampaign = campaingContent.title;
  const campaingSubTitle = campaingContent.tagline;
  const campaingActionLabel = campaingContent.callToActionLabel;

  // const backgroundCampaignPhotoUrl =
  //   'https:' + campaignEntries.items[0].fields.image.fields.file.url;

  return (
    <div
      className="bg-header"
      style={{ backgroundImage: `url(${backgroundHeaderPhotoUrl})` }}
    >
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-end mobile-counter d-md-none d-sm-block  ">
          <JobCounter />
        </div>
        <div className="d-flex justify-content-between top-line">
          <div className="find-job">
            <h2 className="title-job">Find your tomorrow-job at Rhenus</h2>
            <span>211 jobs available</span>
          </div>
          <div className="today">
            <h2>{titleCampaign}</h2>
            <span className="two">{campaingSubTitle}</span>
            <span>
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
};

export default HeaderContent;
