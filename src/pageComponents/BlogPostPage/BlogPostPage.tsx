import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

import BlogPostContent from './BlogPostContent';
import BlogPostHeader from './BlogPostHeader';
import sx from './BlogPostPage.styles';
import BlogPostTags from './BlogPostTags';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import ShareButtons from './ShareButtons';

const BlogPostPage = ({
  blogPost,
  blogPostVideo,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata blogPost={blogPost} blogPostVideo={blogPostVideo} />
      <SiteHeader />
      <Container maxWidth={false} sx={sx.blogPostPageContainer}>
        <BlogPostHeader blogPost={blogPost} />
        <Box sx={sx.contentContainer}>
          <BlogPostContent blogPost={blogPost} />
        </Box>
        <Box sx={sx.tagsContainer}>
          <BlogPostTags blogPost={blogPost} />
        </Box>
        <Box sx={sx.shareButtonsContainer}>
          <ShareButtons />
        </Box>
      </Container>
    </>
  );
};

export default BlogPostPage;
