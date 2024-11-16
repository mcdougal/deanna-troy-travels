import { Box } from '@mui/material';
import { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import sx from './AboutPage.styles';
import ContactSection from './ContactSection';
import getStaticProps from './getStaticProps';
import IntroSection from './IntroSection';
import PageMetadata from './PageMetadata';
import SocialSection from './SocialSection';
import TravelStatsSection from './TravelStatsSection';

const AboutPage = ({
  blogPostsCount,
  videosCount,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Box sx={sx.introSectionContainer}>
        <IntroSection />
      </Box>
      <Box sx={sx.travelStatsSectionContainer}>
        <TravelStatsSection
          blogPostsCount={blogPostsCount}
          videosCount={videosCount}
        />
      </Box>
      <Box sx={sx.socialSectionContainer}>
        <SocialSection />
      </Box>
      <Box sx={sx.contactSectionContainer}>
        <ContactSection />
      </Box>
      <SiteFooter />
    </>
  );
};

export default AboutPage;
