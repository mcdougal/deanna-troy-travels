import { fetchContentfulGraphQl } from '@lib/contentful';

import { Destination } from './fetchDestination';

export default async (): Promise<Array<Destination>> => {
  const response = await fetchContentfulGraphQl<{
    destinationCollection: {
      items: Array<Destination>;
    };
  }>(
    `
      query DestinationPageGetStaticPropsDestinations {
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
            sys { id }
            thumbnail {
              description
              url
            }
            youTubePlaylistId
          }
        }
      }
    `,
  );

  return response.destinationCollection.items;
};
