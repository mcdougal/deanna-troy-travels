import { Box } from '@mui/material';
import React from 'react';

import sx from './ListItem.styles';

type Props = {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props): JSX.Element => {
  return (
    <Box component="li" sx={sx.listItem}>
      {children}
    </Box>
  );
};

export default ListItem;
