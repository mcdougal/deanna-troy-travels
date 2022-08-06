import { Box } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './HeroImage.styles';

const HeroImage = (): JSX.Element => {
  return (
    <Box sx={sx.heroSectionContainer}>
      <Box sx={sx.circleAndImageContainer}>
        <Box sx={sx.circleBackground} />
        <Box sx={sx.heroImageContainer}>
          <Image
            alt="Three photos: Deanna lying on a sand dune, Deanna doing a yoga pose on a beach, and Deanna in front of a mosque in Malaysia"
            layout="fill"
            loader={cloudinaryLoader}
            objectFit="cover"
            objectPosition="top"
            priority
            src="/upload/deanna-troy-travels/home/hero.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroImage;
