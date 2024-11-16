import type { GetStaticProps } from 'next';

import fetchBlogPostsCount from './fetchBlogPostsCount';
import fetchVideosCount from './fetchVideosCount';

type Props = {
  blogPostsCount: number;
  videosCount: number;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogPostsCount: await fetchBlogPostsCount(),
      videosCount: await fetchVideosCount(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
