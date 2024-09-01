import { Box, Container, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './WorkedWithSection.styles';

const AS_SEEN_ON_GLOBE_WIDTH = 70;
const AS_SEEN_ON_GLOBE_RATIO = 1.0964;

const WorkedWithSection = (): JSX.Element => {
  const theme = useTheme();

  const asSeenOnGlobeWidth = parseInt(
    theme.spacing(AS_SEEN_ON_GLOBE_WIDTH).replace(/px$/, ``),
    10,
  );

  const asSeenOnGlobeHeight = asSeenOnGlobeWidth / AS_SEEN_ON_GLOBE_RATIO;

  return (
    <>
      <Container component="section" maxWidth="md">
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle>Past Partners</SectionTitle>
        </Box>
        <Box sx={sx.imageSection}>
          <Box sx={sx.imageContainer}>
            <Image
              alt="A globe surrounded by company logos that Deanna has worked with"
              height={asSeenOnGlobeHeight}
              layout="intrinsic"
              loader={cloudinaryLoader}
              priority
              src="/upload/deanna-troy-travels/work-with-me/as-seen-on-globe-2024-09-01.png"
              width={asSeenOnGlobeWidth}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WorkedWithSection;
