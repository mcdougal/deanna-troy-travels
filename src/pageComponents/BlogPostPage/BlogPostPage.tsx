import { Box, Container } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import BlogPostContent from './BlogPostContent';
import BlogPostHeader from './BlogPostHeader';
import sx from './BlogPostPage.styles';
import BlogPostTags from './BlogPostTags';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import RelatedPostsSection from './RelatedPostsSection';
import ShareButtons from './ShareButtons';
import SubscribeSection from './SubscribeSection';

const BlogPostPage = ({
  blogPost,
  blogPostVideo,
  relatedBlogPosts,
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
        <Box sx={sx.subscribeSectionContainer}>
          <SubscribeSection />
        </Box>
        <Box sx={sx.relatedPostsSectionContainer}>
          <RelatedPostsSection relatedBlogPosts={relatedBlogPosts} />
        </Box>
      </Container>
      <SiteFooter />
    </>
  );
};

export default BlogPostPage;
