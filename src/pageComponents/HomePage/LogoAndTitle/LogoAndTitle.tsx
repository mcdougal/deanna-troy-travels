import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

import { cloudinaryLoader } from '@lib/cloudinary';

import sx from './LogoAndTitle.styles';

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
        loader={cloudinaryLoader}
        src="/upload/deanna-troy-travels/logo.png"
        width={YOUTUBE_LOGO_WIDTH}
      />
      <Typography component="h1" sx={sx.title} variant="h4">
        <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
      </Typography>
      <Typography sx={sx.subtitle} variant="caption">
        Budget Travel Vlogs
      </Typography>
      <Box sx={sx.subscribeButtonContainer}>
        <Button
          color="secondary"
          href="https://www.youtube.com/channel/UCJeRZkaH3ORHkNWUNqfXJEg?sub_confirmation=1"
          size="large"
          startIcon={<YouTubeIcon />}
          target="_blank"
          variant="contained">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default LogoAndTitle;
