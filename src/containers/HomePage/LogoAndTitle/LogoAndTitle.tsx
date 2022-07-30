import { Box, Container, Grid, Typography } from '@mui/material';

import { ContentfulImage } from '@components/contentful';

import { AssetUrls } from '../types';

import sx from './LogoAndTitle.styles';

const YOUTUBE_LOGO_RATIO = 1.189;
const YOUTUBE_LOGO_HEIGHT = 88;
const YOUTUBE_LOGO_WIDTH = YOUTUBE_LOGO_HEIGHT * YOUTUBE_LOGO_RATIO;

interface Props {
  assetUrls: AssetUrls;
}

const LogoAndTitle = ({ assetUrls }: Props): JSX.Element => {
  return (
    <Container maxWidth="xl">
      <Grid alignItems="center" container flexDirection="column">
        <Grid item>
          <ContentfulImage
            alt="Deanna Troy Travels"
            height={YOUTUBE_LOGO_HEIGHT}
            layout="fixed"
            src={assetUrls.youTubeLogo}
            width={YOUTUBE_LOGO_WIDTH}
          />
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h4">
            <Box sx={sx.deannaTroy}>Deanna Troy</Box> Travels
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={sx.subtitle} variant="caption">
            Budget Travel Vlog
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogoAndTitle;
