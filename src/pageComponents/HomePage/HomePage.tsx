import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import HeroImage from './HeroImage';
import sx from './HomePage.styles';
import LatestPostsSection from './LatestPostsSection';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  recentBlogPosts,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader hideLogoUntilScroll />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle />
      </Box>
      <Box>
        <HeroImage />
      </Box>
      <Box sx={sx.featuredVideosContainer}>
        <FeaturedVideosSection recentVideos={recentVideos} />
      </Box>
      <Box sx={sx.workWithMeContainer}>
        <WorkWithMeSection />
      </Box>
      <Box sx={sx.featuredPostsContainer}>
        <LatestPostsSection recentBlogPosts={recentBlogPosts} />
      </Box>
    </>
  );
};

export default HomePage;
