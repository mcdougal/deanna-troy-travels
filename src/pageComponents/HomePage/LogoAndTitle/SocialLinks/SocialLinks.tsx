import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { ButtonBase, Grid } from '@mui/material';

import { Amazon, Poshmark, TikTok } from '@components/icons';

import sx from './SocialLinks.styles';

const SocialLinks = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://www.youtube.com/deannatroytravels"
          target="_blank">
          <YouTube sx={[sx.socialLogo, sx.youTube]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://www.instagram.com/deanna_troy_travels"
          target="_blank">
          <Instagram sx={[sx.socialLogo, sx.instagram]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://www.facebook.com/deannatroytravels"
          target="_blank">
          <Facebook sx={[sx.socialLogo, sx.facebook]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://poshmark.com/closet/deannatroyshop"
          target="_blank">
          <Poshmark sx={[sx.socialLogo, sx.poshmark]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://www.tiktok.com/@deannatroytravels"
          target="_blank">
          <TikTok sx={[sx.socialLogo, sx.tikTok]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          href="https://www.amazon.com/shop/deannatroytravels"
          target="_blank">
          <Amazon sx={[sx.socialLogo, sx.amazon]} />
        </ButtonBase>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
