import { Box, Typography } from '@mui/material';

import sx from './LogoAndTitle.styles';

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.logoAndTitleContainer}>
      <Typography align="center" component="h1" sx={sx.title} variant="h1">
        Deanna Troy Travels
      </Typography>
      <Typography sx={sx.subtitle} variant="body1">
        Budget & Vegan Travel
      </Typography>
    </Box>
  );
};

export default LogoAndTitle;
