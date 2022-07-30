import {
  ArrowForward,
  ModeComment,
  PlayArrow,
  ThumbUp,
} from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';

import { MediaCard, SectionContainer, SectionTitle } from '@components/common';
import { ContentfulImage } from '@components/contentful';

import { AssetUrls } from '../types';

import sx from './WorkWithMe.styles';

interface Props {
  assetUrls: AssetUrls;
}

const WorkWithMe = ({ assetUrls }: Props): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Work With Me</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <ContentfulImage
          alt="Deanna Troy Travels"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={assetUrls.workWithMe}
        />
      </Box>
      <Typography variant="body1">
        I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
        ranging from travel vlogs, travel advice, story-times and more!
      </Typography>
      <Box sx={sx.ctaContainer}>
        <Button
          color="primary"
          endIcon={<ArrowForward fontSize="small" />}
          href="https://www.youtube.com/deannatroytravels"
          size="large"
          variant="contained">
          Learn More
        </Button>
      </Box>
    </SectionContainer>
  );
};

export default WorkWithMe;
