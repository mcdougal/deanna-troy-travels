import { HtmlHead, StructuredData } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { Destination, YouTubeVideo } from '../getStaticProps';

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

  const structuredData: StructuredData = {
    '@type': `WebPage`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
    name: title,
    url: canonicalUrl,

    // Breadcrumbs
    breadcrumb: {
      '@type': `BreadcrumbList`,
      name: `Breadcrumbs`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          name: `Destinations`,
          item: `https://www.deannatroytravels.com/destinations`,
        },
        {
          '@type': `ListItem`,
          position: 2,
          name: title,
          item: canonicalUrl,
        },
      ],
    },

    // Specific

    sharedContent: [
      ...blogPosts.map((blogPost) => {
        return {
          '@type': `BlogPosting`,
          '@id': `https://www.deannatroytravels.com/post/${blogPost.slug}`,
          url: `https://www.deannatroytravels.com/post/${blogPost.slug}`,
        };
      }),
      ...videos.map((video) => {
        return {
          '@type': `VideoObject`,
          '@id': `https://www.youtube.com/watch?v=${video.videoId}`,
          url: `https://www.youtube.com/watch?v=${video.videoId}`,
        };
      }),
    ],
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
