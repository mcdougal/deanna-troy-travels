import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

import sx from './SocialsMenu.styles';

export interface MenuAnchor {
  element: HTMLButtonElement | null;
  elementId: string;
}

interface Props {
  anchor: MenuAnchor | null;
  onClose: () => void;
}

const SocialsMenu = ({ anchor, onClose }: Props): JSX.Element => {
  const socials = [
    {
      icon: <YouTubeIcon sx={sx.icon} />,
      label: `YouTube`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      icon: <InstagramIcon sx={sx.icon} />,
      label: `Instagram`,
      url: `https://www.instagram.com/deanna_troy_travels`,
    },
    {
      icon: <FacebookIcon sx={sx.icon} />,
      label: `Facebook`,
      url: `https://www.facebook.com/deannatroytravels`,
    },
    {
      icon: <PoshmarkIcon sx={sx.icon} />,
      label: `Poshmark`,
      url: `https://poshmark.com/closet/deannatroyshop`,
    },
    {
      icon: <TikTokIcon sx={sx.icon} />,
      label: `TikTok`,
      url: `https://www.tiktok.com/@deannatroytravels`,
    },
    {
      icon: <AmazonIcon sx={sx.icon} />,
      label: `Amazon`,
      url: `https://www.amazon.com/shop/deannatroytravels`,
    },
  ];

  return (
    <Menu
      anchorEl={anchor?.element || null}
      MenuListProps={
        anchor ? { 'aria-labelledby': anchor.elementId } : undefined
      }
      onClose={onClose}
      open={Boolean(anchor)}>
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
