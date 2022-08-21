import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, ButtonBase, Container, Grid } from '@mui/material';
import Link from 'next/link';
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
      <Box sx={sx.logoContainer}>
        <Link href="/" passHref>
          <ButtonBase focusRipple>
            <SiteLogo height={8} />
          </ButtonBase>
        </Link>
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
      <Box sx={sx.subscribeButtonContainer}>
        <Button
          color="secondary"
          href="https://www.youtube.com/channel/UCJeRZkaH3ORHkNWUNqfXJEg?sub_confirmation=1"
          size="small"
          startIcon={<YouTubeIcon />}
          target="_blank"
          variant="outlined">
          Subscribe
        </Button>
      </Box>
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
