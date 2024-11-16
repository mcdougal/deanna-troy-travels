/* eslint-disable max-len */
import { Block, Inline } from '@contentful/rich-text-types';

export const INSTAGRAM_EMBED_REGEX =
  /^\s*https:\/\/www\.instagram\.com\/p\/(?<postId>[A-Za-z0-9_-]+)\/?\s*(?<noCaption>no caption)?\s*$/i;

type InstagramEmbed = {
  includeCaption: boolean;
  postId: string;
};

export default (node: Block | Inline): InstagramEmbed | null => {
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
  const postId = instagramEmbedMatch?.groups?.postId;
  const noCaption = instagramEmbedMatch?.groups?.noCaption;

  if (!postId) {
    return null;
  }

  return {
    includeCaption: !noCaption,
    postId,
  };
};
