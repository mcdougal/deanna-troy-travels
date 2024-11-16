import { fetchContentfulGraphQl } from '@lib/contentful';

import { BlogPost } from './fetchBlogPost';

export type RelatedBlogPost = {
  coverImage: {
    description: string | null;
    url: string;
  } | null;
  destination: {
    name: string;
    sys: { id: string };
  } | null;
  excerpt: string;
  publishedDate: string;
  slug: string;
  title: string;
  youTubeVideoId: string | null;
};

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
              sys { id }
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

  const sameDestinationBlogPosts = allBlogPosts.filter((otherBlogPost) => {
    return (
      otherBlogPost.slug !== blogPost.slug &&
      otherBlogPost.destination?.sys.id === blogPost.destination?.sys.id
    );
  });

  if (sameDestinationBlogPosts.length > 0) {
    return sameDestinationBlogPosts.slice(0, 4);
  }

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
