import { HtmlHead } from '@components/generic';
import { cloudinaryLoader } from '@lib/cloudinary';
import {
  makeBreadcrumbStructuredData,
  makeLogoStructuredData,
  makeOrganizationStructuredData,
  makePrimaryImageStructuredData,
  makeWebPageStructuredData,
  makeWebSiteStructuredData,
  StructuredData,
} from '@lib/structuredData';

const PageMetadata = (): JSX.Element => {
  const title = `Budget Travel Vlogs`;
  const description = `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`;
  const canonicalUrl = `https://www.deannatroytravels.com`;
  const imageUrl = cloudinaryLoader({
    src: `/upload/deanna-troy-travels/home/og-image.jpg`,
    width: 1200,
  });

  const logoStructuredData = makeLogoStructuredData();

  const organizationStructuredData = makeOrganizationStructuredData({
    logo: logoStructuredData,
  });

  const websiteStructuredData = makeWebSiteStructuredData({
    organization: organizationStructuredData,
  });

  const primaryImageStructuredData = makePrimaryImageStructuredData({
    imageUrl,
    webPageUrl: canonicalUrl,
  });

  const breadcrumbStructuredData = makeBreadcrumbStructuredData({
    items: [{ name: `Home`, position: 1 }],
    webPageUrl: canonicalUrl,
  });

  const webPageStructuredData = makeWebPageStructuredData({
    about: organizationStructuredData,
    breadcrumb: breadcrumbStructuredData,
    description,
    primaryImage: primaryImageStructuredData,
    webPageUrl: canonicalUrl,
    website: websiteStructuredData,
  });

  const structuredData: StructuredData = {
    '@context': `https://schema.org`,
    '@graph': [
      breadcrumbStructuredData,
      logoStructuredData,
      organizationStructuredData,
      primaryImageStructuredData,
      webPageStructuredData,
      websiteStructuredData,
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
