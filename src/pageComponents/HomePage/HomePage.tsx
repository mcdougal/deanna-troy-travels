import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import AboutSection from './AboutSection';
import getStaticProps from './getStaticProps';
import Hero from './Hero';
import sx from './HomePage.styles';
import LatestPostsSection from './LatestPostsSection';
import PageMetadata from './PageMetadata';
import SubscribeSection from './SubscribeSection';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  recentBlogPosts,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata recentVideos={recentVideos} />
      <SiteHeader />
      <Hero />
      <Box sx={sx.topSection}>
        <LatestPostsSection recentBlogPosts={recentBlogPosts} />
      </Box>
      <Box sx={sx.section}>
        <SubscribeSection />
      </Box>
      <Box sx={sx.section}>
        <AboutSection />
      </Box>
      <Box sx={sx.bottomSection}>
        <WorkWithMeSection />
      </Box>
      <SiteFooter />
    </>
  );
};

export default HomePage;
