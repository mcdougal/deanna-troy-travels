import axios from 'axios';

export default async (playlistId: string): Promise<number> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?${[
    `key=${GOOGLE_CLOUD_API_KEY}`,
    `part=contentDetails`,
    `playlistId=${playlistId}`,
  ].join(`&`)}`;

  const playlistItemsResponse = await axios.get<{
    pageInfo: { totalResults: number };
  }>(playlistItemsUrl);

  return playlistItemsResponse.data.pageInfo.totalResults;
};
