export interface PlaylistItemsApiResponse {
  items: Array<PlaylistItem>;
  nextPageToken: string | undefined;
}

export interface PlaylistItem {
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
