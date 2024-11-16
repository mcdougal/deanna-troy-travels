import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack, Tooltip } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

export interface SocialsMenuAnchor {
  element: HTMLButtonElement | HTMLDivElement | null;
  elementId: string;
}

interface Props {
  justifyContent?: `center` | `space-between` | `start`;
  size?: 'small' | 'medium' | 'large';
  spacing?: number;
}

const SocialsIcons = ({
  justifyContent = `center`,
  size = undefined,
  spacing = 0,
}: Props): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon fontSize={size} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon fontSize={size} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon fontSize={size} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <TikTokIcon fontSize={size} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon fontSize={size} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon fontSize={size} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
  ];

  return (
    <Stack direction="row" justifyContent={justifyContent} spacing={spacing}>
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

export default SocialsIcons;
