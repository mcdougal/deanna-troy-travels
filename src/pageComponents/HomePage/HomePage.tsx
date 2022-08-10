import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/site';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import HeroImage from './HeroImage';
import sx from './HomePage.styles';
import InstagramSection from './InstagramSection';
import LatestPostsSection from './LatestPostsSection';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  recentBlogPosts,
  recentInstagramPosts,
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
      <Box sx={sx.instagramContainer}>
        <InstagramSection recentInstagramPosts={recentInstagramPosts} />
      </Box>
      <Box sx={sx.featuredPostsContainer}>
        <LatestPostsSection recentBlogPosts={recentBlogPosts} />
      </Box>
    </>
  );
};

export default HomePage;
