import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';

import { SectionTitle } from '@components/common';

import sx from './IntroSection.styles';

const IntroSection = (): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>👋 Hey there!</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna posing with a quokka"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src="/deanna-troy-travels/work-with-me/hello.png"
        />
      </Box>
      <Typography paragraph variant="body1">
        I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
        ranging from travel vlogs, travel advice, story-times and more!
      </Typography>
      <Typography variant="body1">
        I focus on long-term backpacking, living abroad in Vietnam and Southeast
        Asian travel. Using funny, serious and enlightening content, I showcase
        different cultures while inspiring others to explore the world!
      </Typography>
      <Box sx={sx.ctaContainer}>
        <Button
          color="primary"
          endIcon={<OpenInNewIcon />}
          href="https://www.canva.com/design/DAFC8WJcrUQ/KCXr38E-PosgRiECPzH-yQ/view?utm_content=DAFC8WJcrUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          size="large"
          sx={sx.ctaButton}
          target="_blank"
          variant="contained">
          Media Kit
        </Button>
      </Box>
    </Container>
  );
};

export default IntroSection;
