import { HtmlHead, StructuredData } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';

const PageMetadata = (): JSX.Element => {
  const title = `Work With Me`;
  const description = `I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
  ranging from travel vlogs, travel advice, story-times and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com/work-with-me`;
  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/work-with-me/og-image.png`,
    width: 1200,
  });

  const structuredData: StructuredData = {
    '@context': `https://schema.org`,
    '@graph': [],

    '@type': `ContactPage`,

    // Common
    '@id': canonicalUrl,
    description,
    image: imageUrl,
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
