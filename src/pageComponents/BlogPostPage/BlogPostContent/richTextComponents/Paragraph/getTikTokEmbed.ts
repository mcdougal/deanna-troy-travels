/* eslint-disable max-len */
import { Block, Inline } from '@contentful/rich-text-types';

export const TIK_TOK_EMBED_REGEX =
  /^\s*https:\/\/www\.tiktok\.com\/@deannatroytravels\/video\/(?<videoId>[A-Za-z0-9_-]+)\s*\/?$/i;

type TikTokEmbed = {
  videoId: string;
};

export default (node: Block | Inline): TikTokEmbed | null => {
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

  const tikTokEmbedMatch = contentText.match(TIK_TOK_EMBED_REGEX);
  const videoId = tikTokEmbedMatch?.groups?.videoId;

  if (!videoId) {
    return null;
  }

  return {
    videoId,
  };
};
