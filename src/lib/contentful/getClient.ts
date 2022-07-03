import { ContentfulClientApi, createClient } from 'contentful';

const getClient = (): ContentfulClientApi => {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space) {
    throw new Error(`Missing environment variable: CONTENTFUL_SPACE_ID`);
  }

  if (!accessToken) {
    throw new Error(`Missing environment variable: CONTENTFUL_ACCESS_TOKEN`);
  }

  return createClient({
    space,
    accessToken,
  });
};

export default getClient;
