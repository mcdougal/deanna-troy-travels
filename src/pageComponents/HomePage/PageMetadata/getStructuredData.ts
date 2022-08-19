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

interface Args {
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  recentVideos: Array<YouTubeVideo>;
  title: string;
}

export default ({
  canonicalUrl,
  description,
  imageUrl,
  recentVideos,
  title,
}: Args): StructuredData => {
  const logo = makeLogoStructuredData();
  const organization = makeOrganizationStructuredData({ logo });
  const website = makeWebSiteStructuredData({ organization });

  const primaryImage = makePrimaryImageStructuredData({
    imageUrl,
    webPageUrl: canonicalUrl,
  });

  const breadcrumb = makeBreadcrumbStructuredData({
    items: [{ name: `Home` }],
    webPageUrl: canonicalUrl,
  });

  const webPage = makeWebPageStructuredData({
    about: organization,
    breadcrumb,
    description,
    primaryImage,
    title,
    webPageUrl: canonicalUrl,
    website,
  });

  const videoList = makeVideoListStructuredData({
    videos: recentVideos.map((video) => {
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
      videoList,
      webPage,
      website,
    ],
  };
};
