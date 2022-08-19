import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost, BlogPostVideo } from '../getStaticProps';

import getStructuredData from './getStructuredData';

interface Props {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
}

const PageMetadata = ({ blogPost, blogPostVideo }: Props): JSX.Element => {
  const blogPostThumbnail = getBlogPostThumbnail(blogPost);

  const title = blogPost.title;

  const description = blogPost.excerpt;

  const canonicalUrl = `https://www.deannatroytravels.com/post/${blogPost.slug}`;

  const imageUrl = blogPostThumbnail.loader({
    src: blogPostThumbnail.url,
    width: 1200,
  });

  const structuredData = getStructuredData({
    blogPost,
    blogPostVideo,
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
