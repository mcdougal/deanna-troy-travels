import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import { BlogSubscribeDialog, SiteHeader } from '@components/site';

import sx from './BlogPage.styles';
import BlogPostsSection from './BlogPostsSection';
import FeaturedPost from './FeaturedPost';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import SubscribeSection from './SubscribeSection';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const [isBlogSubscribeDialogOpen, setIsBlogSubscribeDialogOpen] =
    useState(false);

  const openBlogSubscribeDialog = (): void => {
    setIsBlogSubscribeDialogOpen(true);
  };

  const closeBlogSubscribeDialog = (): void => {
    setIsBlogSubscribeDialogOpen(false);
  };

  return (
    <>
      <PageMetadata blogPosts={blogPosts} />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          <Box component="span" sx={sx.titlePrimary}>
            Travel
          </Box>
          {` `}
          Blog
        </Typography>
        <Box sx={sx.featuredPostContainer}>
          <FeaturedPost blogPost={blogPosts[0]} />
        </Box>
        <Box sx={sx.blogPostsSectionContainer}>
          <BlogPostsSection blogPosts={blogPosts.slice(1)} />
        </Box>
        <Box sx={sx.subscribeSectionContainer}>
          <SubscribeSection />
        </Box>
      </Container>
      <BlogSubscribeDialog
        onClose={closeBlogSubscribeDialog}
        open={isBlogSubscribeDialogOpen}
      />
    </>
  );
};

export default BlogPage;
