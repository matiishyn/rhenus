import {createClient} from 'contentful';

const contentfulClientOpts = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV,
};

export const client = createClient(contentfulClientOpts);


const getEntriesByContentType = async (ct) => await client.getEntries({'content_type': ct});

export const getJobEntries = async () => await getEntriesByContentType('job');
export const getDivisionEntries = async () => await getEntriesByContentType('division');
export const getEmploymentEntries = async () => await getEntriesByContentType('employment');
export const getLocationEntries = async () => await getEntriesByContentType('location');
export const getApplicationMediumEntries = async () => await getEntriesByContentType('applicationMedium');
export const getCampaignEntries = async () => await getEntriesByContentType('campaign');
export const getFieldOfWorkEntries = async () => await getEntriesByContentType('fieldOfWork');
