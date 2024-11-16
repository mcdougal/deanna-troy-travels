import type { GetStaticProps } from 'next';

import fetchLinkTreeItems, { LinkTreeItem } from './fetchLinkTreeItems';
import fetchLinkTreePlaylist from './fetchLinkTreePlaylist';
import fetchVideos, { YouTubeVideo } from './fetchVideos';

const LAS_VEGAS_PLAYLIST_ID = `PLupawb160v0yCwLfh4Eg3AfHYiAoJiTeY`;

type Props = {
  linkTreeItems: Array<LinkTreeItem>;
  playlistTitle: string;
  playlistVideos: Array<YouTubeVideo>;
};

const getStaticProps: GetStaticProps<Props> = async () => {
  const playlist = await fetchLinkTreePlaylist();
  const playlistId = playlist?.playlistId || LAS_VEGAS_PLAYLIST_ID;
  const playlistTitle = playlist?.playlistTitle || `Lively Las Vegas`;

  return {
    props: {
      linkTreeItems: await fetchLinkTreeItems(),
      playlistTitle,
      playlistVideos: await fetchVideos(playlistId),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
