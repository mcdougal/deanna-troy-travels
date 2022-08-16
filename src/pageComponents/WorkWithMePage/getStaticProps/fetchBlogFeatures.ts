import { fetchContentfulGraphQl } from '@lib/contentful';

export interface BlogFeature {
  blogPostTitle: string;
  blogPostUrl: string;
  thumbnail: {
    description: string | null;
    url: string;
  };
  websiteName: string;
  websiteLogo: {
    description: string | null;
    height: number;
    url: string;
    width: number;
  };
}

export default async (): Promise<Array<BlogFeature>> => {
  const response = await fetchContentfulGraphQl<{
    blogFeatureCollection: {
      items: Array<BlogFeature>;
    };
  }>(
    `
      query WorkWithMePageGetStaticPropsBlogFeatures {
        blogFeatureCollection {
          items {
            blogPostTitle
            blogPostUrl
            thumbnail {
              description
              url
            }
            websiteName
            websiteLogo {
              description
              height
              url
              width
            }
          }
        }
      }
    `,
  );

  return response.blogFeatureCollection.items;
};
