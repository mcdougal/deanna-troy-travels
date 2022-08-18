import { fetchContentfulGraphQl } from '@lib/contentful';

interface BlogPost {
  slug: string;
}

export default async (): Promise<Array<BlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query GenerateSitemapPostsSitemapEntriesBlogPosts {
        blogPostCollection {
          items {
            slug
          }
        }
      }
    `,
  );

  return response.blogPostCollection.items;
};
