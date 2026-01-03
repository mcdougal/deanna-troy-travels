import { AppBar, Box, Toolbar } from '@mui/material';

import { Miscellaneous } from '@lib/miscellaneous';

import SocialsIcons from '../SocialsIcons';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import sx from './SiteHeader.styles';
import SiteLogoButton from './SiteLogoButton';

type Props = {
  hideLogoUntilScroll?: boolean;
  miscellaneous: Miscellaneous;
};

const SiteHeader = ({
  hideLogoUntilScroll = false,
  miscellaneous,
}: Props): JSX.Element => {
  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Box sx={sx.siteLogoButtonContainer}>
          <SiteLogoButton hideLogoUntilScroll={hideLogoUntilScroll} />
        </Box>
        <Box sx={sx.mobileNav}>
          <MobileNav miscellaneous={miscellaneous} />
        </Box>
        <Box sx={sx.desktopNav}>
          <DesktopNav miscellaneous={miscellaneous} />
        </Box>
        <Box sx={sx.socials}>
          <SocialsIcons justifyContent="end" size="small" spacing={1} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
