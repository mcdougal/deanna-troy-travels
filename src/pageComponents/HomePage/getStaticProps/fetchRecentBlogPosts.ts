import { fetchContentfulGraphQl } from '@lib/contentful';

export interface RecentBlogPost {
  coverImage: {
    description: string | null;
    url: string;
  };
  date: string;
  excerpt: string;
  location: string;
  slug: string;
  title: string;
}

export default async (): Promise<Array<RecentBlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<RecentBlogPost>;
    };
  }>(
    `
      query BlogPageGetStaticPropsBlogPosts {
        blogPostCollection(limit: 3, order: date_DESC) {
          items {
            coverImage {
              description
              url
            }
            date
            excerpt
            location
            slug
            title
          }
        }
      }
    `,
  );

  return response.blogPostCollection.items;
};
