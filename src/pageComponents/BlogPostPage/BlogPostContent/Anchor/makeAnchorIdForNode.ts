import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Block, Inline } from '@contentful/rich-text-types';

// Match special heading ID strings, e.g. `[[HEADING_ID]]`
export const ANCHOR_ID_REGEX = /\[\[#[A-Za-z0-9_-]+\]\]/;

export default (node: Block | Inline): string | undefined => {
  const nodeText = documentToPlainTextString(node);
  const headingId = nodeText.match(ANCHOR_ID_REGEX);

  return headingId
    ? headingId[0].replace(/\[\[#/, ``).replace(/\]\]/, ``)
    : undefined;
};
