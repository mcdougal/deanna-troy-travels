import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { Destination, YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  destination: Destination;
  videos: Array<YouTubeVideo>;
}

const PageMetadata = ({ destination, videos }: Props): JSX.Element => {
  const blogPosts = destination.linkedFrom.blogPostCollection.items;
  const featuredBlogPost = blogPosts[0];
  const featuredBlogPostThumbnail = getBlogPostThumbnail(featuredBlogPost);

  const title = destination.name;

  const description = featuredBlogPost.excerpt;

  const canonicalUrl = `https://www.deannatroytravels.com/${destination.slug}`;

  const imageUrl = featuredBlogPostThumbnail.loader({
    src: featuredBlogPostThumbnail.url,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    title,
    videos,
  });

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
