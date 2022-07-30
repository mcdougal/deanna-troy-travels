import fetch from 'node-fetch';

import { RecentVideo } from '../types';

export default async (): Promise<Array<RecentVideo>> => {
  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${[
    `key=${process.env.GOOGLE_CLOUD_API_KEY}`,
    `part=snippet`,
    `q=PLupawb160v0xF0_SUX5yHJE2GQogd7lx`,
    `type=video`,
  ].join(`&`)}`;

  const response = await fetch(playlistItemsUrl);

  console.log(`response:`);
  console.log(response);

  return [];
};

/*
import { google } from 'googleapis';

import { RecentVideo } from '../types';

export default async (): Promise<Array<RecentVideo>> => {
  const youtube = google.youtube({
    version: `v3`,
    auth: process.env.GOOGLE_CLOUD_API_KEY,
  });

  const videosResponse = await youtube.playlistItems.list({
    part: [`snippet`, `contentDetails`, `status`],
    playlistId: `PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`,
  });

  console.log(`videosResponse:`);
  //console.log(videosResponse);

  const videos = videosResponse.data.items || [];

  console.log(`videos:`);
  //console.log(videos);

  if (!videos) {
    throw new Error(`No recent YouTube videos found`);
  }

  return videos.map((video, i) => {
    console.log(`video`, i);
    //console.log(video);
    const thumbnail = video.snippet?.thumbnails?.default;
    const thumbnailHeight = thumbnail?.height;
    const thumbnailWidth = thumbnail?.width;
    const thumbnailUrl = thumbnail?.url;
    const title = video.snippet?.title;
    const videoId = video.snippet?.resourceId?.videoId;

    if (
      !thumbnailUrl ||
      !thumbnailHeight ||
      !thumbnailWidth ||
      !title ||
      !videoId
    ) {
      throw new Error(`Video missing required data: ${JSON.stringify(video)}`);
    }

    return {
      thumbnail: {
        height: thumbnailHeight,
        url: thumbnailUrl,
        width: thumbnailWidth,
      },
      title,
      videoId,
    };
  });
};
*/
