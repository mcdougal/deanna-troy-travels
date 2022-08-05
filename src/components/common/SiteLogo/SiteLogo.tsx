import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import sx from './SiteLogo.styles';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 40;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

const SiteLogo = (): JSX.Element => {
  return (
    <Box sx={sx.logoContainer}>
      <Image
        alt="Deanna Troy Travels logo"
        height={YOUTUBE_LOGO_HEIGHT}
        layout="fixed"
        src="/deanna-troy-travels/logo.png"
        width={YOUTUBE_LOGO_WIDTH}
      />
      <Typography sx={sx.logoText} variant="h6">
        <b>
          <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
        </b>
      </Typography>
    </Box>
  );
};

export default SiteLogo;
