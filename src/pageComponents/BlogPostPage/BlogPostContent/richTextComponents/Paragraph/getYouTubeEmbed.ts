import { Block, Inline } from '@contentful/rich-text-types';

export const YOUTUBE_EMBED_REGEX_1 =
  /^\s*https:\/\/www\.youtube\.com\/watch\?v=(?<videoId>[A-Za-z0-9_-]+)\s*$/i;

export const YOUTUBE_EMBED_REGEX_2 =
  /^\s*https:\/\/youtu\.be\/(?<videoId>[A-Za-z0-9_-]+)\s*$/i;

type YouTubeEmbed = {
  videoId: string;
};

export default (node: Block | Inline): YouTubeEmbed | null => {
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

  const youTubeEmbedMatch1 = contentText.match(YOUTUBE_EMBED_REGEX_1);
  const videoId1 = youTubeEmbedMatch1?.groups?.videoId;

  const youTubeEmbedMatch2 = contentText.match(YOUTUBE_EMBED_REGEX_2);
  const videoId2 = youTubeEmbedMatch2?.groups?.videoId;

  const videoId = videoId1 || videoId2;

  if (!videoId) {
    return null;
  }

  return {
    videoId,
  };
};
