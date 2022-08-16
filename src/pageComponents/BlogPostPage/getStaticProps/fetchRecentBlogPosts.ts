import { fetchContentfulGraphQl } from '@lib/contentful';

import { BlogPost } from './fetchBlogPost';

export interface RecentBlogPost {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  destination: {
    name: string;
  } | null;
  excerpt: string;
  publishedDate: string;
  slug: string;
  title: string;
  youTubeVideoId: string | null;
}

export default async (blogPost: BlogPost): Promise<Array<RecentBlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<RecentBlogPost>;
    };
  }>(
    `
      query BlogPostPageGetStaticPropsRecentBlogPosts($slugToExclude: String!) {
        blogPostCollection(
          where: { slug_not: $slugToExclude }
          limit: 4
          order: publishedDate_DESC
        ) {
          items {
            coverImage {
              description
              url
            }
            destination {
              name
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
    {
      slugToExclude: blogPost.slug,
    },
  );

  return response.blogPostCollection.items;
};
