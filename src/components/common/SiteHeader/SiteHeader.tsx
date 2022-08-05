import { AppBar, Box, Toolbar } from '@mui/material';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import sx from './SiteHeader.styles';
import SiteLogoButton from './SiteLogoButton';

interface Props {
  hideLogoUntilScroll?: boolean;
}

const SiteHeader = ({ hideLogoUntilScroll = false }: Props): JSX.Element => {
  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Box sx={sx.left}>
          <SiteLogoButton hideLogoUntilScroll={hideLogoUntilScroll} />
        </Box>
        <Box sx={sx.mobileNav}>
          <MobileNav />
        </Box>
        <Box sx={sx.desktopNav}>
          <DesktopNav />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
