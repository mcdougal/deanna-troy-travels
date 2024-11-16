import { Container } from '@mui/material';

import { PageTitle } from '@components/site';

import sx from './TitleSection.styles';

const TitleSection = (): JSX.Element => {
  return (
    <Container maxWidth="md" sx={sx.container}>
      <PageTitle>Work With Me</PageTitle>
    </Container>
  );
};

export default TitleSection;
