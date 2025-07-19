import { fetchContentfulGraphQl } from '@lib/contentful';

export type Miscellaneous = {
  resumeButton: {
    label: string;
    url: string;
  };
};

export default async (): Promise<Miscellaneous> => {
  const response = await fetchContentfulGraphQl<{
    miscellaneousCollection: {
      items: Array<{
        id: string;
        field1: string;
        field2: string;
      }>;
    };
  }>(
    `
      query WorkWithMePageGetStaticPropsMiscellaneous {
        miscellaneousCollection {
          items {
            id
            field1
            field2
          }
        }
      }
    `,
  );

  const { items } = response.miscellaneousCollection;

  const resumeButtonItem = items.find((item) => {
    return item.id === `resume-button`;
  });

  const resumeButton = {
    label: resumeButtonItem?.field1 || `Media Kit`,
    url:
      resumeButtonItem?.field2 ||
      `https://www.canva.com/design/DAGPEesf8x0/_7auoRKDGPCke1vBn0c0TA/view`,
  };

  return { resumeButton };
};
