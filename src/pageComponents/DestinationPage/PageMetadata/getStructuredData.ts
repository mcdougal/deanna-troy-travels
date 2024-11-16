import {
  makeBreadcrumbStructuredData,
  makeLogoStructuredData,
  makeOrganizationStructuredData,
  makePrimaryImageStructuredData,
  makeVideoListStructuredData,
  makeVideoStructuredData,
  makeWebPageStructuredData,
  makeWebSiteStructuredData,
  StructuredData,
} from '@lib/structuredData';

import { YouTubeVideo } from '../getStaticProps';

type Args = {
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  title: string;
  videos: Array<YouTubeVideo>;
};

export default ({
  canonicalUrl,
  description,
  imageUrl,
  title,
  videos,
}: Args): StructuredData => {
  const logo = makeLogoStructuredData();
  const organization = makeOrganizationStructuredData({ logo });
  const website = makeWebSiteStructuredData({ organization });

  const primaryImage = makePrimaryImageStructuredData({
    imageUrl,
    webPageUrl: canonicalUrl,
  });

  const breadcrumb = makeBreadcrumbStructuredData({
    items: [
      {
        name: `Home`,
        url: `https://www.deannatroytravels.com`,
      },
      {
        name: `Destinations`,
        url: `https://www.deannatroytravels.com/destinations`,
      },
      {
        name: title,
      },
    ],
    webPageUrl: canonicalUrl,
  });

  const webPage = makeWebPageStructuredData({
    breadcrumb,
    description,
    primaryImage,
    title,
    webPageUrl: canonicalUrl,
    website,
  });

  const videoList = makeVideoListStructuredData({
    videos: videos.map((video) => {
      return makeVideoStructuredData({
        commentCount: video.commentCount,
        description: video.description,
        duration: video.duration,
        likeCount: video.likeCount,
        thumbnailUrl: video.thumbnailUrl,
        title: video.title,
        uploadDate: video.publishedAt,
        videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
        viewCount: video.viewCount,
      });
    }),
  });

  return {
    '@context': `https://schema.org`,
    '@graph': [
      breadcrumb,
      logo,
      organization,
      primaryImage,
      webPage,
      website,
      videoList,
    ],
  };
};
