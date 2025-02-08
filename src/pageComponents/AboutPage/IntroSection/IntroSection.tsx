import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { PageTitle } from '@components/site';
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
      <PageTitle>Hey There!</PageTitle>
      <Typography paragraph variant="body1">
        Welcome to Deanna Troy Travels, your go-to guide for vegan and budget
        travel adventures! Since 2016, I’ve been uncovering hidden gems, vibrant
        local life and unforgettable cultures across 22 countries — from
        Vietnam’s bustling streets to Japan’s serene temples — and now, I’m
        sharing them with you!
      </Typography>
      <Typography paragraph variant="body1">
        Join me for travel tips, insider stories and a quirky perspective on
        exploring the world while keeping it budget-friendly and plant-powered.
        Let’s inspire each other to see more, spend less and experience the joy
        of travel! 🌍
      </Typography>
    </Container>
  );
};

export default IntroSection;
