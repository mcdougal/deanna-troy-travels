import { Box, Typography } from '@mui/material';

import { SiteLogo } from '@components/site';

import sx from './LogoAndTitle.styles';

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.logoAndTitleContainer}>
      <SiteLogo height={8} />
      <Box sx={sx.titleContainer}>
        <Typography component="h1" sx={sx.title} variant="h4">
          <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
        </Typography>
        <Typography sx={sx.subtitle} variant="caption">
          Budget Travel Vlogs
        </Typography>
      </Box>
    </Box>
  );
};

export default LogoAndTitle;
