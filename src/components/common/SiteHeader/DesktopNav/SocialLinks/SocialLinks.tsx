import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, ButtonBase } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

import sx from './SocialLinks.styles';

const SocialLinks = (): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon sx={[sx.socialLogo, sx.youTubeIcon]} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon sx={[sx.socialLogo, sx.instagramIcon]} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon sx={[sx.socialLogo, sx.facebookIcon]} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon sx={[sx.socialLogo, sx.poshmarkIcon]} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <TikTokIcon sx={[sx.socialLogo, sx.tikTokIcon]} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon sx={[sx.socialLogo, sx.amazonIcon]} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
  ];

  return (
    <Box>
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
