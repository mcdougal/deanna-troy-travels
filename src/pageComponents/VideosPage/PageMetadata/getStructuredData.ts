import {
  makeBreadcrumbStructuredData,
  makeLogoStructuredData,
  makeOrganizationStructuredData,
  makePrimaryImageStructuredData,
  makeWebPageStructuredData,
  makeWebSiteStructuredData,
  StructuredData,
} from '@lib/structuredData';

interface Args {
  canonicalUrl: string;
  description: string;
  imageUrl: string;
  title: string;
}

export default ({
  canonicalUrl,
  description,
  imageUrl,
  title,
}: Args): StructuredData => {
  const logo = makeLogoStructuredData();
  const organization = makeOrganizationStructuredData({ logo });
  const website = makeWebSiteStructuredData({ organization });

  const primaryImage = makePrimaryImageStructuredData({
    imageUrl,
    webPageUrl: canonicalUrl,
  });

  const breadcrumb = makeBreadcrumbStructuredData({
    items: [
      { name: `Home`, url: `https://www.deannatroytravels.com` },
      { name: title },
    ],
    webPageUrl: canonicalUrl,
  });

  const webPage = makeWebPageStructuredData({
    additionalTypes: [`CollectionPage`],
    breadcrumb,
    description,
    primaryImage,
    title,
    webPageUrl: canonicalUrl,
    website,
  });

  return {
    '@context': `https://schema.org`,
    '@graph': [breadcrumb, logo, organization, primaryImage, webPage, website],
  };
};
