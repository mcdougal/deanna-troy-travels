import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from '@components/common';

import BlogPostContent from './BlogPostContent';
import BlogPostCoverImage from './BlogPostCoverImage';
import BlogPostHeader from './BlogPostHeader';
import sx from './BlogPostPage.styles';
import BlogPostTags from './BlogPostTags';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const BlogPostPage = ({
  blogPost,
  blogPostVideo,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata blogPost={blogPost} blogPostVideo={blogPostVideo} />
      <Head>
        <title>{blogPost.title}</title>
        <meta key="description" content={blogPost.excerpt} name="description" />
        <meta key="og:title" content={blogPost.title} property="og:title" />
      </Head>
      <SiteHeader />
      <Box sx={sx.coverImageContainer}>
        <BlogPostCoverImage blogPost={blogPost} />
      </Box>
      <Container maxWidth="md" sx={sx.headerAndContentContainer}>
        <BlogPostHeader blogPost={blogPost} />
        <Box sx={sx.contentContainer}>
          <BlogPostContent blogPost={blogPost} />
        </Box>
        <Box sx={sx.tagsContainer}>
          <BlogPostTags blogPost={blogPost} />
        </Box>
      </Container>
    </>
  );
};

export default BlogPostPage;
