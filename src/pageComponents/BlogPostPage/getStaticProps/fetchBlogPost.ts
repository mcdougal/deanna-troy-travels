import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogPostImageGallery {
  __typename: `BlogPostImageGallery`;
  imagesCollection: {
    items: Array<{
      description: string;
      sys: {
        id: string;
      };
      url: string;
    }>;
  };
  sys: {
    id: string;
  };
}

export interface BlogPost {
  content: {
    json: Parameters<typeof documentToReactComponents>[0];
    links: {
      assets: {
        block: Array<{
          description: string | null;
          height: number;
          sys: {
            id: string;
          };
          url: string;
          width: number;
        }>;
      };
      entries: {
        block: Array<BlogPostImageGallery>;
      };
    };
  };
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
        blogPostCollection(where: { slug: $slug }, limit: 1) {
          items {
            content {
              json
              links {
                assets {
                  block {
                    description
                    height
                    sys {
                      id
                    }
                    url
                    width
                  }
                }
                entries {
                  block {
                    ... on BlogPostImageGallery {
                      __typename
                      imagesCollection {
                        items {
                          description
                          sys {
                            id
                          }
                          url
                        }
                      }
                      sys {
                        id
                      }
                    }
                  }
                }
              }
            }
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
