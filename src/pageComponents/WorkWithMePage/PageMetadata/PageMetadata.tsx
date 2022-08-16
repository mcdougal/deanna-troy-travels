import { HtmlHead } from '@components/generic';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  getDeannaTroyTravelsWebSite,
  StructuredData,
} from '@lib/structuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Work With Me`;
  const description = `I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
  ranging from travel vlogs, travel advice, story-times and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com/work-with-me`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659612804/deanna-troy-travels/work-with-me/og-image.png`;

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
