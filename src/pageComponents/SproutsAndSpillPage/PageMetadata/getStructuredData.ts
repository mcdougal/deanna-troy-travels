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

import { YouTubeVideo } from '../../DestinationPage/getStaticProps/fetchVideos';

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
      { name: `Home`, url: `https://www.deannatroytravels.com` },
      { name: title },
    ],
    webPageUrl: canonicalUrl,
  });

  const podcast = {
    '@id': `${canonicalUrl}#podcast`,
    '@type': `PodcastSeries`,
    creator: [
      {
        '@type': `Person`,
        name: `Deanna Troy Travels`,
        sameAs: `https://www.instagram.com/deanna_troy_travels`,
      },
      {
        '@type': `Person`,
        name: `Soumya Argawal`,
        sameAs: `https://www.instagram.com/foodieveggie/`,
      },
    ],
    description,
    image: { '@id': primaryImage[`@id`] },
    inLanguage: `en-US`,
    name: title,
    publisher: { '@id': organization[`@id`] },
    url: canonicalUrl,
  };

  const webPage = makeWebPageStructuredData({
    about: podcast,
    additionalTypes: [`CollectionPage`],
    breadcrumb,
    description,
    primaryImage,
    title,
    webPageUrl: canonicalUrl,
    website,
  });

  webPage.mainEntity = { '@id': podcast[`@id`] };

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
      podcast,
      primaryImage,
      ...(videos.length > 0 ? [videoList] : []),
      webPage,
      website,
    ],
  };
};
