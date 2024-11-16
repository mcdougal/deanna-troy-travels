import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, ButtonBase, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import ContactDialog from '../ContactDialog';
import SiteLogo from '../SiteLogo';
import SocialsIcons from '../SocialsIcons';

import NavItemButton, { NavItem } from './NavItemButton';
import sx from './SiteFooter.styles';

const CONTACT_BUTTON_HTML_ID = `site-footer-contact-button`;

const SiteFooter = (): JSX.Element => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const openContactDialog = (): void => {
    setIsContactDialogOpen(true);
  };

  const closeContactDialog = (): void => {
    setIsContactDialogOpen(false);
  };

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
      key: `contact`,
      label: `Contact Me`,
      id: CONTACT_BUTTON_HTML_ID,
      onClick: openContactDialog,
    },
    {
      type: `externalLink`,
      key: `subscribe`,
      buttonProps: {
        color: `secondary`,
        startIcon: <YouTubeIcon />,
      },
      label: `Subscribe`,
      externalUrl: `https://www.youtube.com/channel/UCJeRZkaH3ORHkNWUNqfXJEg?sub_confirmation=1`,
    },
  ];

  return (
    <Box component="footer" sx={sx.siteFooter}>
      <Container maxWidth="md" sx={sx.siteFooterContent}>
        <Box sx={sx.logoContainer}>
          <Link href="/" legacyBehavior passHref>
            <ButtonBase focusRipple>
              <SiteLogo height={9} />
            </ButtonBase>
          </Link>
        </Box>
        <Typography
          align="center"
          component="p"
          sx={sx.travelWithMe}
          variant="h2">
          Let’s Travel the World!
        </Typography>
        <Box sx={sx.navItems}>
          {navItems.map((navItem) => {
            return (
              <Box key={navItem.key} sx={sx.navItemContainer}>
                <NavItemButton navItem={navItem} />
              </Box>
            );
          })}
        </Box>
        <Box sx={sx.socialsContainer}>
          <SocialsIcons spacing={1} />
        </Box>
      </Container>
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </Box>
  );
};

export default SiteFooter;
