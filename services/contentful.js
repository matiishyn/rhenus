import { createClient } from 'contentful';

const contentfulClientOpts = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV
};

export const client = createClient(contentfulClientOpts);

// https://github.com/isaachinman/next-i18next#accessing-the-current-language

const getEntriesByContentType = (content_type, filters, locale) =>
  client.getEntries({ content_type, ...filters, locale });

// job
export const getJobEntries = (filters, locale) =>
  getEntriesByContentType('job', filters, locale);

// one job
export const getJobById = (jobId, locale) => client.getEntry(jobId, { locale });

// division
export const getDivisionEntries = locale =>
  getEntriesByContentType('division', {}, locale).then(transformResponse);
// employment
export const getEmploymentEntries = locale =>
  getEntriesByContentType('employment', {}, locale).then(transformResponse);
// location
export const getLocationEntries = locale =>
  getEntriesByContentType('location', {}, locale).then(transformResponse);
// applicationMedium
export const getApplicationMediumEntries = locale =>
  getEntriesByContentType('applicationMedium', {}, locale);
// campaign
export const getCampaignEntries = locale =>
  getEntriesByContentType('campaign', {}, locale);
// fieldOfWork
export const getFieldOfWorkEntries = locale =>
  getEntriesByContentType('fieldOfWork', {}, locale).then(transformResponse);

const transformResponse = original =>
  original.items.map(item => ({
    label: item.fields.description,
    value: item.sys.id
  }));

export const getLocaleFromContext = context => {
  let lng;
  if (context.req) {
    // server
    lng = context.req.query.lng;
  } else {
    // browser
    lng = context.query.lng;
  }

  if (lng === 'en') {
    lng = 'en-US';
  }

  return lng;
};

export const getLocaleFromProps = props => {
  let { lng } = props;
  if (lng === 'en') {
    lng = 'en-US';
  }
  return lng;
};
