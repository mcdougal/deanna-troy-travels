import { HtmlHead } from '@components/generic';
import { getBlogPostThumbnail } from '@lib/blogPosts';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  StructuredData,
} from '@lib/structuredData';

import { Destination } from '../getStaticProps';

interface Props {
  destination: Destination;
}

const PageMetadata = ({ destination }: Props): JSX.Element => {
  const blogPosts = destination.linkedFrom.blogPostCollection.items;

  const title = destination.name;
  const description = blogPosts[0].excerpt;
  const canonicalUrl = `https://www.deannatroytravels.com/${destination.slug}`;
  const imageUrl = getBlogPostThumbnail(blogPosts[0]).url;

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
    keywords: `travel,vlog,blog,southeast asia,budget travel,${destination.name}`,
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
