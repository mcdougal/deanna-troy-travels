import type { GetStaticProps } from 'next';

import fetchLinkTreeItems, { LinkTreeItem } from './fetchLinkTreeItems';
import fetchVideos, { YouTubeVideo } from './fetchVideos';

const LAS_VEGAS_PLAYLIST_ID = `PLupawb160v0yCwLfh4Eg3AfHYiAoJiTeY`;

interface Props {
  linkTreeItems: Array<LinkTreeItem>;
  videos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      linkTreeItems: await fetchLinkTreeItems(),
      videos: await fetchVideos(LAS_VEGAS_PLAYLIST_ID),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
