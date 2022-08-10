import { fetchContentfulGraphQl } from '@lib/contentful';

export interface Destination {
  name: string;
  slug: string;
}

export default async (): Promise<Array<Destination>> => {
  const response = await fetchContentfulGraphQl<{
    destinationCollection: {
      items: Array<Destination>;
    };
  }>(
    `
      query DestinationsPageGetStaticPropsDestinations {
        destinationCollection {
          items {
            name
            slug
          }
        }
      }
    `,
  );

  return response.destinationCollection.items;
};
