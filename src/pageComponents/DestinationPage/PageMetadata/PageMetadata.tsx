import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost, Destination, YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  blogPosts: Array<BlogPost>;
  destination: Destination | null;
  videos: Array<YouTubeVideo>;
}

const PageMetadata = ({
  blogPosts,
  destination,
  videos,
}: Props): JSX.Element => {
  const featuredBlogPost = blogPosts[0];
  const featuredBlogPostThumbnail = getBlogPostThumbnail(featuredBlogPost);

  const title = destination?.name ?? `Travel Blog`;

  const description = featuredBlogPost.excerpt;

  const canonicalUrl = destination
    ? `https://www.deannatroytravels.com/${destination.slug}`
    : `https://www.deannatroytravels.com/blog`;

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
