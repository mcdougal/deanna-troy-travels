import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

import sx from './SocialsMenu.styles';

export type SocialsMenuAnchor = {
  element: HTMLButtonElement | HTMLDivElement | null;
  elementId: string;
};

type Props = {
  anchor: SocialsMenuAnchor | null;
  onClose: () => void;
};

const SocialsMenu = ({ anchor, onClose }: Props): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <TikTokIcon />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
  ];

  return (
    <Menu
      anchorEl={anchor?.element || null}
      anchorOrigin={{
        vertical: `bottom`,
        horizontal: `center`,
      }}
      MenuListProps={
        anchor ? { 'aria-labelledby': anchor.elementId } : undefined
      }
      onClose={onClose}
      open={Boolean(anchor)}
      transformOrigin={{
        vertical: `top`,
        horizontal: `center`,
      }}>
      {socials.map(({ icon, label, url }) => {
        return (
          <MenuItem key={label} component="a" href={url} target="_blank">
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText sx={sx.listItemText}>{label}</ListItemText>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default SocialsMenu;
