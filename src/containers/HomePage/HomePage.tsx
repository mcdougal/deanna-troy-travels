import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import FeaturedVideosSection from './FeaturedVideosSection';
import getStaticProps from './getStaticProps';
import sx from './HomePage.styles';
import LogoAndTitle from './LogoAndTitle';
import WorkWithMeSection from './WorkWithMeSection';

const HomePage = ({
  assetUrls,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <SiteHeader hideLogoUntilScroll />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle assetUrls={assetUrls} />
      </Box>
      <Box sx={sx.heroImageContainer}>
        <ContentfulImage
          alt="Deanna Troy Travels"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          src={assetUrls.heroImageMobile}
        />
      </Box>
      <Box sx={sx.featuredVideosContainer}>
        <FeaturedVideosSection recentVideos={recentVideos} />
      </Box>
      <Box sx={sx.workWithMeContainer}>
        <WorkWithMeSection assetUrls={assetUrls} />
      </Box>
    </>
  );
};

export { getStaticProps };

export default HomePage;
