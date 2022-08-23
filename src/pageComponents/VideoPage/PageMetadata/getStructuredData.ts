import {
  makeBreadcrumbStructuredData,
  makeLogoStructuredData,
  makeOrganizationStructuredData,
  makePersonStructuredData,
  makePrimaryImageStructuredData,
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
  title: string;
  video: YouTubeVideo;
}

export default ({
  canonicalUrl,
  description,
  imageUrl,
  title,
  video,
}: Args): StructuredData => {
  const logo = makeLogoStructuredData();
  const person = makePersonStructuredData();
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
        name: `Travel Videos`,
        url: `https://www.deannatroytravels.com/videos`,
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

  const videoStructuredData = makeVideoStructuredData({
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

  return {
    '@context': `https://schema.org`,
    '@graph': [
      breadcrumb,
      logo,
      organization,
      person,
      primaryImage,
      videoStructuredData,
      webPage,
      website,
    ],
  };
};
