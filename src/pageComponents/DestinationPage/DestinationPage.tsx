import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import {
  BlogPostMediaCard,
  BlogSubscribeContainer,
  BlogSubscribeForm,
  DestinationsSection,
  GlobalAboutSection,
  PageTitle,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  VideoMediaCard,
} from '@components/site';

import sx from './DestinationPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const DestinationPage = ({
  blogPosts,
  destination,
  destinations,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  });

  const blogPostVideoIdsSet = new Set(
    blogPosts.map((blogPost) => {
      return blogPost.youTubeVideoId;
    }),
  );

  const videosWithoutBlogPosts = videos.filter((video) => {
    return !blogPostVideoIdsSet.has(video.videoId);
  });

  return (
    <>
      <PageMetadata
        blogPosts={blogPosts}
        destination={destination}
        videos={videos}
      />
      <SiteHeader />
      <Container maxWidth="lg">
        <PageTitle>{destination?.name ?? `Travel Blog`}</PageTitle>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{
            ...sx.filtersHeader,
            display: { xs: destination ? `none` : `flex`, sm: `flex` },
          }}>
          <Link href="/blog" passHref>
            <Button color="inherit" size="small" variant="text">
              All
            </Button>
          </Link>
          {destinations.map((d) => {
            return (
              <Link key={d.slug} href={`/${d.slug}`} passHref>
                <Button color="inherit" size="small" variant="text">
                  {d.name}
                </Button>
              </Link>
            );
          })}
        </Stack>
        <Box sx={sx.content}>
          {sortedBlogPosts.length > 0 && (
            <Box>
              <Grid
                alignItems="start"
                columnSpacing={4}
                container
                rowSpacing={7}>
                {blogPosts.map((blogPost) => {
                  return (
                    <Grid
                      key={blogPost.slug}
                      item
                      sm={destination ? 12 : 6}
                      xs={12}>
                      <BlogPostMediaCard blogPost={blogPost} size="lg" />
                    </Grid>
                  );
                })}
                {videosWithoutBlogPosts.map((video) => {
                  return (
                    <Grid
                      key={video.videoId}
                      item
                      sm={destination ? 12 : 6}
                      xs={12}>
                      <VideoMediaCard size="lg" video={video} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
          <Box sx={sx.globalAboutSectionContainer}>
            <GlobalAboutSection variant="narrow" />
          </Box>
        </Box>
        <Box sx={sx.destinationsSection}>
          <DestinationsSection destinations={destinations} />
        </Box>
      </Container>
      <Container component="section" maxWidth="md" sx={sx.subscribeSection}>
        <BlogSubscribeContainer>
          <Box sx={sx.subscribeSectionTitleContainer}>
            <SectionTitle>Your Next Adventure Awaits!</SectionTitle>
          </Box>
          <Box sx={sx.subscribeFormContainer}>
            <Typography
              align="center"
              sx={sx.subscribeFormSubtitle}
              variant="subtitle1">
              Let’s explore together — subscribe for travel tips, hidden gems
              and inspiring stories to fuel your next adventure!
            </Typography>
            <BlogSubscribeForm />
          </Box>
        </BlogSubscribeContainer>
      </Container>
      <SiteFooter />
    </>
  );
};

export default DestinationPage;
