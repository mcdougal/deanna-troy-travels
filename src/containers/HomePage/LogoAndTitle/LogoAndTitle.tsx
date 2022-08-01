import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import sx from './LogoAndTitle.styles';
import SocialLinks from './SocialLinks';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 88;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.logoAndTitleContainer}>
      <Image
        alt="Deanna Troy Travels logo"
        height={YOUTUBE_LOGO_HEIGHT}
        layout="fixed"
        src="/deanna-troy-travels/logo.png"
        width={YOUTUBE_LOGO_WIDTH}
      />
      <Typography component="h1" sx={sx.title} variant="h4">
        <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
      </Typography>
      <Typography sx={sx.subtitle} variant="caption">
        Budget Travel Vlog
      </Typography>
      <Box sx={sx.socialLinksContainer}>
        <SocialLinks />
      </Box>
    </Box>
  );
};

export default LogoAndTitle;
