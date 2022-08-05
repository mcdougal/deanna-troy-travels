import { Box } from '@mui/material';

import { SiteHeader } from '@components/common';

import sx from './AboutPage.styles';
import HeroSection from './HeroSection';
import PageMetadata from './PageMetadata';

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Box sx={sx.heroSectionContainer}>
        <HeroSection />
      </Box>
    </>
  );
};

export default AboutPage;
