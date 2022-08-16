import { Block, Inline } from '@contentful/rich-text-types';
import { Link as MuiLink } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
  node: Block | Inline;
}

const HyperLink = ({ children, node }: Props): JSX.Element => {
  return (
    <MuiLink
      href={node.data.uri}
      target={node.data.uri.startsWith(`http`) ? `_blank` : undefined}>
      {children}
    </MuiLink>
  );
};

export default HyperLink;
