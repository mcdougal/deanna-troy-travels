import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchBlogPost, { BlogPost } from './fetchBlogPost';
import fetchBlogPostVideo, { BlogPostVideo } from './fetchBlogPostVideo';
import fetchRelatedBlogPosts, {
  RelatedBlogPost,
} from './fetchRelatedBlogPosts';

type Params = ParsedUrlQuery & {
  slug: string;
};

type Props = {
  blogPost: BlogPost;
  blogPostVideo: BlogPostVideo | null;
  relatedBlogPosts: Array<RelatedBlogPost>;
};

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    throw new Error(`URL missing blog post slug`);
  }

  const blogPost = await fetchBlogPost(slug);

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  const blogPostVideo = await fetchBlogPostVideo(blogPost);

  return {
    props: {
      blogPost,
      blogPostVideo,
      relatedBlogPosts: await fetchRelatedBlogPosts(blogPost),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
