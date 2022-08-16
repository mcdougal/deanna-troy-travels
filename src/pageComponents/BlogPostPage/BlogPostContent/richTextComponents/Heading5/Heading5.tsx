import { Block, Inline } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import sx from './Heading5.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Heading5 = ({ children, node }: Props): JSX.Element => {
  return (
    <Typography component="h5" sx={sx.h5} variant="h6">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Heading5;
