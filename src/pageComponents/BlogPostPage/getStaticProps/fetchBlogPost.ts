/* eslint-disable @typescript-eslint/naming-convention */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulGraphQl } from '@lib/contentful';

export type BlogPostImageGallery = {
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
};

export type EmbeddedSnippet = {
  __typename: `EmbeddedSnippet`;
  snippet: string;
  sys: {
    id: string;
  };
};

export type BlogPost = {
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
        block: Array<BlogPostImageGallery | EmbeddedSnippet>;
      };
    };
  };
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
  sys: {
    id: string;
    publishedAt: string;
  };
  tags: Array<string>;
  title: string;
  youTubeVideoId: string | null;
};

export default async (slug: string): Promise<BlogPost | null> => {
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
                    ... on EmbeddedSnippet {
                      __typename
                      snippet
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
              sys { id }
            }
            excerpt
            publishedDate
            slug
            sys {
              id
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

  return blogPost;
};
