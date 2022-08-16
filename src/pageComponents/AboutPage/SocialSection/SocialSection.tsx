import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Container } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';
import { SectionTitle } from '@components/site';

import sx from './SocialSection.styles';

const SocialSection = (): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon sx={sx.youTubeIcon} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon sx={sx.instagramIcon} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon sx={sx.facebookIcon} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon sx={sx.poshmarkIcon} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <TikTokIcon sx={sx.tikTokIcon} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon sx={sx.amazonIcon} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
  ];

  return (
    <Container component="section" maxWidth="md">
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
