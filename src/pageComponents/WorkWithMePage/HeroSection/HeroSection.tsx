import { Box, Container, Typography } from '@mui/material';

import sx from './HeroSection.styles';

const HeroSection = (): JSX.Element => {
  return (
    <Container maxWidth="md" sx={sx.heroSectionContainer}>
      <Typography component="h1" sx={sx.title} variant="h2">
        <Box component="span" sx={sx.titlePrimary}>
          Work With
        </Box>
        {` `}
        Me
      </Typography>
    </Container>
  );
};

export default HeroSection;
