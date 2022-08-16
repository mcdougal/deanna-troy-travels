import type { GetStaticPaths } from 'next';

import fetchBlogPosts from './fetchBlogPosts';

const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await fetchBlogPosts();

  const paths = blogPosts.map((blogPost) => {
    return {
      params: {
        slug: blogPost.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
