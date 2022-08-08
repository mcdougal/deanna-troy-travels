import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  Box,
  Button,
  ButtonBase,
  Grow,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

import SiteLogo from '../../SiteLogo';

import sx from './SiteLogoButton.styles';

interface Props {
  hideLogoUntilScroll: boolean;
}

const SiteLogoButton = ({ hideLogoUntilScroll }: Props): JSX.Element => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up(`sm`), { noSsr: true });
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <>
      <Grow appear={false} in={!hideLogoUntilScroll || trigger} mountOnEnter>
        <Box sx={sx.logoLinkContainer}>
          <Link href="/" passHref>
            <ButtonBase focusRipple sx={sx.logoContainer}>
              <SiteLogo height={5} />
            </ButtonBase>
          </Link>
        </Box>
      </Grow>
      <Box sx={sx.subscribeButtonContainer}>
        <Grow
          appear={false}
          in={isMdUp && (!hideLogoUntilScroll || trigger)}
          mountOnEnter
          style={{ transitionDelay: `250ms` }}>
          <Button
            color="secondary"
            href="https://www.youtube.com/channel/UCJeRZkaH3ORHkNWUNqfXJEg?sub_confirmation=1"
            size="small"
            startIcon={<YouTubeIcon />}
            sx={sx.subscribeButton}
            target="_blank"
            variant="outlined">
            Subscribe
          </Button>
        </Grow>
      </Box>
    </>
  );
};

export default SiteLogoButton;
