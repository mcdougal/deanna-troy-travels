import { Block, Inline } from '@contentful/rich-text-types';

import { INSTAGRAM_EMBED_REGEX } from '../Text';

export default (node: Block | Inline): boolean => {
  return Boolean(
    node.nodeType === `paragraph` &&
      node.content.length === 1 &&
      node.content[0].nodeType === `text` &&
      node.content[0].value.match(INSTAGRAM_EMBED_REGEX),
  );
};
