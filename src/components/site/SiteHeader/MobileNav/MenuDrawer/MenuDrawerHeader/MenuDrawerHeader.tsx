import CloseIcon from '@mui/icons-material/Close';
import { Box, ButtonBase, IconButton } from '@mui/material';
import Link from 'next/link';

import SiteLogo from '../../../../SiteLogo';

import sx from './MenuDrawerHeader.styles';

type Props = {
  onClickClose: () => void;
};

const MenuDrawerHeader = ({ onClickClose }: Props): JSX.Element => {
  return (
    <Box sx={sx.menuHeader}>
      <Box sx={sx.left}>
        <Link href="/" legacyBehavior passHref>
          <ButtonBase focusRipple sx={sx.siteLogoContainer}>
            <SiteLogo height={5} variant="logoAndTitle" />
          </ButtonBase>
        </Link>
      </Box>
      <IconButton
        aria-label="Close Menu"
        color="inherit"
        edge="end"
        onClick={onClickClose}>
        <CloseIcon sx={sx.closeIcon} />
      </IconButton>
    </Box>
  );
};

export default MenuDrawerHeader;
