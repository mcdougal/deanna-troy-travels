import { BlogPost } from './fetchRecentBlogPosts';
import { InstagramPost } from './fetchRecentInstagramPosts';
import { YouTubeVideo } from './fetchRecentVideos';
import getStaticProps from './getStaticProps';

export type { BlogPost, InstagramPost, YouTubeVideo };

export default getStaticProps;
