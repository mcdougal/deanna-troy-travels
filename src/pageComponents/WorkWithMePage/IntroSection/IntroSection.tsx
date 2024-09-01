import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './IntroSection.styles';

const IntroSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="md" sx={sx.introSectionContainer}>
      <Box sx={[sx.sectionTitleContainer, sx.sectionTitleContainerMobile]}>
        <SectionTitle>Let’s Chat! 😃</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna posing with a quokka"
          layout="fill"
          loader={cloudinaryLoader}
          objectFit="cover"
          objectPosition="top"
          sizes={[
            `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
            `300px`,
          ].join(`,`)}
          src="/upload/deanna-troy-travels/work-with-me/hello.png"
        />
      </Box>
      <Box>
        <Box sx={[sx.sectionTitleContainer, sx.sectionTitleContainerDesktop]}>
          <SectionTitle variant="h4">Let’s Chat! 😃</SectionTitle>
        </Box>
        <Typography component="p" paragraph sx={sx.firstParagraph} variant="h5">
          Deanna is a travel influencer who creates YouTube content featuring
          budget-friendly and vegan travel experiences in Southeast Asia, the
          U.S.A. and Europe.
        </Typography>
        <Typography paragraph sx={sx.secondParagraph} variant="body1">
          Deanna is featured on RokuTV, HideoutTV and NaviSavi. She has created
          sponsored content for the electronic companies Vasco and Hohem. She is
          an ideal influencer to promote travel, budget, vegan, or eco-friendly
          products, lodging, or experiences.
        </Typography>
        <Box sx={sx.ctaContainer}>
          <Button
            color="primary"
            href="https://www.canva.com/design/DAGPEesf8x0/_7auoRKDGPCke1vBn0c0TA/view"
            size="large"
            sx={sx.ctaButton}
            target="_blank"
            variant="outlined">
            Résumé
          </Button>
          <Button
            color="primary"
            href="mailto:deanna.troy.henry@gmail.com"
            size="large"
            sx={sx.ctaButton}
            target="_blank"
            variant="contained">
            Email Deanna
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default IntroSection;
