import { fetchPlaylistSize } from '@lib/youTube';

const USER_UPLOADS_PLAYLIST_ID = `UUJeRZkaH3ORHkNWUNqfXJEg`;

export default async (): Promise<number> => {
  return fetchPlaylistSize(USER_UPLOADS_PLAYLIST_ID);
};
