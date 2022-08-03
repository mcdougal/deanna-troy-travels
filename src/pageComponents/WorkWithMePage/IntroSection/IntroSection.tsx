import Download from '@mui/icons-material/Download';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

import { SectionContainer, SectionTitle } from '@components/common';

import sx from './IntroSection.styles';

const IntroSection = (): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Hi!</SectionTitle>
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
          endIcon={<Download fontSize="small" />}
          href="https://www.canva.com/design/DAFC8WJcrUQ/KCXr38E-PosgRiECPzH-yQ/view?utm_content=DAFC8WJcrUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          size="large"
          target="_blank"
          variant="contained">
          Media Kit
        </Button>
      </Box>
    </SectionContainer>
  );
};

export default IntroSection;
