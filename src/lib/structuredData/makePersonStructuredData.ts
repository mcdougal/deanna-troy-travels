import { cloudinaryLoader } from '@lib/cloudinary';

import { StructuredDataObject } from './types';

export default (): StructuredDataObject => {
  const personImageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/logo.png`,
    width: 512,
  });

  return {
    '@id': `https://www.deannatroytravels.com/about#person`,
    '@type': `Person`,
    image: {
      '@id': `https://www.deannatroytravels.com/about#person-image`,
      '@type': `ImageObject`,
      caption: `Deanna Troy Travels`,
      contentUrl: personImageUrl,
      inLanguage: `en-US`,
      url: personImageUrl,
    },
    name: `Deanna Troy Travels`,
  };
};
