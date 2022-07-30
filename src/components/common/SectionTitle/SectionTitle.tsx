import { Typography } from '@mui/material';

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
