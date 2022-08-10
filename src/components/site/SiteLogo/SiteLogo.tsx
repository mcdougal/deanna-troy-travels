import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

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
        <Typography component="span" sx={sx.logoText} variant="h6">
          <b>
            <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
          </b>
        </Typography>
      )}
    </Box>
  );
};

export default SiteLogo;
