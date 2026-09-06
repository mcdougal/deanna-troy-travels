import { Document } from '@contentful/rich-text-types';

import { fetchContentfulGraphQl } from '@lib/contentful';

export type Miscellaneous = {
  resumeButton: {
    label: string;
    url: string;
  };
  sproutsAndSpillFollowPodcast: {
    label: string;
    url: string;
  };
  sproutsAndSpillDescription: Document | null;
  workWithMeContactMeButton: {
    label: string;
  };
  workWithMeDoForYouTitle: {
    text: string;
  };
  workWithMeMediaRatesButton: {
    label: string;
    url: string;
  };
  workWithMeTestimonialsTitle: {
    text: string;
  };
  workWithMeTitle: {
    text: string;
  };
  workWithMeVideo: {
    videoId: string;
  };
};

export default async (): Promise<Miscellaneous> => {
  const response = await fetchContentfulGraphQl<{
    miscellaneousCollection: {
      items: Array<{
        id: string;
        field1: string;
        field2: string;
        field3: {
          json: Document;
        } | null;
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
            field3 {
              json
            }
          }
        }
      }
    `,
  );

  const { items } = response.miscellaneousCollection;

  const itemsById = new Map<string, (typeof items)[number]>();
  items.forEach((item) => {
    itemsById.set(item.id, item);
  });

  const field1 = (id: string, defaultValue: string): string => {
    return itemsById.get(id)?.field1 || defaultValue;
  };
  const field2 = (id: string, defaultValue: string): string => {
    return itemsById.get(id)?.field2 || defaultValue;
  };
  const field3 = (id: string): Document | null => {
    return itemsById.get(id)?.field3?.json || null;
  };

  return {
    resumeButton: {
      label: field1(`resume-button`, `Media Kit`),
      url: field2(
        `resume-button`,
        `https://www.canva.com/design/DAGPEesf8x0/_7auoRKDGPCke1vBn0c0TA/view`,
      ),
    },
    sproutsAndSpillFollowPodcast: {
      label: field1(`sprouts-and-spill-follow-podcast`, `Follow Podcast`),
      url: field2(`sprouts-and-spill-follow-podcast`, ``).trim(),
    },
    sproutsAndSpillDescription: field3(`sprouts-and-spill-description`),
    workWithMeContactMeButton: {
      label: field1(`work-with-me-contact-me-button`, `Contact Me`),
    },
    workWithMeDoForYouTitle: {
      text: field1(`work-with-me-do-for-you-title`, `What I Can Do For You!`),
    },
    workWithMeMediaRatesButton: {
      label: field1(`work-with-me-media-rates-button`, `Media Rates`),
      url: field2(
        `work-with-me-media-rates-button`,
        `https://drive.google.com/file/d/1tjokicrwqs3PL4U-PnF-U8GzG5A-FnVG/view?usp=sharing`,
      ),
    },
    workWithMeTestimonialsTitle: {
      text: field1(`work-with-me-testimonials-title`, `What Clients Say`),
    },
    workWithMeTitle: {
      text: field1(`work-with-me-title`, `Work With Me`),
    },
    workWithMeVideo: {
      videoId: field1(`work-with-me-video`, `EB4Vhu0q-7Y`),
    },
  };
};
