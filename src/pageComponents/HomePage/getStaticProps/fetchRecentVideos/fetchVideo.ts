import axios from 'axios';

interface Video {
  id: string;
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

interface VideosData {
  items: Array<Video>;
}

export default async (videoId: string): Promise<Video> => {
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?${[
    `key=${process.env.GOOGLE_CLOUD_API_KEY}`,
    `part=statistics`,
    `id=${videoId}`,
  ].join(`&`)}`;

  const videoResponse = await axios.get<VideosData>(videoUrl);

  return videoResponse.data.items[0];
};
