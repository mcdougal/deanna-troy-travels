import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchBlogPost, { BlogPost } from './fetchBlogPost';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  blogPost: BlogPost;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    throw new Error(`URL missing slug`);
  }

  return {
    props: {
      blogPost: await fetchBlogPost(slug),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
