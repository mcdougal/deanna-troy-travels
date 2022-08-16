import { StructuredData } from './types';

export default (): StructuredData => {
  return {
    '@type': `Organization`,

    // Thing
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

    // Organization
    keywords: `travel,vlog,blog,southeast asia,budget travel`,
    logo: {
      type: `ImageObject`,
      url: `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659523212/deanna-troy-travels/logo.png`,
    },
  };
};
