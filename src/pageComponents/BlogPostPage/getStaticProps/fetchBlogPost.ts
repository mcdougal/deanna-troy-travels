import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogPost {
  content: {
    json: Parameters<typeof documentToReactComponents>[0];
  };
  coverImage: {
    description: string | null;
    url: string;
  };
  date: string;
  slug: string;
  sys: {
    publishedAt: string;
  };
  tags: Array<string>;
  title: string;
  youTubeVideoId: string | null;
}

export default async (slug: string): Promise<BlogPost> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<BlogPost>;
    };
  }>(
    `
      query BlogPostPageGetStaticPropsBlogPosts($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            content {
              json
            }
            coverImage {
              description
              url
            }
            date
            slug
            sys {
              publishedAt
            }
            tags
            title
            youTubeVideoId
          }
        }
      }
    `,
    {
      slug,
    },
  );

  const blogPost =
    response.blogPostCollection.items.length > 0
      ? response.blogPostCollection.items[0]
      : null;

  if (!blogPost) {
    throw new Error(`No blog post found for slug: ${slug}`);
  }

  return blogPost;
};
