import { RecentVideo } from '../../types';

import fetchAllVideosPlaylistItems from './fetchAllVideosPlaylistItems';
import fetchVideo from './fetchVideo';

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
      commentCount: parseInt(video.statistics.likeCount, 10),
      likeCount: parseInt(video.statistics.likeCount, 10),
      thumbnail: {
        height: playlistItem.snippet.thumbnails.medium.height,
        url: playlistItem.snippet.thumbnails.medium.url,
        width: playlistItem.snippet.thumbnails.medium.width,
      },
      title: playlistItem.snippet.title,
      videoId: playlistItem.contentDetails.videoId,
    };
  });
};
