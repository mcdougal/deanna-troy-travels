import { Button } from '@mui/material';
import Link from 'next/link';

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
      key: `about`,
      label: `About`,
      url: `/about`,
    },
  ];

  return (
    <>
      {menuItems.map(({ key, label, url }) => {
        return (
          <Link key={key} href={url} passHref>
            <Button color="inherit" size="large" sx={sx.button} variant="text">
              {label}
            </Button>
          </Link>
        );
      })}
    </>
  );
};

export default DesktopNav;
