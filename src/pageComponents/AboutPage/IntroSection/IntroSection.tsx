import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './IntroSection.styles';

const IntroSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box sx={sx.heroImageContainer}>
        <Image
          alt="Deanna copying a statue with many arms by hiding people behind her with their arms out"
          layout="fill"
          loader={cloudinaryLoader}
          objectFit="cover"
          objectPosition="center"
          priority
          sizes={[
            `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
            `900px`,
          ].join(`,`)}
          src="/upload/deanna-troy-travels/about/hero.jpg"
        />
      </Box>
      <Typography component="h1" sx={sx.title} variant="h2">
        Hey there! 👋
      </Typography>
      <Typography component="p" paragraph sx={sx.firstParagraph} variant="h5">
        Deanna Troy Travels started in 2016 during a two year long backpacking
        adventure. From 2016 to 2018, my husband and I traveled all over
        Southeast Asia.
      </Typography>
      <Typography paragraph variant="body1">
        During our travels, we visited 12 countries: Thailand, Laos, Cambodia,
        Vietnam, Malaysia, Indonesia, Hong Kong, Singapore, Philippines,
        Australia, Japan and Taiwan.
      </Typography>
      <Typography paragraph variant="body1">
        I am a fun, outgoing and quirky travel content creator. I focus on vegan
        and budget travel in Southeast Asia and Europe. In my videos series I
        give insight into local life and showcase different cultures around the
        world while inspiring others to explore! I’d love to have you join me
        and my husband, Cedric, on our journeys worldwide! Find my socials
        below!
      </Typography>
    </Container>
  );
};

export default IntroSection;
