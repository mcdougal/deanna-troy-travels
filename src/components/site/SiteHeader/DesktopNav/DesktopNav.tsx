import { Box } from '@mui/material';
import { useState } from 'react';

import SocialsMenu, { SocialsMenuAnchor } from '../../SocialsMenu';

import sx from './DesktopNav.styles';
import NavItemButton, { NavItem } from './NavItemButton';

const SOCIALS_BUTTON_HTML_ID = `site-header-desktop-nav-socials-button`;

const DesktopNav = (): JSX.Element => {
  const [socialsMenuAnchor, setSocialsMenuAnchor] =
    useState<SocialsMenuAnchor | null>(null);

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
    {
      type: `button`,
      key: `socials`,
      label: `Socials`,
      id: SOCIALS_BUTTON_HTML_ID,
      onClick: (event): void => {
        setSocialsMenuAnchor({
          element: event.currentTarget,
          elementId: SOCIALS_BUTTON_HTML_ID,
        });
      },
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
      <SocialsMenu
        anchor={socialsMenuAnchor}
        onClose={(): void => {
          setSocialsMenuAnchor(null);
        }}
      />
    </Box>
  );
};

export default DesktopNav;
