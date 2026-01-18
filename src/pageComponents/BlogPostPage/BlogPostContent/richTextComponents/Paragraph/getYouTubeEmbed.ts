/* eslint-disable max-len */
import { Block, Inline } from '@contentful/rich-text-types';

const YOUTUBE_EMBED_REGEXES = [
  {
    regex:
      /^\s*https:\/\/www\.youtube\.com\/watch\?v=(?<videoId>[A-Za-z0-9_-]+)\s*$/i,
    aspectRatio: `16 / 9`,
    aspectRatioType: `landscape`,
  },
  {
    regex: /^\s*https:\/\/youtu\.be\/(?<videoId>[A-Za-z0-9_-]+)\s*$/i,
    aspectRatio: `16 / 9`,
    aspectRatioType: `landscape`,
  },
  {
    regex:
      /\s*https:\/\/www\.youtube\.com\/shorts\/(?<videoId>[A-Za-z0-9_-]+)\s*$/i,
    aspectRatio: `9 / 16`,
    aspectRatioType: `portrait`,
  },
  {
    regex: /\s*https:\/\/youtube\.com\/shorts\/(?<videoId>[A-Za-z0-9_-]+)\s*$/i,
    aspectRatio: `9 / 16`,
    aspectRatioType: `portrait`,
  },
];

type YouTubeEmbed = {
  videoId: string;
  aspectRatio: string;
  aspectRatioType: string;
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

  const videoIds = YOUTUBE_EMBED_REGEXES.reduce(
    (arr, regex) => {
      const embedMatch = contentText.match(regex.regex);
      const videoId = embedMatch?.groups?.videoId;
      return videoId
        ? [
            ...arr,
            {
              videoId,
              aspectRatio: regex.aspectRatio,
              aspectRatioType: regex.aspectRatioType,
            },
          ]
        : arr;
    },
    new Array<{
      videoId: string;
      aspectRatio: string;
      aspectRatioType: string;
    }>(),
  );

  if (videoIds.length === 0) {
    return null;
  }

  return videoIds[0];
};
