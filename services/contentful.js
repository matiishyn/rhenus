import { createClient } from 'contentful';

const contentfulClientOpts = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV
};

export const client = createClient(contentfulClientOpts);

// https://github.com/isaachinman/next-i18next#accessing-the-current-language

const getEntriesByContentType = content_type =>
  client.getEntries({ content_type });

export const getJobEntries = () => getEntriesByContentType('job');
export const getDivisionEntries = () => getEntriesByContentType('division');
export const getEmploymentEntries = () => getEntriesByContentType('employment');
export const getLocationEntries = () =>
  getEntriesByContentType('location').then(transformResponse);
export const getApplicationMediumEntries = () =>
  getEntriesByContentType('applicationMedium');
export const getCampaignEntries = () => getEntriesByContentType('campaign');
export const getFieldOfWorkEntries = () =>
  getEntriesByContentType('fieldOfWork');

const transformResponse = original =>
  original.items.map(item => ({
    label: item.fields.description,
    value: item.sys.id
  }));
