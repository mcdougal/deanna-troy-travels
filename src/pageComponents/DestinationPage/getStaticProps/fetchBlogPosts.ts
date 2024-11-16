import { fetchContentfulGraphQl } from '@lib/contentful';

export type BlogPost = {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  destination: {
    name: string;
    sys: { id: string };
  } | null;
  excerpt: string;
  publishedDate: string;
  slug: string;
  title: string;
  youTubeVideoId: string | null;
};

export default async (): Promise<Array<BlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query DestinationPageGetStaticPropsBlogPosts {
        blogPostCollection(order: publishedDate_DESC) {
          items {
            coverImage {
              description
              url
            }
            destination {
              name
              sys { id }
            }
            excerpt
            publishedDate
            slug
            title
            youTubeVideoId
          }
        }
      }
    `,
  );

  return response.blogPostCollection.items;
};
