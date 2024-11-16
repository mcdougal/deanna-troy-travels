import { Box, Container, Grid, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { MediaCard } from '@components/generic';
import {
  GlobalAboutSection,
  PageTitle,
  SiteFooter,
  SiteHeader,
} from '@components/site';
import { contentfulLoader } from '@lib/contentful';

import sx from './DestinationsPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const DestinationsPage = ({
  destinations,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Container maxWidth="lg">
        <PageTitle>Destinations</PageTitle>
        <Typography component="p" sx={sx.subtitle} variant="h4">
          Where do you want to go?
        </Typography>
        <Box>
          <Grid alignItems="stretch" container spacing={3}>
            {destinations.map((destination) => {
              return (
                <Grid key={destination.name} item md={4} sm={6} xs={12}>
                  <MediaCard
                    thumbnail={{
                      alt: destination.thumbnail.description,
                      loader: contentfulLoader,
                      url: destination.thumbnail.url,
                    }}
                    title={destination.name}
                    url={`/${destination.slug}`}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md" sx={sx.aboutFooter}>
        <GlobalAboutSection />
      </Container>
      <SiteFooter />
    </>
  );
};

export default DestinationsPage;
