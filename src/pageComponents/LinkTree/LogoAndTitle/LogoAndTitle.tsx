import { Box, ButtonBase, Typography } from '@mui/material';
import Link from 'next/link';

import { SiteLogo } from '@components/site';

import sx from './LogoAndTitle.styles';

const LogoAndTitle = (): JSX.Element => {
  return (
    <Box sx={sx.container}>
      <Link href="/" legacyBehavior passHref>
        <ButtonBase focusRipple sx={sx.logoAndTitleContainer}>
          <SiteLogo height={8} />
          <Box sx={sx.titleContainer}>
            <Typography component="h1" sx={sx.title} variant="h4">
              Deanna Troy Travels
            </Typography>
            <Typography sx={sx.subtitle} variant="caption">
              Budget & Vegan Travel
            </Typography>
          </Box>
        </ButtonBase>
      </Link>
    </Box>
  );
};

export default LogoAndTitle;
