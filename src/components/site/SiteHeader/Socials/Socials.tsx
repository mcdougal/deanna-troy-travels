import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack, Tooltip } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

const Socials = (): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon fontSize="small" />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon fontSize="small" />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <TikTokIcon fontSize="small" />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon fontSize="small" />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon fontSize="small" />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
  ];

  return (
    <Stack direction="row" justifyContent="center" spacing={1}>
      {socials.map(({ icon, label, url }) => {
        return (
          <Tooltip key={label} title={label}>
            <IconButton component="a" href={url} target="_blank">
              {icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
};

export default Socials;
