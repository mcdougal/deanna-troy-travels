import { Box, Typography, TypographyProps, useTheme } from '@mui/material';
import Image from 'next/legacy/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './SiteLogo.styles';

const YOUTUBE_LOGO_RATIO = 1.18518;

interface Props {
  height: number;
  variant?: `logoOnly` | `logoAndTitle`;
}

const SiteLogo = ({ height, variant = `logoOnly` }: Props): JSX.Element => {
  const theme = useTheme();

  const heightPx = parseInt(theme.spacing(height).replace(/px$/, ``), 10);
  const widthPx = heightPx * YOUTUBE_LOGO_RATIO;

  let titleVariant: TypographyProps['variant'];

  if (height < 4) {
    titleVariant = `caption`;
  } else if (height < 5) {
    titleVariant = `subtitle1`;
  } else if (height < 6) {
    titleVariant = `h6`;
  } else if (height < 8) {
    titleVariant = `h5`;
  } else if (height < 12) {
    titleVariant = `h4`;
  } else if (height < 17) {
    titleVariant = `h3`;
  } else {
    titleVariant = `h2`;
  }

  return (
    <Box sx={sx.logoContainer}>
      <Image
        alt="Deanna Troy Travels logo"
        height={heightPx}
        layout="fixed"
        loader={cloudinaryLoader}
        src="/upload/deanna-troy-travels/logo.png"
        width={widthPx}
      />
      {variant === `logoAndTitle` && (
        <Typography component="span" sx={sx.logoText} variant={titleVariant}>
          <Box>Deanna Troy</Box> Travels
        </Typography>
      )}
    </Box>
  );
};

export default SiteLogo;
