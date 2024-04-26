import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './WorkWithMeSection.styles';

const WorkWithMeSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Work With Me 🤝</SectionTitle>
      </Box>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna eating a dumpling with chopsticks with Asian lanterns in the background"
          layout="fill"
          loader={cloudinaryLoader}
          objectFit="cover"
          objectPosition="center"
          sizes={[
            `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
            `900px`,
          ].join(`,`)}
          src="/upload/deanna-troy-travels/home/work-with-me.png"
        />
      </Box>
      <Typography sx={sx.description} variant="body1">
        Deanna is a travel influencer who creates YouTube content featuring
        budget-friendly and vegan travel experiences in Southeast Asia, the
        U.S.A. and Europe.
      </Typography>
      <Box sx={sx.ctaContainer}>
        <Link href="/work-with-me" legacyBehavior passHref>
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
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
