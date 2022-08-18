import { HtmlHead, StructuredData } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';

import { BlogPost } from '../getStaticProps';

interface Props {
  blogPosts: Array<BlogPost>;
}

const PageMetadata = ({ blogPosts }: Props): JSX.Element => {
  const title = `Travel Blog`;
  const description = blogPosts[0].excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/blog`;
  const imageUrl = getBlogPostThumbnail(blogPosts[0]).url;

  const structuredData: StructuredData = {
    '@type': `Blog`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
    mainEntityOfPage: { '@type': `WebPage`, '@id': canonicalUrl },
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
          name: title,
          item: canonicalUrl,
        },
      ],
    },

    // Specific
    blogPost: blogPosts.map((blogPost) => {
      return {
        '@type': `BlogPosting`,
        '@id': `https://www.deannatroytravels.com/post/${blogPost.slug}`,
      };
    }),
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
