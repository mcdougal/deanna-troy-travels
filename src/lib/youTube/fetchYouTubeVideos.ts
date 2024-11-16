import axios from 'axios';

export type YouTubeVideo = {
  id: string;
  contentDetails: {
    caption: string;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    tags: Array<string>;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard?: {
        url: string;
        width: number;
        height: number;
      };
      maxres?: {
        url: string;
        width: number;
        height: number;
      };
    };
    title: string;
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
  status: {
    embeddable: boolean;
    license: string;
    privacyStatus: string;
    uploadStatus: string;
  };
};

export default async (
  videoIds: Array<string>,
): Promise<Map<string, YouTubeVideo | null>> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?${[
    `key=${GOOGLE_CLOUD_API_KEY}`,
    `id=${videoIds.join(`,`)}`,
    `part=contentDetails,snippet,statistics,status`,
  ].join(`&`)}`;

  const videoResponse = await axios.get<{ items: Array<YouTubeVideo> }>(
    videoUrl,
  );

  const videos = new Map<string, YouTubeVideo | null>();

  videoResponse.data.items.forEach((video) => {
    videos.set(video.id, video);
  });

  return videos;
};
