import { Container } from '@mui/material';

import { GlobalAboutSection } from '@components/site';

const AboutSection = (): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <GlobalAboutSection />
    </Container>
  );
};

export default AboutSection;
