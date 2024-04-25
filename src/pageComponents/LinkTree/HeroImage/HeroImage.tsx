import { Box, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './HeroImage.styles';

const HeroImage = (): JSX.Element => {
  const theme = useTheme();

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
            sizes={[
              `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
              `800px`,
            ].join(`,`)}
            src="/upload/deanna-troy-travels/home/hero.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroImage;
