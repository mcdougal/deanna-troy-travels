import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
        <SectionTitle>Hey there! 👋</SectionTitle>
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
          <SectionTitle variant="h4">Hey there! 👋</SectionTitle>
        </Box>
        <Typography component="p" paragraph sx={sx.firstParagraph} variant="h5">
          I am a fun, outgoing and quirky Travel YouTuber. I produce travel
          videos ranging from travel vlogs, travel advice, story-times and more!
        </Typography>
        <Typography variant="body1">
          I focus on long-term backpacking, living abroad in Vietnam and
          Southeast Asian travel. Using funny, serious and enlightening content,
          I showcase different cultures while inspiring others to explore the
          world!
        </Typography>
        <Box sx={sx.ctaContainer}>
          <Button
            color="primary"
            endIcon={<OpenInNewIcon />}
            href="https://www.canva.com/design/DAF7iYLoQQ8/NzsH1KR4NGMalI3KvLCBhw/view"
            size="large"
            sx={sx.ctaButton}
            target="_blank"
            variant="contained">
            Resume
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default IntroSection;
