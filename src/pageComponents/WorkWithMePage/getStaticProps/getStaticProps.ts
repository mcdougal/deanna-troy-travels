import type { GetStaticProps } from 'next';

import fetchBlogFeatures, { BlogFeature } from './fetchBlogFeatures';

type Props = {
  blogFeatures: Array<BlogFeature>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogFeatures: await fetchBlogFeatures(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
