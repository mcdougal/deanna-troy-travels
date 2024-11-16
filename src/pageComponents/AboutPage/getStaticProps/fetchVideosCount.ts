import { fetchPlaylistSize } from '@lib/youTube';

const ALL_VIDEOS_PLAYLIST_ID = `PLupawb160v0xF0_SUX5yHJE2GQogd7lx-`;

export default async (): Promise<number> => {
  return fetchPlaylistSize(ALL_VIDEOS_PLAYLIST_ID);
};
