import { Typography } from '@mui/material';

import sx from './sx';

interface Props {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: Props): JSX.Element => {
  return (
    <Typography component="h2" variant="h4">
      {children}
    </Typography>
  );
};

export default SectionTitle;
