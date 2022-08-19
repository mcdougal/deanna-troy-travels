import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStructuredData from './getStructuredData';

const PageMetadata = (): JSX.Element => {
  const title = `About`;

  const description = `Deanna Troy Travels started in 2016 during a two year long backpacking adventure. From 2016 to 2018, my now husband and I traveled all over Southeast Asia. In that time we visited 12 countries: Thailand, Laos, Cambodia, Vietnam, Malaysia, Indonesia, Hong Kong, Singapore, Philippines, Australia, Japan and Taiwan.`;

  const canonicalUrl = `https://www.deannatroytravels.com/about`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/about/hero.jpg`,
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
