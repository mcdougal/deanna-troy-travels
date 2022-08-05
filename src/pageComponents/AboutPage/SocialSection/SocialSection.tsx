import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import { Box, Button, Container } from '@mui/material';

import { SectionTitle } from '@components/common';
import { Amazon, Poshmark, TikTok } from '@components/icons';

import sx from './SocialSection.styles';

const SocialSection = (): JSX.Element => {
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
    <Container maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>Follow Me</SectionTitle>
      </Box>
      {socials.map(({ icon, label, url }) => {
        return (
          <Button
            key={label}
            color="primary"
            fullWidth
            href={url}
            size="large"
            startIcon={icon}
            sx={sx.button}
            target="_blank"
            variant="outlined">
            <Box sx={sx.buttonLabel}>{label}</Box>
          </Button>
        );
      })}
    </Container>
  );
};

export default SocialSection;
