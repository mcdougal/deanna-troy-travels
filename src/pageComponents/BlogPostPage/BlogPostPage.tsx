import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

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
      <SiteHeader />
      <Box sx={sx.coverImageContainer}>
        <BlogPostCoverImage blogPost={blogPost} />
      </Box>
      <Container maxWidth={false} sx={sx.headerAndContentContainer}>
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
