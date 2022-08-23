import axios from 'axios';

import chunk from './chunk';
import { YouTubeVideo } from './types';

export default async (
  videoIds: Array<string>,
): Promise<Array<YouTubeVideo>> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const videoIdChunks = chunk(videoIds, { chunkSize: 50 });

  const videoPromises = videoIdChunks.map(async (chunkedVideoIds) => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?${[
      `key=${GOOGLE_CLOUD_API_KEY}`,
      `id=${chunkedVideoIds.join(`,`)}`,
      `part=contentDetails,snippet,statistics,status`,
    ].join(`&`)}`;

    const videoResponse = await axios.get<{ items: Array<YouTubeVideo> }>(
      videoUrl,
    );

    return videoResponse.data.items;
  });

  const videos = (await Promise.all(videoPromises)).flat();

  if (videos.length !== videoIds.length) {
    const videoIdsFormatted = videoIds.join(`, `);

    throw new Error(
      `${videos.length} YouTube videos found for ${videoIds.length} IDs: ${videoIdsFormatted}`,
    );
  }

  return videos;
};
