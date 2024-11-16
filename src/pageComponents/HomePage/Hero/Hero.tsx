import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './Hero.styles';

const Hero = (): JSX.Element => {
  return (
    <Box sx={sx.container}>
      <Box sx={sx.imageContainer}>
        <Image
          alt="Deanna walking down a beach holding a coconut"
          fill
          loader={cloudinaryLoader}
          src="/upload/deanna-troy-travels/home/hero2.jpg"
          style={{ objectFit: `cover` }}
        />
      </Box>
      <Box sx={sx.content}>
        <Typography align="center" component="h1" sx={sx.title} variant="h1">
          Deanna Troy Travels
        </Typography>
        <Typography sx={sx.subtitle} variant="body1">
          Budget & Vegan Travel
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
