import { Box, Container, Typography } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import getStaticProps from './getStaticProps';
import PageMetadata from './PageMetadata';
import sx from './VideosPage.styles';
import VideosSection from './VideosSection';

const VideosPage = ({
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata videos={videos} />
      <SiteHeader />
      <Container maxWidth="md" sx={sx.pageContainer}>
        <Typography component="h1" sx={sx.title} variant="h2">
          <Box component="span" sx={sx.titlePrimary}>
            Travel
          </Box>
          {` `}
          Videos
        </Typography>
        <VideosSection videos={videos} />
      </Container>
      <SiteFooter />
    </>
  );
};

export default VideosPage;
