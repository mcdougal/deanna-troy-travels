import type { GetStaticProps } from 'next';

import fetchRecentBlogPosts, { RecentBlogPost } from './fetchRecentBlogPosts';
import fetchRecentVideos, { RecentVideo } from './fetchRecentVideos';

interface Props {
  recentBlogPosts: Array<RecentBlogPost>;
  recentVideos: Array<RecentVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      recentBlogPosts: await fetchRecentBlogPosts(),
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
