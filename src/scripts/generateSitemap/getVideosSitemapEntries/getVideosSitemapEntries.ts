import { SitemapItemLoose } from 'sitemap';

import fetchVideos from './fetchVideos';

export default async (): Promise<Array<SitemapItemLoose>> => {
  const videos = await fetchVideos();

  return videos.map((video) => {
    return {
      url: `/videos/${video.videoId}`,
    };
  });
};
