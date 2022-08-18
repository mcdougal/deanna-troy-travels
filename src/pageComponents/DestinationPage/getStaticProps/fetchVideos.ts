import { fetchPlaylistItems, fetchYouTubeVideos } from '@lib/youTube';

export interface YouTubeVideo {
  commentCount: number;
  likeCount: number;
  title: string;
  videoId: string;
  viewCount: number;
}

export default async (playlistId: string): Promise<Array<YouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(playlistId, {
    maxResults: 50,
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
