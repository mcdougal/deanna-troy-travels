import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { HtmlHead } from '@components/common';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  StructuredData,
} from '@lib/structuredData';

import { BlogPost } from '../getStaticProps';

const PageMetadata = (blogPost: BlogPost): JSX.Element => {
  const title = `${blogPost.title} | Deanna Troy Travels`;
  const description = blogPost.excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/post/${blogPost.slug}`;
  const imageUrl = blogPost.coverImage.url;

  const videoStructuredData: StructuredData = {
    // Thing > CreativeWork > MediaObject > VideoObject
    '@type': `VideoObject`,

    // Thing
    description: null,
    image: null,
    name: null,
    url: null,

    // CreativeWork
    author: getDeannaTroyTravelsPerson(),
    interactionStatistic: [
      {
        '@type': `InteractionCounter`,
        interactionService: {
          '@type': `WebSite`,
          '@id': `https://youtube.com`,
          name: `YouTube`,
        },
        interactionType: `LikeAction`,
        userInteractionCount: `18`,
      },
      {
        '@type': `InteractionCounter`,
        interactionService: {
          '@id': `https://youtube.com`,
          '@type': `WebSite`,
          name: `YouTube`,
        },
        interactionType: `CommentAction`,
        userInteractionCount: `18`,
      },
    ],
    keywords: null,

    // MediaObject
    duration: null,
    embedUrl: null,
    uploadDate: null,

    // VideoObject
    thumbnail: null,
  };

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
    keywords: blogPost.keywords,
    publisher: getDeannaTroyTravelsOrganization(),

    // Article
    articleBody: documentToPlainTextString(blogPost.content.json),

    // SocialMediaPosting
    sharedContent: videoStructuredData,
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
    keywords: blogPost.keywords,
    mainEntity: blogPostingStructuredData,
    publisher: getDeannaTroyTravelsOrganization(),

    // WebPage
    breadcrumb: {
      type: `BreadcrumbList`,
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
      title={title}
    />
  );
};

export default PageMetadata;
