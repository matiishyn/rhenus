import {createClient} from 'contentful';

const contentfulClientOpts = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV,
};

export const client = createClient(contentfulClientOpts);

export const getJobEntries = async () => await client.getEntries('job');
export const getDivisionEntries = async () => await client.getEntries('division');
export const getEmploymentEntries = async () => await client.getEntries('employment');
export const getLocationEntries = async () => await client.getEntries('location');
export const getApplicationMediumEntries = async () => await client.getEntries('applicationMedium');
export const getCampaignEntries = async () => await client.getEntries('campaign');
