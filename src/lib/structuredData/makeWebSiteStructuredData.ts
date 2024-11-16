import { StructuredDataObject } from './types';

type Args = {
  organization: StructuredDataObject;
};

export default ({ organization }: Args): StructuredDataObject => {
  return {
    '@id': `https://www.deannatroytravels.com/#website`,
    '@type': `WebSite`,
    description: `Travel videos from a backpacker who spent two years traveling around Asia, Japan, Vietnam, Malaysia and more!`,
    inLanguage: `en-US`,
    name: `Deanna Troy Travels`,
    publisher: { '@id': organization[`@id`] },
    url: `https://www.deannatroytravels.com`,
  };
};
