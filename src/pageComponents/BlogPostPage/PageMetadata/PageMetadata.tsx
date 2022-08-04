import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { HtmlHead } from '@components/common';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  StructuredData,
} from '@lib/structuredData';

import { BlogPost, BlogPostVideo } from '../getStaticProps';

interface Props {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
}

const PageMetadata = ({ blogPost, blogPostVideo }: Props): JSX.Element => {
  const title = blogPost.title;
  const description = blogPost.excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/post/${blogPost.slug}`;
  const imageUrl = blogPost.coverImage.url;

  const youTubeWebSiteStructuredData: StructuredData = {
    '@type': `WebSite`,
    '@id': `https://youtube.com`,
    name: `YouTube`,
  };

  const videoStructuredData: StructuredData | null = blogPostVideo
    ? {
        // Thing > CreativeWork > MediaObject > VideoObject
        '@type': `VideoObject`,

        // Thing
        description: blogPostVideo.description,
        image: blogPostVideo.thumbnailUrl,
        name: blogPostVideo.title,
        url: `https://www.youtube.com/watch?v=${blogPostVideo.videoId}`,

        // CreativeWork
        author: getDeannaTroyTravelsPerson(),
        interactionStatistic: [
          {
            '@type': `InteractionCounter`,
            interactionService: youTubeWebSiteStructuredData,
            interactionType: `ViewAction`,
            userInteractionCount: blogPostVideo.viewCount,
          },
          {
            '@type': `InteractionCounter`,
            interactionService: youTubeWebSiteStructuredData,
            interactionType: `LikeAction`,
            userInteractionCount: blogPostVideo.likeCount,
          },
          {
            '@type': `InteractionCounter`,
            interactionService: youTubeWebSiteStructuredData,
            interactionType: `CommentAction`,
            userInteractionCount: blogPostVideo.commentCount,
          },
        ],
        keywords: blogPostVideo.tags.join(`,`),
        thumbnailUrl: blogPostVideo.thumbnailUrl,

        // MediaObject
        duration: blogPostVideo.duration,
        embedUrl: `https://www.youtube.com/embed/${blogPostVideo.videoId}`,
        uploadDate: blogPostVideo.publishedAt,

        // VideoObject
        thumbnail: {
          '@type': `ImageObject`,
          url: blogPostVideo.thumbnailUrl,
        },
      }
    : null;

  const blogPostingStructuredData: StructuredData = {
    // Thing > CreativeWork > Article > SocialMediaPosting > BlogPosting
    '@type': `BlogPosting`,

    // Thing
    description,
    image: imageUrl,
    name: title,
    url: canonicalUrl,

    // CreativeWork
    author: getDeannaTroyTravelsPerson(),
    headline: title,
    keywords: blogPost.tags.join(`,`),
    publisher: getDeannaTroyTravelsOrganization(),

    // Article
    articleBody: documentToPlainTextString(blogPost.content.json),

    // SocialMediaPosting
    ...(videoStructuredData ? { sharedContent: videoStructuredData } : {}),
  };

  const structuredData: StructuredData = {
    // Thing > CreativeWork > WebPage
    '@type': `WebPage`,
    '@context': `http://schema.org`,

    // Thing
    description,
    image: imageUrl,
    name: title,
    url: canonicalUrl,

    // CreativeWork
    author: getDeannaTroyTravelsPerson(),
    keywords: blogPost.tags.join(`,`),
    mainEntity: blogPostingStructuredData,
    publisher: getDeannaTroyTravelsOrganization(),

    // WebPage
    breadcrumb: {
      '@type': `BreadcrumbList`,
      name: `Breadcrumbs`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          name: `Blog`,
          item: `https://www.deannatroytravels.com/blog`,
        },
        {
          '@type': `ListItem`,
          position: 2,
          name: title,
          item: canonicalUrl,
        },
      ],
    },
  };

  return (
    <HtmlHead
      canonicalUrl={canonicalUrl}
      description={description}
      imageUrl={imageUrl}
      structuredData={structuredData}
      title={`${title} | Deanna Troy Travels`}
    />
  );
};

export default PageMetadata;
