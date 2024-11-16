import { StructuredDataObject } from './types';

type Args = {
  logo: StructuredDataObject;
};

export default ({ logo }: Args): StructuredDataObject => {
  return {
    '@id': `https://www.deannatroytravels.com/#organization`,
    '@type': `Organization`,
    image: { '@id': logo[`@id`] },
    logo: { '@id': logo[`@id`] },
    name: `Deanna Troy Travels`,
    sameAs: [
      `https://www.youtube.com/deannatroytravels`,
      `https://www.instagram.com/deanna_troy_travels`,
      `https://www.facebook.com/deannatroytravels`,
      `https://poshmark.com/closet/deannatroyshop`,
      `https://www.tiktok.com/@deannatroytravels`,
      `https://www.amazon.com/shop/deannatroytravels`,
    ],
    url: `https://www.deannatroytravels.com`,
  };
};
