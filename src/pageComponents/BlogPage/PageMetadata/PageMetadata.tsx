import { HtmlHead } from '@components/common';
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
  const title = `Blog`;
  const description = `Get the scoop on your next travel destination.`;
  const canonicalUrl = `https://www.deannatroytravels.com/blog`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659648901/deanna-troy-travels/blog/og-image.jpg`;

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
