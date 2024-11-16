import { fetchContentfulGraphQl } from '@lib/contentful';

type BlogPost = {
  slug: string;
};

export default async (): Promise<Array<BlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query BlogPostPageGetStaticPathsBlogPosts {
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
