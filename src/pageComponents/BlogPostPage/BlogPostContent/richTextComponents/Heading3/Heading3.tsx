import { Block, Inline } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import sx from './Heading3.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Heading3 = ({ children, node }: Props): JSX.Element => {
  return (
    <Typography component="h3" sx={sx.h3} variant="h5">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Heading3;
