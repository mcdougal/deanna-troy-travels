import type { GetStaticProps } from 'next';

import { fetchMiscellaneous, Miscellaneous } from '@lib/miscellaneous';

import fetchRecentBlogPosts, { BlogPost } from './fetchRecentBlogPosts';
import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';

type Props = {
  miscellaneous: Miscellaneous;
  recentBlogPosts: Array<BlogPost>;
  recentVideos: Array<YouTubeVideo>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      miscellaneous: await fetchMiscellaneous(),
      recentBlogPosts: await fetchRecentBlogPosts(),
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
