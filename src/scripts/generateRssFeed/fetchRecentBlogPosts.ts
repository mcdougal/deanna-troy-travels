import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogPost {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  excerpt: string;
  publishedDate: string;
  slug: string;
  title: string;
  youTubeVideoId: string | null;
}

export default async (): Promise<Array<BlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query BlogPageGetStaticPropsBlogPosts {
        blogPostCollection(limit: 3, order: publishedDate_DESC) {
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
    `,
  );

  return response.blogPostCollection.items;
};
