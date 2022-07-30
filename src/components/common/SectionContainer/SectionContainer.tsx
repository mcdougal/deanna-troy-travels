import { Container } from '@mui/material';

import sx from './SectionContainer.sx';

interface Props {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: Props): JSX.Element => {
  return <Container sx={sx.sectionContainer}>{children}</Container>;
};

export default SectionContainer;
