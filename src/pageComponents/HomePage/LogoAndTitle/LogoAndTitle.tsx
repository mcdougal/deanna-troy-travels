import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Typography } from '@mui/material';

import sx from './LogoAndTitle.styles';
import Title from './Title';

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.logoAndTitleContainer}>
      <Title />
      <Typography sx={sx.subtitle} variant="body1">
        Budget Travel Expert
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
