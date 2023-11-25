import { fetchContentfulGraphQl } from '@lib/contentful';

export interface LinkTreeItem {
  image: {
    url: string;
  };
  label: string;
  url: string;
}

export default async (): Promise<Array<LinkTreeItem>> => {
  const response = await fetchContentfulGraphQl<{
    linkTreeItemCollection: {
      items: Array<LinkTreeItem>;
    };
  }>(
    `
      query LinkTreeGetStaticPropsLinkTreeItems {
        linkTreeItemCollection(order: order_ASC) {
          items {
            image {
              url
            }
            label
            url
          }
        }
      }
    `,
  );

  return response.linkTreeItemCollection.items;
};
