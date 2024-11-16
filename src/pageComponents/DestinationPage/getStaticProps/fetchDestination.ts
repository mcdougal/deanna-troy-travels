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
  sys: { id: string };
  thumbnail: {
    description: string;
    url: string;
  };
  youTubePlaylistId: string | null;
};

export default async (slug: string): Promise<Destination | null> => {
  const response = await fetchContentfulGraphQl<{
    destinationCollection: {
      items: Array<Destination>;
    };
  }>(
    `
      query DestinationPageGetStaticPropsDestinations($slug: String!) {
        destinationCollection(where: { slug: $slug }, limit: 1) {
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
    {
      slug,
    },
  );

  const destination =
    response.destinationCollection.items.length > 0
      ? response.destinationCollection.items[0]
      : null;

  return destination;
};
