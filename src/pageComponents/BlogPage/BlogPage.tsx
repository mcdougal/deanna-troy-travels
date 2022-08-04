import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';

import sx from './BlogPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata blogPosts={blogPosts} />
      <SiteHeader />
    </>
  );
};

export default BlogPage;
