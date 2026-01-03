import { fetchContentfulGraphQl } from '@lib/contentful';

export type WorkExample = {
  typeOfWork: string;
  contentType: 'instagramPost';
  contentId: string;
};

export default async (): Promise<Array<WorkExample>> => {
  const response = await fetchContentfulGraphQl<{
    exampleWorkCollection: {
      items: Array<WorkExample>;
    };
  }>(
    `
      query WorkWithMePageGetStaticPropsWorkExamples {
        exampleWorkCollection(order: order_ASC) {
          items {
            typeOfWork
            contentType
            contentId
          }
        }
      }
    `,
  );

  return response.exampleWorkCollection.items;
};
