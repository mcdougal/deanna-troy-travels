import type { GetStaticProps } from 'next';

import fetchBlogFeatures, { BlogFeature } from './fetchBlogFeatures';
import fetchMiscellaneous, { Miscellaneous } from './fetchMiscellaneous';

type Props = {
  blogFeatures: Array<BlogFeature>;
  miscellaneous: Miscellaneous;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogFeatures: await fetchBlogFeatures(),
      miscellaneous: await fetchMiscellaneous(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
