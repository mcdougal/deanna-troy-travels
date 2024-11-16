import { StructuredDataObject } from './types';

type Args = {
  imageUrl: string;
  webPageUrl: string;
};

export default ({ imageUrl, webPageUrl }: Args): StructuredDataObject => {
  return {
    '@id': `${webPageUrl}#primary-image`,
    '@type': `ImageObject`,
    contentUrl: imageUrl,
    inLanguage: `en-US`,
    url: imageUrl,
  };
};
