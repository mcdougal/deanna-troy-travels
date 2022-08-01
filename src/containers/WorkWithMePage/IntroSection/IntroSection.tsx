import { Download } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { SectionContainer, SectionTitle } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import { AssetUrls } from '../getStaticProps';

import sx from './IntroSection.styles';

interface Props {
  assetUrls: AssetUrls;
}

const IntroSection = ({ assetUrls }: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Hi!</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <ContentfulImage
          alt="Deanna posing with a quokka"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          src={assetUrls.workWithMeIntro}
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
