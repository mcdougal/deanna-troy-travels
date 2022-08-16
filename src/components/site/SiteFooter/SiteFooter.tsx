import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';

import SiteLogo from '../SiteLogo';
import SocialsMenu, { SocialsMenuAnchor } from '../SocialsMenu';

import NavItemButton, { NavItem } from './NavItemButton';
import sx from './SiteFooter.styles';

const SOCIALS_BUTTON_HTML_ID = `site-footer-socials-button`;

const SiteFooter = (): JSX.Element => {
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
    <Box component="footer" sx={sx.siteFooter}>
      <Container maxWidth="md">
        <Box sx={sx.logoContainer}>
          <SiteLogo height={8} />
        </Box>
        <Grid container justifyContent="center" spacing={{ xs: 1, sm: 2 }}>
          {navItems.map((navItem) => {
            return (
              <Grid
                key={navItem.key}
                item
                sm="auto"
                sx={sx.navItemContainer}
                xs={6}>
                <NavItemButton navItem={navItem} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <SocialsMenu
        anchor={socialsMenuAnchor}
        onClose={(): void => {
          setSocialsMenuAnchor(null);
        }}
      />
    </Box>
  );
};

export default SiteFooter;
