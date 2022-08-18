import { HtmlHead, StructuredData } from '@components/generic';

const PageMetadata = (): JSX.Element => {
  const title = `Budget Travel Vlogs`;
  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/f_auto,c_fill,w_1200,h_627,q_auto/v1659612637/deanna-troy-travels/home/og-image.jpg`;

  const structuredData: StructuredData = {
    '@type': `WebPage`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
    name: title,
    url: canonicalUrl,
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
