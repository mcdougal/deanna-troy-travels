import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Grow,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Image from 'next/image';

import sx from './SiteHeader.styles';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 40;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

interface Props {
  hideLogoUntilScroll?: boolean;
}

const SiteHeader = ({ hideLogoUntilScroll }: Props): JSX.Element => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Grow appear={false} in={!hideLogoUntilScroll || trigger} mountOnEnter>
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
        </Grow>
        <Menu sx={sx.menu} />
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
