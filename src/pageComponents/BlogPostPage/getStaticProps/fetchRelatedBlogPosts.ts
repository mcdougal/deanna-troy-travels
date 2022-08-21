import { fetchContentfulGraphQl } from '@lib/contentful';

import { BlogPost } from './fetchBlogPost';

export interface RelatedBlogPost {
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

export default async (blogPost: BlogPost): Promise<Array<RelatedBlogPost>> => {
  const response = await fetchContentfulGraphQl<{
    blogPostCollection: {
      items: Array<RelatedBlogPost>;
    };
  }>(
    `
      query BlogPostPageGetStaticPropsRelatedBlogPosts {
        blogPostCollection(order: publishedDate_DESC) {
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
  );

  const allBlogPosts = response.blogPostCollection.items;

  const blogPostIndex = allBlogPosts.findIndex((otherBlogPost) => {
    return otherBlogPost.slug === blogPost.slug;
  });

  const relatedBlogPosts = allBlogPosts.slice(
    blogPostIndex + 1,
    blogPostIndex + 5,
  );

  return [
    ...relatedBlogPosts,
    ...allBlogPosts.slice(0, 4 - relatedBlogPosts.length),
  ];
};
