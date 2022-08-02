import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { SectionContainer, SectionTitle } from '@components/common';

import sx from './WorkWithMeSection.styles';

const WorkWithMeSection = (): JSX.Element => {
  return (
    <SectionContainer>
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Work With Me</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna Troy Travels"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/deanna-troy-travels/home/work-with-me.png"
        />
      </Box>
      <Typography variant="body1">
        I am a fun, outgoing and quirky Travel YouTuber. I produce travel videos
        ranging from travel vlogs, travel advice, story-times and more!
      </Typography>
      <Box sx={sx.ctaContainer}>
        <Link href="/work-with-me">
          <Button
            color="primary"
            endIcon={<ArrowForward fontSize="small" />}
            size="large"
            variant="contained">
            Learn More
          </Button>
        </Link>
      </Box>
    </SectionContainer>
  );
};

export default WorkWithMeSection;