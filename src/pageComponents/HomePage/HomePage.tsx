import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { SiteHeader } from '@components/common';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import sx from './HomePage.styles';
import LogoAndTitle from './LogoAndTitle';
import WorkWithMeSection from './WorkWithMeSection';

const PAGE_TITLE = `Budget Travel Vlog | Deanna Troy Travels`;
const PAGE_DESCRIPTION = `Travel videos from a backpacker who spent two years traveling around Asia! Japan, Vietnam, Malaysia and more! Deanna Troy Travels`;

const HomePage = ({
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta key="description" content={PAGE_DESCRIPTION} name="description" />
        <meta key="og:title" content={PAGE_TITLE} property="og:title" />
      </Head>
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
    </>
  );
};

export default HomePage;
