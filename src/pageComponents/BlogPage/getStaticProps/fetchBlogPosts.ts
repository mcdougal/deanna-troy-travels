import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogPost {
  coverImage: {
    description: string | null;
    url: string;
  };
  date: string;
  excerpt: string;
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
        blogPostCollection {
          items {
            coverImage {
              description
              url
            }
            date
            excerpt
            slug
            title
          }
        }
      }
    `,
  );

  return response.blogPostCollection.items;
};
