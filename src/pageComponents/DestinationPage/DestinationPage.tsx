import { Box, Button, Container, Grid, Stack } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import {
  BlogPostMediaCard,
  GlobalAboutSection,
  PageTitle,
  SiteFooter,
  SiteHeader,
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

  return (
    <>
      <PageMetadata
        blogPosts={blogPosts}
        destination={destination}
        videos={videos}
      />
      <SiteHeader />
      <Container maxWidth="lg" sx={sx.pageContainer}>
        <PageTitle>{destination?.name ?? `Travel Blog`}</PageTitle>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={sx.filters}>
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
              </Grid>
            </Box>
          )}
          <Box sx={sx.globalAboutSectionContainer}>
            <GlobalAboutSection includeImage={false} variant="short" />
          </Box>
        </Box>
      </Container>
      <SiteFooter />
    </>
  );
};

export default DestinationPage;
