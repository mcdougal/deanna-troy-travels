import { Box } from '@mui/material';

import sx from './OlList.styles';

interface Props {
  children: React.ReactNode;
}

const OlList = ({ children }: Props): JSX.Element => {
  return (
    <Box component="ol" sx={sx.olList}>
      {children}
    </Box>
  );
};

export default OlList;
