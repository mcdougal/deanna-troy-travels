import { Box } from '@mui/material';
import React from 'react';

import sx from './UlList.styles';

interface Props {
  children: React.ReactNode;
}

const UlList = ({ children }: Props): JSX.Element => {
  return (
    <Box component="ul" sx={sx.ulList}>
      {children}
    </Box>
  );
};

export default UlList;
