import type { GetStaticProps } from 'next';

import { fetchMiscellaneous, Miscellaneous } from '@lib/miscellaneous';

import fetchBlogFeatures, { BlogFeature } from './fetchBlogFeatures';
import fetchTestimonials, { Testimonial } from './fetchTestimonials';
import fetchWorkExamples, { WorkExample } from './fetchWorkExamples';

type Props = {
  blogFeatures: Array<BlogFeature>;
  miscellaneous: Miscellaneous;
  testimonials: Array<Testimonial>;
  workExamples: Array<WorkExample>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogFeatures: await fetchBlogFeatures(),
      miscellaneous: await fetchMiscellaneous(),
      testimonials: await fetchTestimonials(),
      workExamples: await fetchWorkExamples(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
