import type { GetStaticProps } from 'next';

import fetchBlogPosts, { BlogPost } from './fetchBlogPosts';

interface Props {
  blogPosts: Array<BlogPost>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogPosts: await fetchBlogPosts(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
