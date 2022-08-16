import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import BlogFeaturesSection from './BlogFeaturesSection';
import ContactSection from './ContactSection';
import getStaticProps from './getStaticProps';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import PageMetadata from './PageMetadata';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import sx from './WorkWithMePage.styles';

const WorkWithMePage = ({
  blogFeatures,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata />
      <SiteHeader />
      <Box sx={sx.heroSectionContainer}>
        <HeroSection />
      </Box>
      <Box sx={sx.introSectionContainer}>
        <IntroSection />
      </Box>
      <Box sx={sx.servicesSectionContainer}>
        <ServicesSection />
      </Box>
      <Box sx={sx.testimonialsSectionContainer}>
        <TestimonialsSection />
      </Box>
      <Box sx={sx.blogFeaturesSectionContainer}>
        <BlogFeaturesSection blogFeatures={blogFeatures} />
      </Box>
      <Box sx={sx.contactSectionContainer}>
        <ContactSection />
      </Box>
      <SiteFooter />
    </>
  );
};

export default WorkWithMePage;
