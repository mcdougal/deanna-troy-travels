import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchBlogPost, { BlogPost } from './fetchBlogPost';
import fetchBlogPostVideo, { BlogPostVideo } from './fetchBlogPostVideo';
import fetchRecentBlogPosts, { RecentBlogPost } from './fetchRecentBlogPosts';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
  recentBlogPosts: Array<RecentBlogPost>;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    throw new Error(`URL missing blog post slug`);
  }

  const blogPost = await fetchBlogPost(slug);
  const blogPostVideo = await fetchBlogPostVideo(blogPost);

  return {
    props: {
      blogPost,
      blogPostVideo,
      recentBlogPosts: await fetchRecentBlogPosts(blogPost),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
