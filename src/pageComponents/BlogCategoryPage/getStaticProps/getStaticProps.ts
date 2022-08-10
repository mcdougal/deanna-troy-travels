import { ParsedUrlQuery } from 'querystring';

import type { GetStaticProps } from 'next';

import fetchBlogCategory, { BlogCategory } from './fetchBlogCategory';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  blogCategory: BlogCategory;
}

const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    throw new Error(`URL missing slug`);
  }

  return {
    props: {
      blogCategory: await fetchBlogCategory(slug),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
