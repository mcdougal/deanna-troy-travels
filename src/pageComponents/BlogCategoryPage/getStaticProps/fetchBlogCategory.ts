import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogCategory {
  linkedFrom: {
    blogPostCollection: {
      items: Array<{
        category: {
          label: string;
        };
        coverImage: {
          description: string | null;
          url: string;
        };
        date: string;
        excerpt: string;
        slug: string;
        title: string;
      }>;
    };
  };
  label: string;
  slug: string;
}

export type BlogPost =
  BlogCategory[`linkedFrom`][`blogPostCollection`][`items`][number];

export default async (slug: string): Promise<BlogCategory> => {
  const response = await fetchContentfulGraphQl<{
    blogCategoryCollection: {
      items: Array<BlogCategory>;
    };
  }>(
    `
      query BlogCategoryPageGetStaticPropsBlogCategories($slug: String!) {
        blogCategoryCollection(where: { slug: $slug }) {
          items {
            linkedFrom {
              blogPostCollection(limit: 20) {
                items {
                  category {
                    label
                  }
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
            label
            slug
          }
        }
      }
    `,
    {
      slug,
    },
  );

  const blogCategory =
    response.blogCategoryCollection.items.length > 0
      ? response.blogCategoryCollection.items[0]
      : null;

  if (!blogCategory) {
    throw new Error(`No blog category found for slug: ${slug}`);
  }

  return blogCategory;
};
