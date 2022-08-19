import { StructuredDataObject } from './types';

interface Args {
  imageUrl: string;
  webPageUrl: string;
}

export default ({ imageUrl, webPageUrl }: Args): StructuredDataObject => {
  return {
    '@id': `${webPageUrl}#logo`,
    '@type': `ImageObject`,
    contentUrl: imageUrl,
    inLanguage: `en-US`,
    url: imageUrl,
  };
};
