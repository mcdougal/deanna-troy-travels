import { fetchContentfulGraphQl } from '@lib/contentful';

type Destination = {
  linkedFrom: {
    blogPostCollection: {
      items: Array<{
        slug: string;
      }>;
    };
  };
  slug: string;
  youTubePlaylistId: string | null;
};

export default async (): Promise<Array<Destination>> => {
  const response = await fetchContentfulGraphQl<{
    destinationCollection: {
      items: Array<Destination>;
    };
  }>(
    `
      query DestinationPageGetStaticPathsDestinations {
        destinationCollection {
          items {
            linkedFrom {
              blogPostCollection {
                items {
                  slug
                }
              }
            }
            slug
            youTubePlaylistId
          }
        }
      }
    `,
  );

  return response.destinationCollection.items;
};
