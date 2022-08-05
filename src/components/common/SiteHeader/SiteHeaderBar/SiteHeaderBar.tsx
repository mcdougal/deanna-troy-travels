import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  ButtonBase,
  Grow,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Image from 'next/image';

import sx from './SiteHeaderBar.styles';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 40;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

interface Props {
  hideLogoUntilScroll?: boolean;
  onClickOpenMenu: () => void;
}

const SiteHeaderBar = ({
  hideLogoUntilScroll,
  onClickOpenMenu,
}: Props): JSX.Element => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Box sx={sx.left}>
          <Grow
            appear={false}
            in={!hideLogoUntilScroll || trigger}
            mountOnEnter>
            <ButtonBase href="/" sx={sx.logoContainer}>
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
            </ButtonBase>
          </Grow>
        </Box>
        <IconButton
          aria-label="Open Menu"
          color="inherit"
          edge="end"
          onClick={onClickOpenMenu}>
          <MenuIcon sx={sx.openMenuIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeaderBar;
