import { Container } from '@mui/material';

import { PageTitle } from '@components/site';
import { Miscellaneous } from '@lib/miscellaneous';

import sx from './TitleSection.styles';

type Props = {
  miscellaneous: Miscellaneous;
};

const TitleSection = ({ miscellaneous }: Props): JSX.Element => {
  return (
    <Container maxWidth="md" sx={sx.container}>
      <PageTitle>{miscellaneous.workWithMeTitle.text}</PageTitle>
    </Container>
  );
};

export default TitleSection;
