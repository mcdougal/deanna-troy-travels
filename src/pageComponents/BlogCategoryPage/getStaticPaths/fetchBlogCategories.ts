import { fetchContentfulGraphQl } from '@lib/contentful';

interface BlogCategory {
  linkedFrom: {
    blogPostCollection: {
      items: Array<{
        slug: string;
      }>;
    };
  };
  slug: string;
}

export default async (): Promise<Array<BlogCategory>> => {
  const response = await fetchContentfulGraphQl<{
    blogCategoryCollection: {
      items: Array<BlogCategory>;
    };
  }>(
    `
      query BlogCategoryPageGetStaticPathsBlogCategories {
        blogCategoryCollection {
          items {
            linkedFrom {
              blogPostCollection {
                items {
                  slug
                }
              }
            }
            slug
          }
        }
      }
    `,
  );

  return response.blogCategoryCollection.items;
};
