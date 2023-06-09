import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStructuredData from './getStructuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Links - Deanna Troy Travels`;

  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;

  const canonicalUrl = `https://www.deannatroytravels.com/links`;

  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/home/og-image.jpg`,
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
      title={title}
    />
  );
};

export default PageMetadata;
