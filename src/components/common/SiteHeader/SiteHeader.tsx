import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Grow,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import { ContentfulImage } from '@components/contentful';

import sx from './SiteHeader.styles';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 40;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

interface Props {
  hideLogoUntilScroll?: boolean;
  youtubeLogoUrl: string;
}

const SiteHeader = ({
  hideLogoUntilScroll,
  youtubeLogoUrl,
}: Props): JSX.Element => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Grow appear={false} in={!hideLogoUntilScroll || trigger}>
          <Box sx={sx.logoContainer}>
            <ContentfulImage
              alt="Deanna Troy Travels logo"
              height={YOUTUBE_LOGO_HEIGHT}
              layout="fixed"
              src={youtubeLogoUrl}
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
