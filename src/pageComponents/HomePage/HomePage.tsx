import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { SiteHeader } from '@components/common';

import FeaturedPosts from './FeaturedPostsSection';
import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import sx from './HomePage.styles';
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
      <Box sx={sx.heroImageContainer}>
        <Image
          alt="Three photos: Deanna lying on a sand dune, Deanna doing a yoga pose on a beach, and Deanna in front of a mosque in Malaysia"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          src="/deanna-troy-travels/home/hero-mobile.png"
        />
      </Box>
      <Box sx={sx.featuredVideosContainer}>
        <FeaturedVideosSection recentVideos={recentVideos} />
      </Box>
      <Box sx={sx.workWithMeContainer}>
        <WorkWithMeSection />
      </Box>
      <Box sx={sx.featuredPostsContainer}>
        <FeaturedPosts recentBlogPosts={recentBlogPosts} />
      </Box>
    </>
  );
};

export default HomePage;
