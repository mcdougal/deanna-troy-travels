import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import {
  makeArticleStructuredData,
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

import { BlogPost, BlogPostVideo } from '../getStaticProps';

interface Args {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  title: string;
}

export default ({
  blogPost,
  blogPostVideo,
  canonicalUrl,
  description,
  imageUrl,
  title,
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
      { name: `Home`, url: `https://www.deannatroytravels.com` },
      { name: `Travel Blog`, url: `https://www.deannatroytravels.com/blog` },
      { name: title },
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

  const article = makeArticleStructuredData({
    articleSection: blogPost.destination
      ? [blogPost.destination.name]
      : undefined,
    author: person,
    datePublished: blogPost.publishedDate,
    image: primaryImage,
    keywords: blogPost.tags,
    organization,
    title: blogPost.title,
    webPage,
    website,
    wordCount: documentToPlainTextString(blogPost.content.json).length,
  });

  const video = blogPostVideo
    ? makeVideoStructuredData({
        commentCount: blogPostVideo.commentCount,
        description: blogPostVideo.description,
        duration: blogPostVideo.duration,
        likeCount: blogPostVideo.likeCount,
        thumbnailUrl: blogPostVideo.thumbnailUrl,
        title: blogPostVideo.title,
        uploadDate: blogPostVideo.publishedAt,
        videoUrl: `https://www.youtube.com/watch?v=${blogPostVideo.videoId}`,
        viewCount: blogPostVideo.viewCount,
      })
    : undefined;

  return {
    '@context': `https://schema.org`,
    '@graph': [
      article,
      breadcrumb,
      logo,
      organization,
      person,
      primaryImage,
      webPage,
      website,
      video,
    ],
  };
};
