import { Box } from '@mui/material';
import { useState } from 'react';

import { SocialsMenu, SocialsMenuAnchor } from '@components/site';

import NavItemButton, { NavItem } from './NavItemButton';
import sx from './NavSection.styles';

const SOCIALS_BUTTON_HTML_ID = `site-404-socials-button`;

const NavSection = (): JSX.Element => {
  const [socialsMenuAnchor, setSocialsMenuAnchor] =
    useState<SocialsMenuAnchor | null>(null);

  const navItems: Array<NavItem> = [
    {
      type: `externalLink`,
      key: `videos`,
      label: `Videos`,
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
      key: `destinations`,
      label: `Destinations`,
      internalPath: `/destinations`,
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
    <>
      <Box sx={sx.navItemsContainer}>
        {navItems.map((navItem) => {
          return (
            <Box key={navItem.key} sx={sx.navItemContainer}>
              <NavItemButton navItem={navItem} />
            </Box>
          );
        })}
      </Box>
      <SocialsMenu
        anchor={socialsMenuAnchor}
        onClose={(): void => {
          setSocialsMenuAnchor(null);
        }}
      />
    </>
  );
};

export default NavSection;
