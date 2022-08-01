import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteHeader } from '@components/common';

import BlogFeaturesSection from './BlogFeaturesSection';
import getStaticProps from './getStaticProps';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import sx from './WorkWithMePage.styles';

const WorkWithMePage = ({
  blogFeatures,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <SiteHeader />
      <Box sx={sx.heroSectionContainer}>
        <HeroSection />
      </Box>
      <Box sx={sx.introSectionContainer}>
        <IntroSection />
      </Box>
      <Box sx={sx.blogFeaturesSectionContainer}>
        <BlogFeaturesSection blogFeatures={blogFeatures} />
      </Box>
    </>
  );
};

export { getStaticProps };

export default WorkWithMePage;
