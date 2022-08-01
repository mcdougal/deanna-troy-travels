import type { GetStaticProps } from 'next';

import { BlogFeature, fetchBlogFeatures } from '@lib/contentful';

interface Props {
  blogFeatures: Array<BlogFeature>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogFeatures: await fetchBlogFeatures(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
