import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { SiteHeader } from '@components/common';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import sx from './HomePage.styles';
import LogoAndTitle from './LogoAndTitle';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <SiteHeader hideLogoUntilScroll />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle />
      </Box>
      <Box sx={sx.heroImageContainer}>
        <Image
          alt="Deanna Troy Travels logo"
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
    </>
  );
};

export { getStaticProps };

export default HomePage;
