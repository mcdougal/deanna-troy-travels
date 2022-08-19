import { StructuredDataObject } from './types';

interface Args {
  about?: StructuredDataObject;
  breadcrumb: StructuredDataObject;
  description: string;
  primaryImage: StructuredDataObject;
  webPageUrl: string;
  website: StructuredDataObject;
}

export default ({
  about,
  breadcrumb,
  description,
  primaryImage,
  webPageUrl,
  website,
}: Args): StructuredDataObject => {
  return {
    '@id': webPageUrl,
    '@type': `WebPage`,
    about: about ? { '@id': about[`@id`] } : undefined,
    breadcrumb: { '@id': breadcrumb[`@id`] },
    description,
    image: { '@id': primaryImage[`@id`] },
    inLanguage: `en-US`,
    isPartOf: { '@id': website[`@id`] },
    name: `Deanna Troy Travels`,
    primaryImageOfPage: { '@id': primaryImage[`@id`] },
    thumbnailUrl: primaryImage[`@url`],
    webPageUrl,
  };
};
