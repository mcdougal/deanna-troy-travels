import { useState } from 'react';

import MenuDrawer from './MenuDrawer';
import SiteHeaderBar from './SiteHeaderBar';

interface Props {
  hideLogoUntilScroll?: boolean;
}

const SiteHeader = ({ hideLogoUntilScroll }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = (): void => {
    setIsMenuOpen(true);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <SiteHeaderBar
        hideLogoUntilScroll={hideLogoUntilScroll}
        onClickOpenMenu={openMenu}
      />
      <MenuDrawer onClose={closeMenu} open={isMenuOpen} />
    </>
  );
};

export default SiteHeader;
