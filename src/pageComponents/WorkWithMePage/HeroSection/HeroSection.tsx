import { Container } from '@mui/material';

import { PageTitle } from '@components/site';

import sx from './HeroSection.styles';

const HeroSection = (): JSX.Element => {
  return (
    <Container maxWidth="md" sx={sx.heroSectionContainer}>
      <PageTitle>Work With Me</PageTitle>
    </Container>
  );
};

export default HeroSection;
