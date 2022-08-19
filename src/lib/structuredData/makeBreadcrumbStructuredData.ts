import { StructuredDataObject } from './types';

interface Args {
  items: Array<{
    name: string;
    url?: string;
  }>;
  webPageUrl: string;
}

export default ({ items, webPageUrl }: Args): StructuredDataObject => {
  return {
    '@id': `${webPageUrl}/#breadcrumb`,
    '@type': `BreadcrumbList`,
    itemListElement: items.map(({ name, url }, i) => {
      return {
        '@type': `ListItem`,
        item: url,
        name,
        position: i + 1,
      };
    }),
  };
};
