import { ALL_VIDEOS_PLAYLIST_ID, fetchPlaylistItems } from '@lib/youTube';

export interface YouTubeVideo {
  videoId: string;
}

export default async (): Promise<Array<YouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(ALL_VIDEOS_PLAYLIST_ID, {
    maxResults: `all`,
  });

  return playlistItems.map((playlistItem) => {
    return {
      videoId: playlistItem.contentDetails.videoId,
    };
  });
};
