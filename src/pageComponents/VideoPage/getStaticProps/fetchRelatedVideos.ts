import {
  ALL_VIDEOS_PLAYLIST_ID,
  fetchPlaylistItems,
  fetchYouTubeVideos,
} from '@lib/youTube';

import { YouTubeVideo } from './fetchVideo';

export interface RelatedYouTubeVideo {
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

export default async (
  video: YouTubeVideo,
): Promise<Array<RelatedYouTubeVideo>> => {
  const playlistItems = await fetchPlaylistItems(ALL_VIDEOS_PLAYLIST_ID, {
    maxResults: `all`,
  });

  const videoIds = playlistItems.map((playlistItem) => {
    return playlistItem.contentDetails.videoId;
  });

  const videos = await fetchYouTubeVideos(videoIds);

  const allVideos = playlistItems.map((playlistItem, i) => {
    const playlistItemVideo = videos[i];

    return {
      commentCount: parseInt(playlistItemVideo.statistics.commentCount, 10),
      description: playlistItemVideo.snippet.description,
      duration: playlistItemVideo.contentDetails.duration,
      likeCount: parseInt(playlistItemVideo.statistics.likeCount, 10),
      publishedAt: playlistItemVideo.snippet.publishedAt,
      thumbnailUrl:
        playlistItemVideo.snippet.thumbnails.standard?.url ||
        playlistItemVideo.snippet.thumbnails.high.url,
      title: playlistItem.snippet.title,
      videoId: playlistItem.contentDetails.videoId,
      viewCount: parseInt(playlistItemVideo.statistics.viewCount, 10),
    };
  });

  const videoIndex = allVideos.findIndex((otherVideo) => {
    return otherVideo.videoId === video.videoId;
  });

  const relatedVideos = allVideos.slice(videoIndex + 1, videoIndex + 4);

  return [...relatedVideos, ...allVideos.slice(0, 3 - relatedVideos.length)];
};
