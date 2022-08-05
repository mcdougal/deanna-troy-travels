import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton } from '@mui/material';

import sx from './MenuDrawer.styles';
import SiteMenu from './SiteMenu';
import SocialLinks from './SocialLinks';

interface Props {
  onClose: () => void;
  open: boolean;
}

const MenuDrawer = ({ onClose, open }: Props): JSX.Element => {
  return (
    <Drawer anchor="right" onClose={onClose} open={open} sx={sx.menuDrawer}>
      <Box sx={sx.menuHeader}>
        <IconButton
          aria-label="Close Menu"
          color="inherit"
          edge="end"
          onClick={onClose}>
          <CloseIcon sx={sx.closeIcon} />
        </IconButton>
      </Box>
      <SiteMenu />
      <SocialLinks />
    </Drawer>
  );
};

export default MenuDrawer;
