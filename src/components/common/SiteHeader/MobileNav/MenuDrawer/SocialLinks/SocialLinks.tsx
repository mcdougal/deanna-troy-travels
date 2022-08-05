import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import { Box, ButtonBase } from '@mui/material';

import { Amazon, Poshmark, TikTok } from '@components/icons';

import sx from './SocialLinks.styles';

const SocialLinks = (): JSX.Element => {
  const socials = [
    {
      icon: <YouTube sx={sx.youTubeIcon} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <Instagram sx={sx.instagramIcon} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <Facebook sx={sx.facebookIcon} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <Poshmark sx={sx.poshmarkIcon} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <TikTok sx={sx.tikTokIcon} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <Amazon sx={sx.amazonIcon} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
  ];

  return (
    <Box sx={sx.socialButtonsContainer}>
      {socials.map(({ icon, label, url }) => {
        return (
          <ButtonBase
            key={label}
            aria-label={label}
            focusRipple
            href={url}
            sx={sx.socialButton}
            target="_blank">
            {icon}
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default SocialLinks;
