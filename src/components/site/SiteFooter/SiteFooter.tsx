import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, ButtonBase, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import ContactDialog from '../ContactDialog';
import SiteLogo from '../SiteLogo';
import SocialsMenu, { SocialsMenuAnchor } from '../SocialsMenu';

import NavItemButton, { NavItem } from './NavItemButton';
import sx from './SiteFooter.styles';

const SOCIALS_BUTTON_HTML_ID = `site-footer-socials-button`;
const CONTACT_BUTTON_HTML_ID = `site-footer-contact-button`;

const SiteFooter = (): JSX.Element => {
  const [socialsMenuAnchor, setSocialsMenuAnchor] =
    useState<SocialsMenuAnchor | null>(null);

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
      key: `about`,
      label: `About`,
      internalPath: `/about`,
    },
    {
      type: `internalLink`,
      key: `workWithMe`,
      label: `Work With Me`,
      internalPath: `/work-with-me`,
    },
    {
      type: `button`,
      key: `contact`,
      label: `Contact Me`,
      id: CONTACT_BUTTON_HTML_ID,
      onClick: openContactDialog,
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
      </Container>
      <SocialsMenu
        anchor={socialsMenuAnchor}
        onClose={(): void => {
          setSocialsMenuAnchor(null);
        }}
      />
      <ContactDialog onClose={closeContactDialog} open={isContactDialogOpen} />
    </Box>
  );
};

export default SiteFooter;
