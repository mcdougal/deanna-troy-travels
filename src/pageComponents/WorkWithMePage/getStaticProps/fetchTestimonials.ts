import { fetchContentfulGraphQl } from '@lib/contentful';

export type Testimonial = {
  company: string;
  person: string;
  testimonial: string;
};

export default async (): Promise<Array<Testimonial>> => {
  const response = await fetchContentfulGraphQl<{
    testimonialCollection: {
      items: Array<Testimonial>;
    };
  }>(
    `
      query WorkWithMePageGetStaticPropsTestimonials {
        testimonialCollection(order: order_ASC) {
          items {
            company
            person
            testimonial
          }
        }
      }
    `,
  );

  return response.testimonialCollection.items;
};
