import type { GetStaticProps } from 'next';

import fetchRecentVideos, { YouTubeVideo } from './fetchRecentVideos';

interface Props {
  recentVideos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      recentVideos: await fetchRecentVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
