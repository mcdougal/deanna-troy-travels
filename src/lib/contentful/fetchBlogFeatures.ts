import { fetchGraphQl } from './utils';

export interface BlogFeature {
  blogPostTitle: string;
  blogPostUrl: string;
  thumbnail: {
    url: string;
  };
  websiteName: string;
  websiteLogo: {
    height: number;
    url: string;
    width: number;
  };
}

export default async (): Promise<Array<BlogFeature>> => {
  const response = await fetchGraphQl<{
    blogFeatureCollection: {
      items: Array<BlogFeature>;
    };
  }>(`
    query BlogFeatures {
      blogFeatureCollection {
        items {
          blogPostTitle
          blogPostUrl
          thumbnail {
            url
          }
          websiteName
          websiteLogo {
            height
            url
            width
          }
        }
      }
    }
  `);

  return response.blogFeatureCollection.items;
};
