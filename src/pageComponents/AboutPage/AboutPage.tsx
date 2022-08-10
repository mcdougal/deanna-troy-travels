import { Box } from '@mui/material';

import { SiteHeader } from '@components/site';

import sx from './AboutPage.styles';
import ContactSection from './ContactSection';
import IntroSection from './IntroSection';
import PageMetadata from './PageMetadata';
import SocialSection from './SocialSection';

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Box sx={sx.introSectionContainer}>
        <IntroSection />
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
