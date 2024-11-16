import { fetchContentfulGraphQl } from '@lib/contentful';

export type Destination = {
  linkedFrom: {
    blogPostCollection: {
      total: number;
    };
  };
  name: string;
  order: number;
  slug: string;
  thumbnail: {
    description: string;
    url: string;
  };
};

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
            linkedFrom {
              blogPostCollection {
                total
              }
            }
            name
            order
            slug
            thumbnail {
              description
              url
            }
          }
        }
      }
    `,
  );

  return response.destinationCollection.items;
};
