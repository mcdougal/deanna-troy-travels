import { Box, Button } from '@mui/material';
import Link from 'next/link';

import { YouTubeSubscribeButton } from '@components/youTube';

import sx from './DesktopNav.styles';
import SocialLinks from './SocialLinks';

const DesktopNav = (): JSX.Element => {
  const menuItems = [
    {
      key: `workWithMe`,
      label: `Work With Me`,
      url: `/work-with-me`,
    },
    {
      key: `blog`,
      label: `Blog`,
      url: `/blog`,
    },
    {
      key: `about`,
      label: `About`,
      url: `/about`,
    },
  ];

  return (
    <Box sx={sx.desktopNavContainer}>
      <Box sx={sx.socialLinksContainer}>
        <SocialLinks />
      </Box>
      {menuItems.map(({ key, label, url }) => {
        return (
          <Link key={key} href={url} passHref>
            <Button
              color="inherit"
              size="large"
              sx={sx.navButton}
              variant="text">
              {label}
            </Button>
          </Link>
        );
      })}
      <Box sx={sx.youTubeSubscribeButtonContainer}>
        <YouTubeSubscribeButton />
      </Box>
    </Box>
  );
};

export default DesktopNav;
