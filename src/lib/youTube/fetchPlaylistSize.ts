import axios from 'axios';

interface PlaylistItem {
  id: string;
}

export default async (playlistId: string): Promise<number> => {
  const { GOOGLE_CLOUD_API_KEY } = process.env;

  if (!GOOGLE_CLOUD_API_KEY) {
    throw new Error(`Missing environment variable: GOOGLE_CLOUD_API_KEY`);
  }

  let totalCount = 0;
  let nextPageToken: string | null | undefined = undefined;

  while (nextPageToken !== null) {
    let playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?${[
      `key=${GOOGLE_CLOUD_API_KEY}`,
      `maxResults=50`,
      `part=contentDetails`,
      `playlistId=${playlistId}`,
    ].join(`&`)}`;

    if (nextPageToken) {
      playlistItemsUrl += `&pageToken=${nextPageToken}`;
    }

    const playlistItemsResponse = await axios.get<{
      items: Array<PlaylistItem>;
      nextPageToken: string | null;
    }>(playlistItemsUrl);

    totalCount += playlistItemsResponse.data.items.length;
    nextPageToken = playlistItemsResponse.data.nextPageToken || null;
  }

  return totalCount;
};
