import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

import sx from './BlogPage.styles';
import BlogPostsSection from './BlogPostsSection';
import FeaturedPost from './FeaturedPost';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const BlogPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata blogPosts={blogPosts} />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          <Box sx={sx.titlePrimary}>Travel</Box> Blog
        </Typography>
        <Box sx={sx.featuredPostContainer}>
          <FeaturedPost blogPost={blogPosts[0]} />
        </Box>
        <Box sx={sx.blogPostsSectionContainer}>
          <BlogPostsSection blogPosts={blogPosts.slice(1)} />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
