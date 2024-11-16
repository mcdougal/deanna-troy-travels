import { Block, Inline } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import sx from './Heading2.styles';

type Props = {
  children: React.ReactNode;
  node: Block | Inline;
};

const Heading2 = ({ children, node }: Props): JSX.Element => {
  return (
    <Typography component="h2" sx={sx.h2} variant="h4">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Heading2;
