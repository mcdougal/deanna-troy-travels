import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Box,
  ButtonBase,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { AmazonIcon, PoshmarkIcon, TikTokIcon } from '@components/icons';

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
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={sx.socialsContainer}>
          {socials.map(({ icon, label, url }) => {
            return (
              <Tooltip key={label} title={label}>
                <IconButton component="a" href={url} target="_blank">
                  {icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </Stack>
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
