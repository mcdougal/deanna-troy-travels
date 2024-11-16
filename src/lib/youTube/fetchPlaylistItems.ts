import axios from 'axios';

type PlaylistItem = {
  id: string;
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard?: {
        url: string;
        width: number;
        height: number;
      };
      maxres?: {
        url: string;
        width: number;
        height: number;
      };
    };
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  };
  status: {
    privacyStatus: string;
  };
};

export default async (
  playlistId: string,
  options: { maxResults: number },
): Promise<Array<PlaylistItem>> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?${[
    `key=${GOOGLE_CLOUD_API_KEY}`,
    `maxResults=${options.maxResults}`,
    `part=contentDetails,snippet,status`,
    `playlistId=${playlistId}`,
  ].join(`&`)}`;

  const playlistItemsResponse = await axios.get<{ items: Array<PlaylistItem> }>(
    playlistItemsUrl,
  );

  return playlistItemsResponse.data.items;
};
