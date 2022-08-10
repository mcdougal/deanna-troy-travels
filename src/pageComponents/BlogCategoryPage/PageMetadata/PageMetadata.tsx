import { HtmlHead } from '@components/generic';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  StructuredData,
} from '@lib/structuredData';

import { BlogCategory } from '../getStaticProps';

interface Props {
  blogCategory: BlogCategory;
}

const PageMetadata = ({ blogCategory }: Props): JSX.Element => {
  const blogPosts = blogCategory.linkedFrom.blogPostCollection.items;

  const title = blogCategory.label;
  const description = blogPosts[0].excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/blog/categories/${blogCategory.slug}`;
  const imageUrl = blogPosts[0].coverImage.url;

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
    keywords: `travel,vlog,blog,southeast asia,budget travel,${blogCategory.slug},${blogCategory.slug} blog`,
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
