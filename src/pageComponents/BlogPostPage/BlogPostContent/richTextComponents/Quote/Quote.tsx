import { Box } from '@mui/material';
import React from 'react';

import sx from './Quote.styles';

interface Props {
  children: React.ReactNode;
}

const Quote = ({ children }: Props): JSX.Element => {
  return <Box sx={sx.quote}>{children}</Box>;
};

export default Quote;
