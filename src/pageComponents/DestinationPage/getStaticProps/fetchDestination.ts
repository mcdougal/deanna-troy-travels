import { fetchContentfulGraphQl } from '@lib/contentful';

export interface Destination {
  linkedFrom: {
    blogPostCollection: {
      items: Array<{
        coverImage: {
          description: string | null;
          url: string;
        } | null;
        excerpt: string;
        publishedDate: string;
        slug: string;
        title: string;
        youTubeVideoId: string | null;
      }>;
    };
  };
  name: string;
  slug: string;
  youTubePlaylistId: string | null;
}

export type BlogPost =
  Destination[`linkedFrom`][`blogPostCollection`][`items`][number];

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
                items {
                  coverImage {
                    description
                    url
                  }
                  excerpt
                  publishedDate
                  slug
                  title
                  youTubeVideoId
                }
              }
            }
            name
            slug
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
