import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import SectionTitle from '../SectionTitle';
import SocialsIcons from '../SocialsIcons';

import sx from './GlobalAboutSection.styles';

type Props = {
  variant?: `full` | `narrow`;
};

const GlobalAboutSection = ({ variant = `full` }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={sx.container}>
      {variant === `full` && (
        <Box sx={sx.imageContainer}>
          <Image
            alt="Deanna sitting on a beach doing yoga"
            layout="fill"
            loader={cloudinaryLoader}
            objectFit="cover"
            objectPosition="center"
            priority
            sizes={[
              `(max-width: ${theme.breakpoints.values.sm}px) 100vw`,
              `900px`,
            ].join(`,`)}
            src="/upload/deanna-troy-travels/global-about-photo.jpg"
          />
        </Box>
      )}
      <Box sx={sx.textContainer}>
        <Box sx={sx.sectionTitleContainer}>
          <SectionTitle variant={variant === `narrow` ? `h4` : undefined}>
            Hi, I’m Deanna
          </SectionTitle>
        </Box>
        <Typography paragraph variant="body1">
          Welcome to Deanna Troy Travels, your go-to guide for vegan and budget
          travel adventures! Since 2016, I’ve been uncovering hidden gems,
          vibrant local life and unforgettable cultures across 22 countries —
          from Vietnam’s bustling streets to Japan’s serene temples — and now,
          I’m sharing them with you!
        </Typography>
        {variant === `full` && (
          <Typography paragraph variant="body1">
            Join me for travel tips, insider stories and a quirky perspective on
            exploring the world while keeping it budget-friendly and
            plant-powered. Let’s inspire each other to see more, spend less and
            experience the joy of travel! 🌍
          </Typography>
        )}
        <Box
          sx={{
            ...sx.socialsContainer,
            marginLeft: variant === `narrow` ? 0 : { xs: 0, sm: -1 },
          }}>
          <SocialsIcons
            justifyContent={
              variant === `narrow`
                ? `center`
                : { xs: `center`, sm: `flex-start` }
            }
            spacing={variant === `narrow` ? 1 : { xs: 1, sm: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalAboutSection;
