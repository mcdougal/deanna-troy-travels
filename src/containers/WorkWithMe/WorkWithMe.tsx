import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import getStaticProps from './getStaticProps';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import sx from './WorkWithMe.styles';

const WorkWithMe = ({
  assetUrls,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <SiteHeader youtubeLogoUrl={assetUrls.youTubeLogo} />
      <Box sx={sx.heroSectionContainer}>
        <HeroSection assetUrls={assetUrls} />
      </Box>
      <Box sx={sx.introSectionContainer}>
        <IntroSection assetUrls={assetUrls} />
      </Box>
    </>
  );
};

export { getStaticProps };

export default WorkWithMe;
