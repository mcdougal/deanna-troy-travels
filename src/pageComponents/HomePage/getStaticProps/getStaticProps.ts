import type { GetStaticProps } from 'next';

import fetchRecentVideos, { RecentVideo } from './fetchRecentVideos';

interface Props {
  recentVideos: Array<RecentVideo>;
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
