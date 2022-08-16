import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Typography } from '@mui/material';

import { SiteLogo } from '@components/site';

import sx from './LogoAndTitle.styles';

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.logoAndTitleContainer}>
      <SiteLogo height={11} />
      <Typography component="h1" sx={sx.title} variant="h3">
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
