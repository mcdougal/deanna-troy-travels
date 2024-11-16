import { fetchContentfulGraphQl } from '@lib/contentful';

type Destination = {
  slug: string;
};

export default async (): Promise<Array<Destination>> => {
  const response = await fetchContentfulGraphQl<{
    destinationCollection: {
      items: Array<Destination>;
    };
  }>(
    `
      query GenerateSitemapDestinationsSitemapEntriesDestinations {
        destinationCollection {
          items {
            slug
          }
        }
      }
    `,
  );

  return response.destinationCollection.items;
};
