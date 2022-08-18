import { HtmlHead, StructuredData } from '@components/generic';

const PageMetadata = (): JSX.Element => {
  const title = `Destinations`;
  const description = `Explore vlogs and blogs from destinations all around the world, and get access to the best budget travel tips.`;
  const canonicalUrl = `https://www.deannatroytravels.com/destinations`;
  const imageUrl = `https://res.cloudinary.com/cedricmcdougal/image/upload/f_auto,c_fill,w_1200,h_627,q_auto/v1660153277/deanna-troy-travels/destinations/og-image.jpg`;

  const structuredData: StructuredData = {
    '@type': `WebPage`,

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
