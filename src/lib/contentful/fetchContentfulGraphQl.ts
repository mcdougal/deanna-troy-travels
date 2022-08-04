import axios from 'axios';

export default async <T>(
  query: string,
  variables?: { [key: string]: string | number | boolean | null | undefined },
): Promise<T> => {
  const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

  if (!CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(`Missing environment variable: CONTENTFUL_ACCESS_TOKEN`);
  }

  if (!CONTENTFUL_SPACE_ID) {
    throw new Error(`Missing environment variable: CONTENTFUL_SPACE_ID`);
  }

  const response = await axios.post(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      query,
      variables,
    },
    {
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  );

  return response.data.data;
};
