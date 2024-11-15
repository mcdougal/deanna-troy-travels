import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { SiteFooter, SiteHeader } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import AboutSection from './AboutSection';
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
      <SiteHeader />
      <Box sx={sx.logoAndTitleContainer}>
        <Box sx={sx.logoBackground}>
          <Image
            alt="Hero image"
            fill
            loader={cloudinaryLoader}
            src="/upload/deanna-troy-travels/home/hero2.jpg"
            style={{ objectFit: `cover` }}
          />
        </Box>
        <Box sx={sx.logoAndTitle}>
          <LogoAndTitle />
        </Box>
      </Box>
      <Box sx={sx.topSection}>
        <LatestPostsSection recentBlogPosts={recentBlogPosts} />
      </Box>
      <Box sx={sx.section}>
        <SubscribeSection />
      </Box>
      <Box sx={sx.section}>
        <AboutSection />
      </Box>
      <Box sx={sx.section}>
        <InstagramSection recentInstagramPosts={recentInstagramPosts} />
      </Box>
      <Box sx={sx.bottomSection}>
        <WorkWithMeSection />
      </Box>
      <SiteFooter />
    </>
  );
};

export default HomePage;
