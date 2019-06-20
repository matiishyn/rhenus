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

// job
export const getJobEntries = () => getEntriesByContentType('job');

// one job
export const getJobById = jobId => client.getEntry(jobId);

// division
export const getDivisionEntries = () =>
  getEntriesByContentType('division').then(transformResponse);
// employment
export const getEmploymentEntries = () =>
  getEntriesByContentType('employment').then(transformResponse);
// location
export const getLocationEntries = () =>
  getEntriesByContentType('location').then(transformResponse);
// applicationMedium
export const getApplicationMediumEntries = () =>
  getEntriesByContentType('applicationMedium');
// campaign
export const getCampaignEntries = () => getEntriesByContentType('campaign');
// fieldOfWork
export const getFieldOfWorkEntries = () =>
  getEntriesByContentType('fieldOfWork').then(transformResponse);

const transformResponse = original =>
  original.items.map(item => ({
    label: item.fields.description,
    value: item.sys.id
  }));
