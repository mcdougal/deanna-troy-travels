import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost, Destination, YouTubeVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

type Props = {
  blogPosts: Array<BlogPost>;
  destination: Destination | null;
  videos: Array<YouTubeVideo>;
};

const PageMetadata = ({
  blogPosts,
  destination,
  videos,
}: Props): JSX.Element => {
  const featuredBlogPost = blogPosts[0];
  const featuredVideo = videos[0];

  const title = destination?.name ?? `Travel Blog`;

  const description =
    featuredBlogPost?.excerpt ||
    (destination
      ? `Watch ${title} travel videos from Deanna Troy Travels.`
      : `Explore travel stories from Deanna Troy Travels.`);

  const canonicalUrl = destination
    ? `https://www.deannatroytravels.com/${destination.slug}`
    : `https://www.deannatroytravels.com/blog`;

  let imageUrl = featuredVideo?.thumbnailUrl || destination?.thumbnail.url || ``;

  if (featuredBlogPost) {
    const featuredBlogPostThumbnail = getBlogPostThumbnail(featuredBlogPost);

    imageUrl = featuredBlogPostThumbnail.loader({
      src: featuredBlogPostThumbnail.url,
      width: 1200,
    });
  }

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
