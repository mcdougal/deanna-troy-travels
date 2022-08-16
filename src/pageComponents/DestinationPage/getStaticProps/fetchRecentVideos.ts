import { fetchPlaylistItems, fetchYouTubeVideo } from '@lib/youTube';

export interface YouTubeVideo {
  commentCount: number;
  likeCount: number;
  title: string;
  videoId: string;
  viewCount: number;
}

export default async (playlistId: string): Promise<Array<YouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(playlistId);

  const videos = await Promise.all(
    playlistItems.map(async (playlistItem) => {
      return fetchYouTubeVideo(playlistItem.contentDetails.videoId);
    }),
  );

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
