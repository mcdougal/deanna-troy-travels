import axios from 'axios';

interface PlaylistItem {
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
}

interface PlaylistItemsData {
  items: Array<PlaylistItem>;
}

export default async (): Promise<Array<PlaylistItem>> => {
  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?${[
    `key=${process.env.GOOGLE_CLOUD_API_KEY}`,
    `maxResults=3`,
    `part=contentDetails,snippet,status`,
    `playlistId=PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`,
  ].join(`&`)}`;

  const playlistItemsResponse = await axios.get<PlaylistItemsData>(
    playlistItemsUrl,
  );

  return playlistItemsResponse.data.items;
};
