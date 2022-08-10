import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { SiteHeader } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './DestinationsPage.styles';
import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';

const DestinationsPage = ({
  destinations,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const theme = useTheme();

  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Container maxWidth="md">
        <Typography component="h1" sx={sx.title} variant="h2">
          Destinations
        </Typography>
        <Box sx={sx.destinationsSectionContainer}>
          <Grid alignItems="stretch" container spacing={3}>
            {destinations.map((destination) => {
              return (
                <Grid key={destination.name} item md={4} sm={6} xs={12}>
                  {destination.name}
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
