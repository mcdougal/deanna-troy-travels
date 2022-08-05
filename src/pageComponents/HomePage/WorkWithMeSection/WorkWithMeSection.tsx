import ArrowForward from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { SectionTitle } from '@components/common';

import sx from './WorkWithMeSection.styles';

const WorkWithMeSection = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Work With Me</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna eating a dumpling with chopsticks with Asian lanterns in the background"
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
        <Link href="/work-with-me" passHref>
          <Button
            color="primary"
            endIcon={<ArrowForward fontSize="small" />}
            size="large"
            variant="contained">
            Learn More
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default WorkWithMeSection;
