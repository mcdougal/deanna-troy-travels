import { Box, ButtonBase, Grow, useScrollTrigger } from '@mui/material';
import Link from 'next/link';

import SiteLogo from '../../SiteLogo';

import sx from './SiteLogoButton.styles';

interface Props {
  hideLogoUntilScroll: boolean;
}

const SiteLogoButton = ({ hideLogoUntilScroll }: Props): JSX.Element => {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <Grow appear={false} in={!hideLogoUntilScroll || trigger} mountOnEnter>
      <Box sx={sx.logoLinkContainer}>
        <Link href="/" passHref>
          <ButtonBase focusRipple sx={sx.logoContainer}>
            <SiteLogo />
          </ButtonBase>
        </Link>
      </Box>
    </Grow>
  );
};

export default SiteLogoButton;
