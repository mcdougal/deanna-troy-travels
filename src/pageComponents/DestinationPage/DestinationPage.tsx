import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import BlogPostsSection from './BlogPostsSection';
import sx from './DestinationPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import VideosSection from './VideosSection';

const DestinationPage = ({
  destination,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const blogPosts = destination.linkedFrom.blogPostCollection.items;

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  });

  return (
    <>
      <PageMetadata destination={destination} videos={videos} />
      <SiteHeader />
      <Container maxWidth="md" sx={sx.pageContainer}>
        <Typography component="h1" sx={sx.title} variant="h2">
          {destination.name}
        </Typography>
        {sortedBlogPosts.length > 0 && (
          <Box sx={sx.blogPostsSectionContainer}>
            <BlogPostsSection
              blogPosts={sortedBlogPosts}
              destination={destination}
            />
          </Box>
        )}
        {videos.length > 0 && (
          <Box sx={sx.recentVideosContainer}>
            <VideosSection recentVideos={videos} />
          </Box>
        )}
      </Container>
      <SiteFooter />
    </>
  );
};

export default DestinationPage;
