import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack, Tooltip } from '@mui/material';

import {
  AmazonIcon,
  PoshmarkIcon,
  TikTokIcon,
  DepopIcon,
  MercariIcon,
} from '@components/icons';

import sx from './SocialsIcons.styles';

type Social =
  | `youTube`
  | `instagram`
  | `facebook`
  | `tikTok`
  | `amazon`
  | `poshmark`
  | `depop`
  | `mercari`;

type SocialItem = {
  icon: JSX.Element;
  label: string;
  url: string;
};

export type SocialsMenuAnchor = {
  element: HTMLButtonElement | HTMLDivElement | null;
  elementId: string;
};

type Props = {
  include?: Array<Social>;
  justifyContent?: React.ComponentProps<typeof Stack>['justifyContent'];
  size?: 'small' | 'medium' | 'large';
  spacing?: React.ComponentProps<typeof Stack>['spacing'];
};

const SocialsIcons = ({
  include = [
    `youTube`,
    `instagram`,
    `facebook`,
    `tikTok`,
    `amazon`,
    `poshmark`,
  ],
  justifyContent = `center`,
  size = undefined,
  spacing = 0,
}: Props): JSX.Element => {
  const socialByName: { [key in Social]: SocialItem } = {
    amazon: {
      icon: <AmazonIcon fontSize={size} sx={sx.amazonIcon} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    depop: {
      icon: <DepopIcon fontSize={size} />,
      label: `Depop`,
      url: `https://www.depop.com/deannatroyshop/`,
    },
    facebook: {
      icon: <FacebookIcon fontSize={size} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    instagram: {
      icon: <InstagramIcon fontSize={size} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    mercari: {
      icon: <MercariIcon fontSize={size} />,
      label: `Mercari`,
      url: `https://www.mercari.com/u/141412516/`,
    },
    poshmark: {
      icon: <PoshmarkIcon fontSize={size} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    tikTok: {
      icon: <TikTokIcon fontSize={size} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    youTube: {
      icon: <YouTubeIcon fontSize={size} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
  };

  const socials = include.map((social) => {
    return socialByName[social];
  });

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
