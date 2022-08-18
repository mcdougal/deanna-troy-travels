import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

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
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <>
      <PageMetadata destination={destination} />
      <SiteHeader />
      <Container maxWidth="md" sx={sx.pageContainer}>
        <Typography component="h1" sx={sx.title} variant="h2">
          {destination.name}
        </Typography>
        {featuredPost && (
          <Box sx={sx.featuredPostContainer}>
            <FeaturedPost blogPost={featuredPost} />
          </Box>
        )}
        {otherPosts.length > 0 && (
          <Box sx={sx.blogPostsSectionContainer}>
            <BlogPostsSection
              blogPosts={otherPosts}
              destination={destination}
            />
          </Box>
        )}
        {recentVideos.length > 0 && (
          <Box sx={sx.recentVideosContainer}>
            <RecentVideosSection recentVideos={recentVideos} />
          </Box>
        )}
      </Container>
      <SiteFooter />
    </>
  );
};

export default DestinationPage;
