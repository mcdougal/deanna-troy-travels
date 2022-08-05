import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogPost {
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

export default async (): Promise<Array<BlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query BlogPageGetStaticPropsBlogPosts {
        blogPostCollection(order: date_DESC) {
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
