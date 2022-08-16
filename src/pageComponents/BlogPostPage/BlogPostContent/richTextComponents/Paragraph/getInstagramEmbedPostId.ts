import { Block, Inline } from '@contentful/rich-text-types';

export const INSTAGRAM_EMBED_REGEX =
  /^\s*https:\/\/www\.instagram\.com\/p\/(?<postId>[A-Za-z0-9_-]+)\/?\s*$/;

export default (node: Block | Inline): string | null => {
  if (!node.content || !Array.isArray(node.content)) {
    return null;
  }

  const allContentIsText = node.content.every((item) => {
    return item && item.nodeType === `text`;
  });

  if (!allContentIsText) {
    return null;
  }

  const contentText = node.content
    .map((item) => {
      return item.nodeType === `text` && item.value;
    })
    .join(``);

  const instagramEmbedMatch = contentText.match(INSTAGRAM_EMBED_REGEX);

  return instagramEmbedMatch?.groups?.postId || null;
};
