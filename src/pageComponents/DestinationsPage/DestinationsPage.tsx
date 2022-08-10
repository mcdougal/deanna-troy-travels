import { Box, Container, Grid, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

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
        <Box>
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
