import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './HeroSection.styles';

const AS_SEEN_ON_GLOBE_WIDTH = 70;
const AS_SEEN_ON_GLOBE_RATIO = 1.0964;

const HeroSection = (): JSX.Element => {
  const theme = useTheme();

  const asSeenOnGlobeWidth = parseInt(
    theme.spacing(AS_SEEN_ON_GLOBE_WIDTH).replace(/px$/, ``),
    10,
  );

  const asSeenOnGlobeHeight = asSeenOnGlobeWidth / AS_SEEN_ON_GLOBE_RATIO;

  return (
    <Container maxWidth="md" sx={sx.heroSectionContainer}>
      <Typography component="h1" sx={sx.title} variant="h2">
        <Box component="span" sx={sx.titlePrimary}>
          Work With
        </Box>
        {` `}
        Me
      </Typography>
      <Box sx={sx.imageSection}>
        <Box sx={sx.imageContainer}>
          <Image
            alt="A globe surrounded by company logos that Deanna has worked with"
            height={asSeenOnGlobeHeight}
            layout="intrinsic"
            loader={cloudinaryLoader}
            priority
            src="/upload/deanna-troy-travels/work-with-me/as-seen-on-globe.jpg"
            width={asSeenOnGlobeWidth}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
