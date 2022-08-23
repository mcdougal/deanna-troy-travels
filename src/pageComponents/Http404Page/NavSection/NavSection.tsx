import { Grid } from '@mui/material';
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
      type: `internalLink`,
      key: `videos`,
      label: `Videos`,
      internalPath: `/videos`,
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
      <Grid container justifyContent="center" spacing={{ xs: 1, sm: 2 }}>
        {navItems.map((navItem) => {
          return (
            <Grid key={navItem.key} item sx={sx.navItemContainer} xs={6}>
              <NavItemButton navItem={navItem} />
            </Grid>
          );
        })}
      </Grid>
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
