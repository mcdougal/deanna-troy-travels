import type { GetStaticProps } from 'next';

import fetchRecentBlogPosts, { BlogPost } from './fetchRecentBlogPosts';
import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';

type Props = {
  recentBlogPosts: Array<BlogPost>;
  recentVideos: Array<YouTubeVideo>;
};

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
