import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import sx from './HeroSection.styles';

const AS_SEEN_ON_GLOBE_RATIO = 1.0964;
const AS_SEEN_ON_GLOBE_WIDTH = 640;
const AS_SEEN_ON_GLOBE_HEIGHT = AS_SEEN_ON_GLOBE_WIDTH / AS_SEEN_ON_GLOBE_RATIO;

const HeroSection = (): JSX.Element => {
  return (
    <Container maxWidth="xl" sx={sx.heroSectionContainer}>
      <Typography component="h1" sx={sx.title} variant="h2">
        <Box sx={sx.workWith}>Work With</Box> Me
      </Typography>
      <Image
        alt="A globe surrounded by company logos that Deanna has worked with"
        height={AS_SEEN_ON_GLOBE_HEIGHT}
        layout="responsive"
        priority
        src="/deanna-troy-travels/work-with-me/as-seen-on-globe.jpg"
        width={AS_SEEN_ON_GLOBE_WIDTH}
      />
    </Container>
  );
};

export default HeroSection;
