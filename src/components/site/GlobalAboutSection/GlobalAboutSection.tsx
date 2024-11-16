import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import SectionTitle from '../SectionTitle';
import SocialsIcons from '../SocialsIcons';

import sx from './GlobalAboutSection.styles';

type Props = {
  includeImage?: boolean;
  variant?: `full` | `short`;
};

const GlobalAboutSection = ({
  includeImage = true,
  variant = `full`,
}: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={sx.container}>
      {includeImage && (
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
          <SectionTitle>Hi, I’m Deanna</SectionTitle>
        </Box>
        <Typography paragraph variant="body1">
          Welcome to Deanna Troy Travels, your go-to guide for vegan and budget
          travel adventures! Since 2016, my husband Cedric and I have been
          exploring the world. From Thailand’s bustling streets to Japan’s
          serene temples, we’ve discovered hidden gems, local life and
          unforgettable cultures — and now, we’re sharing them with you!
        </Typography>
        {variant === `full` && (
          <Typography paragraph variant="body1">
            Join me for travel tips, insider stories, and a quirky perspective
            on exploring the world while keeping it budget-friendly and
            plant-powered. Let’s inspire each other to see more, spend less and
            experience the joy of travel! 🌍
          </Typography>
        )}
        <Box sx={sx.socialsContainer}>
          <SocialsIcons justifyContent="start" />
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalAboutSection;
