import { Block, Inline } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import React from 'react';

import Anchor from '../../Anchor';

import sx from './Paragraph.styles';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const Paragraph = ({ children, node }: Props): JSX.Element => {
  return (
    <Typography component="p" sx={sx.paragraph} variant="h6">
      <Anchor node={node} />
      {children}
    </Typography>
  );
};

export default Paragraph;
