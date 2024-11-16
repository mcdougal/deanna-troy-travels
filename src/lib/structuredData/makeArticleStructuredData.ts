import { StructuredDataObject } from './types';

type Args = {
  articleSection?: Array<string>;
  author: StructuredDataObject;
  datePublished: string;
  image: StructuredDataObject;
  keywords: Array<string>;
  organization: StructuredDataObject;
  title: string;
  webPage: StructuredDataObject;
  website: StructuredDataObject;
  wordCount: number;
};

export default ({
  articleSection,
  author,
  datePublished,
  image,
  keywords,
  organization,
  title,
  webPage,
  website,
  wordCount,
}: Args): StructuredDataObject => {
  return {
    '@id': `${webPage.url}#article`,
    '@type': `Article`,
    articleSection,
    author: { '@id': author[`@id`] },
    datePublished,
    headline: title,
    image: { '@id': image[`@id`] },
    inLanguage: `en-US`,
    isPartOf: { '@id': website[`@id`] },
    keywords,
    mainEntityOfPage: { '@id': webPage[`@id`] },
    publisher: { '@id': organization[`@id`] },
    thumbnailUrl: image.url,
    url: webPage.url,
    wordCount,
  };
};
