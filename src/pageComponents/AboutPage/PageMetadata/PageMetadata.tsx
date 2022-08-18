import { HtmlHead, StructuredData } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

const PageMetadata = (): JSX.Element => {
  const title = `About`;
  const description = `Deanna Troy Travels started in 2016 during a two year long backpacking adventure. From 2016 to 2018, my now husband and I traveled all over Southeast Asia. In that time we visited 12 countries: Thailand, Laos, Cambodia, Vietnam, Malaysia, Indonesia, Hong Kong, Singapore, Philippines, Australia, Japan and Taiwan.`;
  const canonicalUrl = `https://www.deannatroytravels.com/about`;
  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/about/hero.jpg`,
    width: 1200,
  });

  const structuredData: StructuredData = {
    '@type': `Organization`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
    mainEntityOfPage: { '@type': `WebPage`, '@id': canonicalUrl },
    name: title,
    url: canonicalUrl,

    // Breadcrumbs
    breadcrumb: {
      '@type': `BreadcrumbList`,
      name: `Breadcrumbs`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          name: title,
          item: canonicalUrl,
        },
      ],
    },

    // Specific
    logo: {
      type: `ImageObject`,
      url: `https://res.cloudinary.com/cedricmcdougal/image/upload/v1659523212/deanna-troy-travels/logo.png`,
    },
    sameAs: [
      `https://www.youtube.com/deannatroytravels`,
      `https://www.instagram.com/deanna_troy_travels`,
      `https://www.facebook.com/deannatroytravels`,
      `https://poshmark.com/closet/deannatroyshop`,
      `https://www.tiktok.com/@deannatroytravels`,
      `https://www.amazon.com/shop/deannatroytravels`,
    ],
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
