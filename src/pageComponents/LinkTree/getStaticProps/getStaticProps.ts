import type { GetStaticProps } from 'next';

import { YouTubeVideo } from './fetchRecentVideos';
import fetchVideos from './fetchVideos';

const LAS_VEGAS_PLAYLIST_ID = `PLupawb160v0yCwLfh4Eg3AfHYiAoJiTeY`;

interface Props {
  videos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      videos: await fetchVideos(LAS_VEGAS_PLAYLIST_ID),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
