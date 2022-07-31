import { Box, Container, Typography } from '@mui/material';

import { ContentfulImage } from '@components/contentful';

import { AssetUrls } from '../getStaticProps';

import sx from './HeroSection.styles';

const AS_SEEN_ON_GLOBE_RATIO = 1.0964;
const AS_SEEN_ON_GLOBE_WIDTH = 640;
const AS_SEEN_ON_GLOBE_HEIGHT = AS_SEEN_ON_GLOBE_WIDTH / AS_SEEN_ON_GLOBE_RATIO;

interface Props {
  assetUrls: AssetUrls;
}

const HeroSection = ({ assetUrls }: Props): JSX.Element => {
  return (
    <Container maxWidth="xl" sx={sx.heroSectionContainer}>
      <Typography component="h1" sx={sx.title} variant="h2">
        <Box sx={sx.workWith}>Work With</Box> Me
      </Typography>
      <ContentfulImage
        alt="Deanna Troy Travels"
        height={AS_SEEN_ON_GLOBE_HEIGHT}
        layout="responsive"
        priority
        src={assetUrls.asSeenOnGlobe}
        width={AS_SEEN_ON_GLOBE_WIDTH}
      />
    </Container>
  );
};

export default HeroSection;
