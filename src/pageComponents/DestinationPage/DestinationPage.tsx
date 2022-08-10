import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

import BlogPostsSection from './BlogPostsSection';
import sx from './DestinationPage.styles';
import FeaturedPost from './FeaturedPost';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import RecentVideosSection from './RecentVideosSection';

const DestinationPage = ({
  destination,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const blogPosts = destination.linkedFrom.blogPostCollection.items;

  return (
    <>
      <PageMetadata destination={destination} />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          <Box sx={sx.titlePrimary}>{destination.name}</Box>
        </Typography>
        <Box sx={sx.featuredPostContainer}>
          <FeaturedPost blogPost={blogPosts[0]} />
        </Box>
        <Box sx={sx.recentVideosContainer}>
          <RecentVideosSection recentVideos={recentVideos} />
        </Box>
        <Box sx={sx.blogPostsSectionContainer}>
          <BlogPostsSection
            blogPosts={blogPosts.slice(1)}
            destination={destination}
          />
        </Box>
      </Container>
    </>
  );
};

export default DestinationPage;
