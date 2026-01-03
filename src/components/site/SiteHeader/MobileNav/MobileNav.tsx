import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useState } from 'react';

import { Miscellaneous } from '@lib/miscellaneous';

import MenuDrawer from './MenuDrawer';
import sx from './MobileNav.styles';

type Props = {
  miscellaneous: Miscellaneous;
};

const MobileNav = ({ miscellaneous }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = (): void => {
    setIsMenuOpen(true);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        color="inherit"
        edge="end"
        onClick={openMenu}
        size="small">
        <MenuIcon sx={sx.openMenuIcon} />
      </IconButton>
      <MenuDrawer
        miscellaneous={miscellaneous}
        onClose={closeMenu}
        open={isMenuOpen}
      />
    </>
  );
};

export default MobileNav;
