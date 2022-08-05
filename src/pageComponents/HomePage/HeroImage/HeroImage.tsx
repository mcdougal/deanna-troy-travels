import { Box } from '@mui/material';
import Image from 'next/image';

import sx from './HeroImage.styles';

const HeroImage = (): JSX.Element => {
  const emojis = [`😎`, `✈️`, `🏝️`, `⛰️`, `🏖️`, `🗽`, `⛴️`];

  return (
    <Box sx={sx.heroSectionContainer}>
      <Box sx={sx.circleAndImageContainer}>
        <Box sx={sx.circleBackground} />
        <Box sx={sx.heroImageContainer}>
          <Image
            alt="Three photos: Deanna lying on a sand dune, Deanna doing a yoga pose on a beach, and Deanna in front of a mosque in Malaysia"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
            src="/deanna-troy-travels/home/hero.png"
          />
        </Box>
      </Box>
      {emojis.map((emoji, i) => {
        return (
          <Box key={emoji} sx={[sx.emoji, sx[`emoji${i + 1}`]]}>
            {emoji}
          </Box>
        );
      })}
    </Box>
  );
};

export default HeroImage;
