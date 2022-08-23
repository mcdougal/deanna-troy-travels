import axios from 'axios';

import { YouTubeVideo } from './types';

export default async (videoId: string): Promise<YouTubeVideo> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?${[
    `key=${GOOGLE_CLOUD_API_KEY}`,
    `id=${videoId}`,
    `part=contentDetails,snippet,statistics,status`,
  ].join(`&`)}`;

  const videoResponse = await axios.get<{ items: Array<YouTubeVideo> }>(
    videoUrl,
  );

  if (videoResponse.data.items.length === 0) {
    throw new Error(`No YouTube video found for video ID: ${videoId}`);
  }

  return videoResponse.data.items[0];
};
