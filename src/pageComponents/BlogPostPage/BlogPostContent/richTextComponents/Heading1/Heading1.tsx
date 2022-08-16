import { Block, Inline } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import sx from './Heading1.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Heading1 = ({ children, node }: Props): JSX.Element => {
  return (
    <Typography component="h1" sx={sx.h1} variant="h3">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Heading1;
