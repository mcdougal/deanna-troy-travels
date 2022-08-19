import { cloudinaryLoader } from '@lib/cloudinary';

import { StructuredDataObject } from './types';

export default (): StructuredDataObject => {
  const logoUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/logo.png`,
    width: 512,
  });

  return {
    '@id': `https://www.deannatroytravels.com/#logo`,
    '@type': `ImageObject`,
    caption: `Deanna Troy Travels Logo`,
    contentUrl: logoUrl,
    inLanguage: `en-US`,
    url: logoUrl,
  };
};
