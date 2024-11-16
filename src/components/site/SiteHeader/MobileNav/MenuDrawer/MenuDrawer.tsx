import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Drawer } from '@mui/material';

import SocialsIcons from '@components/site/SocialsIcons';

import sx from './MenuDrawer.styles';
import MenuDrawerHeader from './MenuDrawerHeader';
import SiteMenu from './SiteMenu';

interface Props {
  onClose: () => void;
  open: boolean;
}

const MenuDrawer = ({ onClose, open }: Props): JSX.Element => {
  return (
    <Drawer anchor="right" onClose={onClose} open={open} sx={sx.menuDrawer}>
      <Box>
        <MenuDrawerHeader onClickClose={onClose} />
      </Box>
      <Box sx={sx.socialsIconsContainer}>
        <SocialsIcons justifyContent="space-between" spacing={1} />
      </Box>
      <Box sx={sx.siteMenuContainer}>
        <SiteMenu />
      </Box>
      <Box sx={sx.subscribeButtonContainer}>
        <Button
          color="secondary"
          fullWidth
          href="https://www.youtube.com/channel/UCJeRZkaH3ORHkNWUNqfXJEg?sub_confirmation=1"
          size="large"
          startIcon={<YouTubeIcon />}
          sx={sx.subscribeButton}
          target="_blank"
          variant="text">
          Subscribe
        </Button>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
