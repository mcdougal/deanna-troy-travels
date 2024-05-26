import { fetchPlaylistItems, fetchYouTubeVideos } from '@lib/youTube';

export interface YouTubeVideo {
  commentCount: number;
  description: string;
  duration: string;
  likeCount: number;
  publishedAt: string;
  thumbnailUrl: string;
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

  const playlistVideos: Array<YouTubeVideo> = [];

  playlistItems.forEach((playlistItem) => {
    const video = videos.get(playlistItem.contentDetails.videoId);

    if (!video) {
      return;
    }

    return {
      commentCount: parseInt(video.statistics.commentCount, 10),
      description: video.snippet.description,
      duration: video.contentDetails.duration,
      likeCount: parseInt(video.statistics.likeCount, 10),
      publishedAt: video.snippet.publishedAt,
      thumbnailUrl:
        video.snippet.thumbnails.standard?.url ||
        video.snippet.thumbnails.high.url,
      title: playlistItem.snippet.title,
      videoId: playlistItem.contentDetails.videoId,
      viewCount: parseInt(video.statistics.viewCount, 10),
    };
  });

  return playlistVideos;
};
