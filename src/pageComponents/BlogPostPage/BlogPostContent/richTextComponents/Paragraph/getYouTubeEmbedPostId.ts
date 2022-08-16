import { Block, Inline } from '@contentful/rich-text-types';

export const YOUTUBE_EMBED_REGEX =
  /^\s*https:\/\/www\.youtube\.com\/watch\?v=(?<videoId>[A-Za-z0-9_-]+)\s*$/;

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

  const youTubeEmbedMatch = contentText.match(YOUTUBE_EMBED_REGEX);

  return youTubeEmbedMatch?.groups?.videoId || null;
};
