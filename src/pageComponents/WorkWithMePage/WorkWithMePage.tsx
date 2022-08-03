import { Box } from '@mui/material';
import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { SiteHeader } from '@components/common';

import BlogFeaturesSection from './BlogFeaturesSection';
import getStaticProps from './getStaticProps';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import sx from './WorkWithMePage.styles';

const PAGE_TITLE = `Work With Me | Deanna Troy Travels`;
const PAGE_DESCRIPTION = `Travel videos from a backpacker who spent two years traveling around Asia! Japan, Vietnam, Malaysia and more! Deanna Troy Travels`;

const WorkWithMePage = ({
  blogFeatures,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta key="description" content={PAGE_DESCRIPTION} name="description" />
        <meta key="og:title" content={PAGE_TITLE} property="og:title" />
      </Head>
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
      <form action="/success" data-netlify="true" method="POST" name="contact">
        <p>
          <label>
            Your Name: <input name="name" type="text" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input name="email" type="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
};

export default WorkWithMePage;
