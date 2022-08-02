import fetchAllVideosPlaylistItems from './fetchAllVideosPlaylistItems';
import fetchVideo from './fetchVideo';

export interface RecentVideo {
  commentCount: number;
  likeCount: number;
  thumbnailUrl: string;
  title: string;
  videoId: string;
}

export default async (): Promise<Array<RecentVideo>> => {
  const playlistItems = await fetchAllVideosPlaylistItems();

  const videos = await Promise.all(
    playlistItems.map(async (playlistItem) => {
      return fetchVideo(playlistItem.contentDetails.videoId);
    }),
  );

  return playlistItems.map((playlistItem, i) => {
    const video = videos[i];

    return {
      commentCount: parseInt(video.statistics.commentCount, 10),
      likeCount: parseInt(video.statistics.likeCount, 10),
      thumbnailUrl:
        playlistItem.snippet.thumbnails.standard?.url ||
        playlistItem.snippet.thumbnails.high.url,
      title: playlistItem.snippet.title,
      videoId: playlistItem.contentDetails.videoId,
    };
  });
};
