import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import FeaturedVideos from './FeaturedVideos';
import getStaticProps from './getStaticProps';
import sx from './HomePage.sx';
import LogoAndTitle from './LogoAndTitle';

const HomePage = ({
  assetUrls,
  recentVideos,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <SiteHeader />
      <Box sx={sx.logoAndTitleContainer}>
        <LogoAndTitle assetUrls={assetUrls} />
      </Box>
      <Box sx={sx.heroImageContainer}>
        <ContentfulImage
          alt="Deanna Troy Travels"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={assetUrls.heroImageMobile}
        />
      </Box>
      <Box sx={sx.featuredVideosContainer}>
        <FeaturedVideos />
      </Box>
    </>
  );
};

export { getStaticProps };

export default HomePage;
