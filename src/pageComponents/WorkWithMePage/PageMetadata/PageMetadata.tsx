import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

import getStructuredData from './getStructuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Work With Me`;

  const description = `I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
  ranging from travel vlogs, travel advice, story-times and more!`;

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
