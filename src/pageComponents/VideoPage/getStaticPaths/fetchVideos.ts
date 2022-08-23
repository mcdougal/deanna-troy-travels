import { fetchPlaylistItems } from '@lib/youTube';

const ALL_VIDEOS_PLAYLIST_ID = `PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`;

export interface YouTubeVideo {
  videoId: string;
}

export default async (): Promise<Array<YouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(ALL_VIDEOS_PLAYLIST_ID, {
    maxResults: 50,
  });

  return playlistItems.map((playlistItem) => {
    return {
      videoId: playlistItem.contentDetails.videoId,
    };
  });
};
