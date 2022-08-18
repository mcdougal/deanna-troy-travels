import { fetchPlaylistItems, fetchYouTubeVideos } from '@lib/youTube';

const ALL_VIDEOS_PLAYLIST_ID = `PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`;

export interface YouTubeVideo {
  commentCount: number;
  likeCount: number;
  title: string;
  videoId: string;
  viewCount: number;
}

export default async (): Promise<Array<YouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(ALL_VIDEOS_PLAYLIST_ID, {
    maxResults: 3,
  });

  const videoIds = playlistItems.map((playlistItem) => {
    return playlistItem.contentDetails.videoId;
  });

  const videos = await fetchYouTubeVideos(videoIds);

  return playlistItems.map((playlistItem, i) => {
    const video = videos[i];

    return {
      commentCount: parseInt(video.statistics.commentCount, 10),
      likeCount: parseInt(video.statistics.likeCount, 10),
      title: playlistItem.snippet.title,
      videoId: playlistItem.contentDetails.videoId,
      viewCount: parseInt(video.statistics.viewCount, 10),
    };
  });
};
