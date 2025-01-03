import { Box } from '@mui/material';

import sx from './DesktopNav.styles';
import NavItemButton, { NavItem } from './NavItemButton';

const DesktopNav = (): JSX.Element => {
  const navItems: Array<NavItem> = [
    {
      type: `internalLink`,
      key: `destinations`,
      label: `Destinations`,
      internalPath: `/destinations`,
    },
    {
      type: `externalLink`,
      key: `videos`,
      label: `YouTube`,
      externalUrl: `https://www.youtube.com/deannatroytravels/videos`,
    },
    {
      type: `internalLink`,
      key: `blog`,
      label: `Blog`,
      internalPath: `/blog`,
    },
    {
      type: `internalLink`,
      key: `workWithMe`,
      label: `Work With Me`,
      internalPath: `/work-with-me`,
    },
    {
      type: `internalLink`,
      key: `about`,
      label: `About`,
      internalPath: `/about`,
    },
  ];

  return (
    <Box sx={sx.desktopNavContainer}>
      {navItems.map((navItem) => {
        return (
          <Box key={navItem.key} sx={sx.navItemContainer}>
            <NavItemButton navItem={navItem} />
          </Box>
        );
      })}
    </Box>
  );
};

export default DesktopNav;
