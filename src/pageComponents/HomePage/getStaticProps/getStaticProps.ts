import type { GetStaticProps } from 'next';

import fetchRecentBlogPosts, { BlogPost } from './fetchRecentBlogPosts';
import fetchRecentInstagramPosts, {
  InstagramPost,
} from './fetchRecentInstagramPosts';
import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';
import writeRssFeed from './writeRssFeed';

interface Props {
  recentBlogPosts: Array<BlogPost>;
  recentInstagramPosts: Array<InstagramPost>;
  recentVideos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  await writeRssFeed();

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
