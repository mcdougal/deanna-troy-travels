import type { GetStaticProps } from 'next';

import fetchVideos, { YouTubeVideo } from './fetchVideos';

interface Props {
  videos: Array<YouTubeVideo>;
}

const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      videos: await fetchVideos(),
    },
    revalidate: 60,
  };
};

export default getStaticProps;
