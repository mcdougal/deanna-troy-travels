import { HtmlHead, StructuredData } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

const PageMetadata = (): JSX.Element => {
  const title = `Budget Travel Vlogs`;
  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com`;
  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/home/og-image.jpg`,
    width: 1200,
  });

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
