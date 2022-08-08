import { Box } from '@mui/material';

import { SiteHeader } from '@components/common';

import sx from './AboutPage.styles';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import PageMetadata from './PageMetadata';
import SocialSection from './SocialSection';

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Box sx={sx.heroSectionContainer}>
        <HeroSection />
      </Box>
      <Box sx={sx.socialSectionContainer}>
        <SocialSection />
      </Box>
      <Box sx={sx.contactSectionContainer}>
        <ContactSection />
      </Box>
    </>
  );
};

export default AboutPage;