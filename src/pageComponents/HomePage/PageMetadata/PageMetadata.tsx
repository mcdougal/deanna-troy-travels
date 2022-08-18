import { HtmlHead } from '@components/generic';
import {
  getDeannaTroyTravelsOrganization,
  getDeannaTroyTravelsPerson,
  getDeannaTroyTravelsWebSite,
} from '@lib/structuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Budget Travel Vlogs`;
  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/f_auto,c_fill,w_1200,h_627,q_auto/v1659612637/deanna-troy-travels/home/og-image.jpg`;

  const structuredData = {
    // Thing > CreativeWork > WebPage
    '@type': `WebPage`,
    '@id': canonicalUrl,
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
