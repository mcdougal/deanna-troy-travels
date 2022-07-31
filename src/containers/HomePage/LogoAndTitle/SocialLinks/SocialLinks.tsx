import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { ButtonBase, Grid } from '@mui/material';

import { Amazon, Poshmark, TikTok } from '@components/icons';

import sx from './SocialLinks.styles';

const SocialLinks = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase href="https://www.youtube.com/deannatroytravels">
          <YouTube sx={[sx.socialLogo, sx.youTube]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase href="https://www.instagram.com/deanna_troy_travels">
          <Instagram sx={[sx.socialLogo, sx.instagram]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase href="https://www.facebook.com/deannatroytravels">
          <Facebook sx={[sx.socialLogo, sx.facebook]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase href="https://poshmark.com/closet/deannatroyshop">
          <Poshmark sx={[sx.socialLogo, sx.poshmark]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase href="https://www.tiktok.com/@deannatroytravels">
          <TikTok sx={[sx.socialLogo, sx.tikTok]} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase href="https://www.amazon.com/shop/deannatroytravels">
          <Amazon sx={[sx.socialLogo, sx.amazon]} />
        </ButtonBase>
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
