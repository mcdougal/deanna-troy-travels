import type { GetStaticProps } from 'next';

import fetchRecentBlogPosts, { BlogPost } from './fetchRecentBlogPosts';
import fetchRecentInstagramPosts, {
  InstagramPost,
} from './fetchRecentInstagramPosts';
import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';

interface Props {
  recentBlogPosts: Array<BlogPost>;
  recentInstagramPosts: Array<InstagramPost>;
  recentVideos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      recentBlogPosts: await fetchRecentBlogPosts(),
      recentInstagramPosts: await fetchRecentInstagramPosts(),
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
