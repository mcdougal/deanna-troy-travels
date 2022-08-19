import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  blogPosts: Array<BlogPost>;
}

const PageMetadata = ({ blogPosts }: Props): JSX.Element => {
  const featuredBlogPost = blogPosts[0];
  const featuredBlogPostThumbnail = getBlogPostThumbnail(featuredBlogPost);

  const title = `Travel Blog`;

  const description = featuredBlogPost.excerpt;

  const canonicalUrl = `https://www.deannatroytravels.com/blog`;

  const imageUrl = featuredBlogPostThumbnail.loader({
    src: featuredBlogPostThumbnail.url,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    title,
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
