import { HtmlHead } from '@components/common';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  getDeannaTroyTravelsWebSite,
} from '@lib/structuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Budget Travel Vlog`;
  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659612637/deanna-troy-travels/home/og-image.jpg`;

  const structuredData = {
    // Thing > CreativeWork > WebPage
    '@type': `WebPage`,
    '@context': `http://schema.org`,

    // Thing
    description,
    identifier: canonicalUrl,
    image: imageUrl,
    name: title,
    url: canonicalUrl,

    // CreativeWork
    author: getDeannaTroyTravelsPerson(),
    isPartOf: getDeannaTroyTravelsWebSite(),
    keywords: `travel,vlog,blog,southeast asia,budget travel`,
    publisher: getDeannaTroyTravelsOrganization(),

    // WebPage
    breadcrumb: {
      type: `BreadcrumbList`,
      itemListElement: [],
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
