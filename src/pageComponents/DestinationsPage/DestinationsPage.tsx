import { Box, Container, Grid, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { MediaCard } from '@components/generic';
import { SiteHeader } from '@components/site';
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
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          Destinations
        </Typography>
        <Typography component="p" sx={sx.subtitle} variant="h4">
          Where do you want to go?
        </Typography>
        <Box sx={sx.destinationsContainer}>
          <Grid alignItems="stretch" container spacing={3}>
            {destinations.map((destination) => {
              return (
                <Grid key={destination.name} item sm={6} xs={12}>
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
    </>
  );
};

export default DestinationsPage;
