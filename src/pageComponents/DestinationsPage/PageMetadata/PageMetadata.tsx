import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStructuredData from './getStructuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Destinations`;

  const description = `Explore vlogs and blogs from destinations all around the world, and get access to the best budget travel tips.`;

  const canonicalUrl = `https://www.deannatroytravels.com/destinations`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/destinations/og-image.jpg`,
    width: 1200,
  });

  const structuredData = getStructuredData({
    canonicalUrl,
    description,
    imageUrl,
    title,
  });

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
