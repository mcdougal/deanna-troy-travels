import { StructuredDataObject } from './types';

interface Args {
  imageUrl: string;
  webPageUrl: string;
}

export default ({ imageUrl, webPageUrl }: Args): StructuredDataObject => {
  return {
    '@id': `${webPageUrl}#logo`,
    '@type': `ImageObject`,
    caption: `Deanna Troy Travels Logo`,
    contentUrl: imageUrl,
    inLanguage: `en-US`,
    url: imageUrl,
  };
};
