import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';

import { SiteFooter, SiteHeader } from '@components/site';

import BlogFeaturesSection from './BlogFeaturesSection';
import ContactSection from './ContactSection';
import DoForYouSection from './DoForYouSection';
import getStaticProps from './getStaticProps';
import IntroSection from './IntroSection';
import PageMetadata from './PageMetadata';
import TestimonialsSection from './TestimonialsSection';
import TitleSection from './TitleSection';
import sx from './WorkWithMePage.styles';

const WorkWithMePage = ({
  blogFeatures,
  miscellaneous,
  testimonials,
  workExamples,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <PageMetadata miscellaneous={miscellaneous} />
      <SiteHeader miscellaneous={miscellaneous} />
      <Box sx={sx.titleSectionContainer}>
        <TitleSection miscellaneous={miscellaneous} />
      </Box>
      <Box sx={sx.introSectionContainer}>
        <IntroSection miscellaneous={miscellaneous} />
      </Box>
      <Box sx={sx.doForYouSectionContainer}>
        <DoForYouSection
          miscellaneous={miscellaneous}
          workExamples={workExamples}
        />
      </Box>
      <Box sx={sx.testimonialsSectionContainer}>
        <TestimonialsSection
          miscellaneous={miscellaneous}
          testimonials={testimonials}
        />
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
