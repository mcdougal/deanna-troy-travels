import { StructuredDataObject } from './types';

interface Args {
  items: Array<{
    name: string;
    position: number;
  }>;
  webPageUrl: string;
}

export default ({ items, webPageUrl }: Args): StructuredDataObject => {
  return {
    '@id': `${webPageUrl}/#breadcrumb`,
    '@type': `BreadcrumbList`,
    itemListElement: items.map(({ name, position }) => {
      return {
        '@type': `ListItem`,
        name,
        position,
      };
    }),
  };
};
