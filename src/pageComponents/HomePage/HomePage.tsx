import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import sx from './HomePage.styles';
import InstagramSection from './InstagramSection';
import LatestPostsSection from './LatestPostsSection';
import LogoAndTitle from './LogoAndTitle';
import PageMetadata from './PageMetadata';
import SubscribeSection from './SubscribeSection';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  recentBlogPosts,
  recentInstagramPosts,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata recentVideos={recentVideos} />
      <SiteHeader hideLogoUntilScroll />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle />
      </Box>
      <Box sx={sx.featuredVideosContainer}>
        <FeaturedVideosSection recentVideos={recentVideos} />
      </Box>
      <Box sx={sx.subscribeToBlogContainer}>
        <SubscribeSection />
      </Box>
      <Box sx={sx.instagramContainer}>
        <InstagramSection recentInstagramPosts={recentInstagramPosts} />
      </Box>
      <Box sx={sx.featuredPostsContainer}>
        <LatestPostsSection recentBlogPosts={recentBlogPosts} />
      </Box>
      <Box sx={sx.workWithMeContainer}>
        <WorkWithMeSection />
      </Box>
      <SiteFooter />
    </>
  );
};

export default HomePage;
