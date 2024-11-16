import { fetchContentfulGraphQl } from '@lib/contentful';

export default async (): Promise<number> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      total: number;
    };
  }>(
    `
      query AboutPageGetStaticPropsBlogPostsTotal {
        blogPostCollection {
          total
        }
      }
    `,
  );

  return response.blogPostCollection.total;
};
