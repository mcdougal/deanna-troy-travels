import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  StructuredData,
} from '@lib/structuredData';

import { BlogPost } from '../getStaticProps';

interface Props {
  blogPosts: Array<BlogPost>;
}

const PageMetadata = ({ blogPosts }: Props): JSX.Element => {
  const title = `Travel Blog`;
  const description = blogPosts[0].excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/blog`;
  const imageUrl = getBlogPostThumbnail(blogPosts[0]).url;

  const blogPostsStructuredData: Array<StructuredData> = blogPosts.map(
    (blogPost) => {
      return {
        '@type': `BlogPosting`,
        '@id': `https://www.deannatroytravels.com/post/${blogPost.slug}`,
      };
    },
  );

  const blogStructuredData: StructuredData = {
    // Thing > CreativeWork > Blog
    '@type': `Blog`,

    // Thing
    description,
    image: imageUrl,
    name: title,
    url: canonicalUrl,

    // CreativeWork
    author: getDeannaTroyTravelsPerson(),
    headline: title,
    keywords: `travel,vlog,blog,southeast asia,budget travel`,
    publisher: getDeannaTroyTravelsOrganization(),

    // Blog
    blogPost: blogPostsStructuredData,
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
    keywords: `travel,vlog,blog,southeast asia,budget travel`,
    mainEntity: blogStructuredData,
    publisher: getDeannaTroyTravelsOrganization(),

    // WebPage
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
