import { HtmlHead } from '@components/common';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  getDeannaTroyTravelsWebSite,
  StructuredData,
} from '@lib/structuredData';

const PageMetadata = (): JSX.Element => {
  const title = `About`;
  const description = `Deanna Troy Travels started in 2016 during a two year long backpacking adventure. From 2016 to 2018, my now husband and I traveled all over Southeast Asia. In that time we visited 12 countries: Thailand, Laos, Cambodia, Vietnam, Malaysia, Indonesia, Hong Kong, Singapore, Philippines, Australia, Japan and Taiwan.`;
  const canonicalUrl = `https://www.deannatroytravels.com/about`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659694445/deanna-troy-travels/about/hero.jpg`;

  const structuredData: StructuredData = {
    // Thing > CreativeWork > WebPage > ContactPage
    '@type': `ContactPage`,
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
    keywords: `travel,vlog,blog,southeast asia,budget travel,advertise`,
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
