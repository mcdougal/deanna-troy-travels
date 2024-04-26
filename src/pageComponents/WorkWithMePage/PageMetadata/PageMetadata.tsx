import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStructuredData from './getStructuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Work With Me`;

  const description = `Deanna is a travel influencer who creates YouTube content featuring budget-friendly and vegan travel experiences in Southeast Asia, the U.S.A. and Europe.`;

  const canonicalUrl = `https://www.deannatroytravels.com/work-with-me`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/work-with-me/og-image.png`,
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
