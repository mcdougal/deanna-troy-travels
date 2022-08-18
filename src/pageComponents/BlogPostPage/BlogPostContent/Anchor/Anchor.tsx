import { Block, Inline } from '@contentful/rich-text-types';
import { Box } from '@mui/material';

import sx from './Anchor.styles';
import makeAnchorIdForNode from './makeAnchorIdForNode';

interface Props {
  node: Block | Inline;
}

const Anchor = ({ node }: Props): JSX.Element | null => {
  const anchorId = makeAnchorIdForNode(node);

  return !anchorId ? null : <Box component="a" id={anchorId} sx={sx.anchor} />;
};

export default Anchor;
