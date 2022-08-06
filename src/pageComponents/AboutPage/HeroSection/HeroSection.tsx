import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './HeroSection.styles';

const HeroSection = (): JSX.Element => {
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
          src="/upload/deanna-troy-travels/about/hero.jpg"
        />
      </Box>
      <Typography component="h1" sx={sx.title} variant="h2">
        Hello!
      </Typography>
      <Typography paragraph sx={sx.firstParagraph} variant="h5">
        Deanna Troy Travels started in 2016 during a two year long backpacking
        adventure. From 2016 to 2018, my now husband and I traveled all over
        Southeast Asia.
      </Typography>
      <Typography paragraph variant="body1">
        During our travels, we visited 12 countries: Thailand, Laos, Cambodia,
        Vietnam, Malaysia, Indonesia, Hong Kong, Singapore, Philippines,
        Australia, Japan and Taiwan.
      </Typography>
      <Typography paragraph variant="body1">
        As a travel video creator, I’ve worked on videos with various travel
        companies such as SafetyWing, GoAsiaDayTrip, Amerii and Travello, and
        I’ve starred in three company-made commercials in Asia and Boston. I’m
        also a featured travel video creator on the streaming services RokuTV
        and HideoutTV. This year I was included in FeedSpots Top 100 Solo Female
        Travel Youtube Channels list.
      </Typography>
      <Typography paragraph variant="body1">
        The majority of my videos are currently about Vietnam and Japan. Stay
        tuned for my Malaysia video series coming soon!
      </Typography>
    </Container>
  );
};

export default HeroSection;
