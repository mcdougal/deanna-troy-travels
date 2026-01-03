import type { GetStaticProps } from 'next';

import { fetchMiscellaneous, Miscellaneous } from '@lib/miscellaneous';

import fetchBlogPostsCount from './fetchBlogPostsCount';
import fetchVideosCount from './fetchVideosCount';

type Props = {
  blogPostsCount: number;
  miscellaneous: Miscellaneous;
  videosCount: number;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogPostsCount: await fetchBlogPostsCount(),
      miscellaneous: await fetchMiscellaneous(),
      videosCount: await fetchVideosCount(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
