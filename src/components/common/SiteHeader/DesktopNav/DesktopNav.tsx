import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import sx from './DesktopNav.styles';

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
      key: `videos`,
      label: `Videos`,
      url: `https://www.youtube.com/deannatroytravels`,
    },
    {
      key: `about`,
      label: `About`,
      url: `/about`,
    },
  ];

  return (
    <Box sx={sx.desktopNavContainer}>
      {menuItems.map(({ key, label, url }) => {
        const isInternal = url.startsWith(`/`);

        const button = (
          <Button
            color="inherit"
            component="a"
            href={isInternal ? undefined : url}
            size="large"
            sx={sx.navButton}
            target={isInternal ? undefined : `_blank`}
            variant="text">
            {label}
          </Button>
        );

        return (
          <React.Fragment key={key}>
            {isInternal ? (
              <Link href={url} passHref>
                {button}
              </Link>
            ) : (
              button
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default DesktopNav;
