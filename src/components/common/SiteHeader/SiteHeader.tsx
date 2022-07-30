import { Facebook, Instagram, Menu, YouTube } from '@mui/icons-material';
import { AppBar, ButtonBase, Toolbar } from '@mui/material';

import { Amazon, Poshmark, TikTok } from '@components/icons';

import sx from './sx';

const SiteHeader = (): JSX.Element => {
  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar sx={sx.toolbar}>
        <Menu sx={sx.menu} />
        <ButtonBase href="https://www.youtube.com/deannatroytravels">
          <YouTube sx={[sx.socialLogo, sx.youTube]} />
        </ButtonBase>
        <ButtonBase href="https://www.instagram.com/deanna_troy_travels">
          <Instagram sx={[sx.socialLogo, sx.instagram]} />
        </ButtonBase>
        <ButtonBase href="https://www.facebook.com/deannatroytravels">
          <Facebook sx={[sx.socialLogo, sx.facebook]} />
        </ButtonBase>
        <ButtonBase href="https://poshmark.com/closet/deannatroyshop">
          <Poshmark sx={[sx.socialLogo, sx.poshmark]} />
        </ButtonBase>
        <ButtonBase href="https://www.tiktok.com/@deannatroytravels">
          <TikTok sx={[sx.socialLogo, sx.tikTok]} />
        </ButtonBase>
        <ButtonBase href="https://www.amazon.com/shop/deannatroytravels">
          <Amazon sx={[sx.socialLogo, sx.amazon]} />
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
