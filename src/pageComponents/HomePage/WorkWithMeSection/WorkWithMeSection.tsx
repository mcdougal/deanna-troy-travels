import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { SectionCta, SectionTitle } from '@components/site';
import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './WorkWithMeSection.styles';

const WorkWithMeSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Work With Me</SectionTitle>
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
        I’m a travel influencer who creates content featuring budget-friendly
        and vegan travel experiences in Southeast Asia, the U.S. and Europe. I
        can provide YouTube videos, Instagram posts, Amazon videos, and more!
      </Typography>
      <Box sx={sx.ctaContainer}>
        <Link href="/work-with-me" legacyBehavior passHref>
          <SectionCta>Learn More</SectionCta>
        </Link>
      </Box>
    </Container>
  );
};

export default WorkWithMeSection;
