import { StructuredDataObject } from './types';

interface Args {
  about?: StructuredDataObject;
  additionalTypes?: Array<string>;
  breadcrumb: StructuredDataObject;
  description: string;
  primaryImage: StructuredDataObject;
  title: string;
  webPageUrl: string;
  website: StructuredDataObject;
}

export default ({
  about,
  additionalTypes,
  breadcrumb,
  description,
  primaryImage,
  title,
  webPageUrl,
  website,
}: Args): StructuredDataObject => {
  return {
    '@id': webPageUrl,
    '@type': additionalTypes ? [`WebPage`, ...additionalTypes] : `WebPage`,
    about: about ? { '@id': about[`@id`] } : undefined,
    breadcrumb: { '@id': breadcrumb[`@id`] },
    description,
    image: { '@id': primaryImage[`@id`] },
    inLanguage: `en-US`,
    isPartOf: { '@id': website[`@id`] },
    name: title,
    primaryImageOfPage: { '@id': primaryImage[`@id`] },
    thumbnailUrl: primaryImage.url,
    url: webPageUrl,
  };
};