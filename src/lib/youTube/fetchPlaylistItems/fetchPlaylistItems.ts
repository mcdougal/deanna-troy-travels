import axios from 'axios';

import makePlaylistItemsUrl from './makePlaylistItemsUrl';
import { PlaylistItem, PlaylistItemsApiResponse } from './types';

export default async (
  playlistId: string,
  options: { maxResults: `all` | number },
): Promise<Array<PlaylistItem>> => {
  if (typeof options.maxResults === `number`) {
    const playlistItemsResponse = await axios.get<PlaylistItemsApiResponse>(
      makePlaylistItemsUrl(playlistId, options.maxResults),
    );

    return playlistItemsResponse.data.items;
  }

  const playlistItems: Array<PlaylistItem> = [];
  let nextPageToken: string | null | undefined = null;

  while (nextPageToken !== undefined) {
    const playlistItemsUrl = makePlaylistItemsUrl(
      playlistId,
      50,
      nextPageToken || undefined,
    );

    const playlistItemsResponse = await axios.get<PlaylistItemsApiResponse>(
      playlistItemsUrl,
    );

    playlistItems.push(...playlistItemsResponse.data.items);

    nextPageToken = playlistItemsResponse.data.nextPageToken;
  }

  return playlistItems;
};
